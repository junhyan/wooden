import User from '../models/user';
export default class UserHelper {
    async getUserInfo() {
        let query = User.find({});
        let res = null
        res = await query.then();      
        return res;
    }
}