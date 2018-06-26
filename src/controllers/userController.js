import UserInfoService from '../services/userService';
const userInfoService = new UserInfoService();
class UserController {
  async getUserInfo( ctx ) {
    let result = {
      success: false,
      message: '',
      data: null,
    }
    let userInfo = await userInfoService.getUserInfo();
    if ( userInfo ) {
      result.data = userInfo;
      result.success = true;
      result.message = 'success';
    } else {
      result.message = 'fault';
    }
    ctx.body = result;
  }
  async getUserInfoByName( ctx ) {
    let session = ctx.session
    let userName = ctx.params.userName;
    let result = {
      success: false,
      message: userName,
      data: null,
    }
    // let userInfo = await userInfoService.getUserInfo();
    // if ( userInfo ) {
    //   result.data = userInfo;
    //   result.success = true;
    //   result.message = 'success';
    // } else {
    //   result.message = 'fault';
    // }
    ctx.body = result;
  }
  
}
export default new UserController();
