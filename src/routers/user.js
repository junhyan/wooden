import Router from 'koa-router';
import userController from '../controllers/userController';

export default new Router()
  .get('/getUserInfo', userController.getUserInfo)
  .get('/getUserInfoByName/:userName', userController.getUserInfoByName)
  //.post('/user/signUp', userInfoController.signUp)
