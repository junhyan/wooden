function a() {
    // setTimeout(function () {
    //     console.log(Date()+'444');
    //     return 'aa';
    // },3000);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("async await test...");
         }, 1000);
        });
}
console.log(Date()+'111');
async function b() {
const aa = await a();
console.log(aa);
console.log(Date()+'222');

}
b();
console.log(Date()+'333');

async function testSync() {
         const response = await new Promise(resolve => {
              setTimeout(() => {
                  resolve("async await test...");
               }, 1000);
          });
          console.log(response);
     }
     testSync();//async await test...

import Koa from 'koa';
import routers from './routers/index';
const app = new Koa();

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000);
