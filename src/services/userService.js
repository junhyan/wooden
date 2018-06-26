import userHelper from '../dbHelper/userHelper';
class UserService {
  async getUserInfo() {
    console.log(Date());
    let resultData = await userHelper.getUserInfo() || {}
    console.log(Date());
    let userInfo = {
      phone: resultData[0].phone,
      name: resultData[0].name
    }
    return userInfo
  }
};

export default new UserService();
