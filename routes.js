// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
const USER_DETAIL = "/:id"; // ex) /users/1 
const EDIT_PROFILE = "/edit-profile"; // 주소창에 검색할때는 4000/users/edit-profile 이다.
const CHANGE_PASSWORD = "/change-password";

// /: -> 변수로 express가 인식한다.

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO ="/:id/edit"; // ex) /videos/1/edit
const DELETE_VIDEO = "/:id/delete";

const routes = {
  home: HOME,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  search: SEARCH,
  users: USERS,
  userDetail: (id) => {
    if(id) {
      return `/users/${id}`;
    } else {
      return USER_DETAIL;
    }
  },
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDEOS,
  upload: UPLOAD,
  videoDetail: (id) => {
    if(id) {
      return `/videos/${id}`
    } else {
      return VIDEO_DETAIL;
    }
  },
  editVideo: EDIT_VIDEO,
  deleteVideo: DELETE_VIDEO
};

export default routes;