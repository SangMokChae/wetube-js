import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = 'WeTube';
  res.locals.routes = routes;
  res.locals.user = {
    isAuthenticated: true,
    id: 1
  };
  next();
  // middleware가 req를 전달행야된다 그래서 (app에서 미들웨어가 커넥션과 라우트 사이(코드사이)에 존재해서 next()라 할 수있다.)
  // locals에 로컬변수를 저장하면 템플릿에서 사용이 가능하다.
  // local 변수를 global 변수로 사용하기 위해서 middleware로 만들어 준다.
  // localsMiddleware가 모든 라우터보다 위에 있어야 모든 라우터에 공통으로 적용이 가능하다.
};