import UserHelper from '../dbHelper/userHelper';
const userHelper = new UserHelper();
export default class UserService {
  async getUserInfo() {
    let resultData = await userHelper.getUserInfo() || {}
    let userInfo = {
      phone: resultData[0].phone,
      name: resultData[0].name
    }
    return userInfo
  }
}
