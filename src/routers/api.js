import Router from 'koa-router';
import userController from '../controllers/userController';

export default new Router()
  .get('/user/getUserInfo', userController.getUserInfo)
  .get('/user/getUserInfoByName/:userName', userController.getUserInfoByName)
  // .post('/user/signUp.json', userInfoController.signUp)
