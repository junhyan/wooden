import mongoose from 'mongoose';
//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://wooden:1@127.0.0.1:27017/wooden');//；连接数据库
const db = mongoose.connection;
db.once('open', function() {
    console.log(22222);
  });
export default mongoose;