import User from '../models/user';
class UserHelper {
    async getUserInfo() {
        let query = User.find({});
        let res = null
        res = await query.then();      
        return res;
    }
}
export default new UserHelper();