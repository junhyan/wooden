import UserHelper from '../dbHelper/userHelper';
const userHelper = new UserHelper();
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

export default UserService;
