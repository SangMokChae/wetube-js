import routes from "../routes"; // default export 할때는 import에 {}를 사용하지 않는다.
import Video from "../models/Video"

export const home = async(req, res) => {
  try{
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch(error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};
// async는 javascript에게 함수의 어떤 부분을 꼭 기다리게 만드는 것이다.(왜냐하면 javascript는 한번에 여러 작업이 가능하기 때문에 넘어가지 않게 하기 위한 작업이라고 보면 된다.)
// await는 다음 과정이 끝날때까지 잠시 기다려 달라고 요청하는 것이다. (await는 async없이 사용할 수 없다.)

export const search = (req, res) => {
  const { query: { term: searchingBy } } = req;
  res.render("search", { pageTitle: "Search", searchingBy, videos });
} 

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

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "Video Detail"});

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "Edit Video"});

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "Delete Video"});