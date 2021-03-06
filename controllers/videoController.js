import routes from "../routes"; // default export 할때는 import에 {}를 사용하지 않는다.
import Video from "../models/Video"

export const home = async(req, res) => {
  try{
    const videos = await Video.find({}).sort({ _id: -1 }); 
    // sort를 통해서 나중에 업로드 한 비디오가 위에 도달한다. 정렬 순서는 글자 순으로도 할 수있다.
    res.render("home", { pageTitle: "Home", videos });
  } catch(error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
// async는 javascript에게 함수의 어떤 부분을 꼭 기다리게 만드는 것이다.(왜냐하면 javascript는 한번에 여러 작업이 가능하기 때문에 넘어가지 않게 하기 위한 작업이라고 보면 된다.)
// await는 다음 과정이 끝날때까지 잠시 기다려 달라고 요청하는 것이다. (await는 async없이 사용할 수 없다.)

export const search = async(req, res) => {
  const { query: { term: searchingBy } } = req;
  let videos = [];
  try { // 비디오를 찾은 경우
    videos = await Video.find({ title: { $regex : searchingBy, $options: "i" }});
    // 만약 Video.find({title: searchingBy })로 입력한다면 내가 search input에 입력한 똑같은 것만 찾을 것이다. 
    // 단어를 포함한 것을 찾기 위해서 mongoose의 regex를 이용한다. // $options: "i"=(insensitive: 덜민감한) -> 대소문자를 구분하지 않게 하기 위해서 추가하는 옵션이다.
  } catch(error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
} ;

export const getUpload = (req, res) => res.render("upload", { pageTitle: "Upload"});

export const postUpload = async(req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async(req, res) => {
  const {
    params: {id}
  } = req;
  try {
    const video = await Video.findById(id);
    // findById 는 mongoose의 query옵션중에 하나이다.
    res.render("videoDetail", { pageTitle: video.title, video}); // video변수를 템플릿에 전달
  } catch(error) {
    res.redirect(routes.home);
  }
};

export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("editVideo", {pageTitle: `Edit ${video.title}`, video }); // title이 된다.
  } catch(error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const postEditVideo = async(req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    // title과 description은 model/Video.js 의 내용에 부합한다. 그래서 title: title = title이런 식으로 생각하면 된다.
    // mongoose가 인식하기 위해서 _id를 사용할때 "_"를 붙여줘야한다.
    res.redirect(routes.videoDetail(id));
  } catch(error) {
    console.log(error);
    res.redirect(routes.home);
  }
};
// get은 채워넣는 작업  / post는 업데이트 하고 redirect하는 작업이다.

export const deleteVideo = async(req, res) => {
  const {
    params: {id}
  } = req;
  try {
    await Video.findOneAndRemove({ _id: id});
  } catch(error) {
    console.log(error);
  }
  res.redirect(routes.home);
};