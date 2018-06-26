import dbHandler from '../dbHandler/dbHandler';
//import dbHandler from 'mongoose';
var Schema = dbHandler.Schema;

var UserSchema = new Schema({
	phone: {
        type: String,
        unique: true 
    },
    name: String
},
{
    collection: 'Users'
}
);

// // Defines a pre hook for the document.
// UserSchema.pre('save', function(next) {
//   if (this.isNew) {
//     this.meta.createAt = this.meta.updateAt = Date.now()
//   }
//   else {
//     this.meta.updateAt = Date.now()
//   }
//   next()
// })


/**
 * 定义模型User
 * 模型用来实现我们定义的模式，调用mongoose.model来编译Schema得到Model
 * @type {[type]}
 */
// 参数User 数据库中的集合名称, 不存在会创建.
export default dbHandler.model('Users', UserSchema);