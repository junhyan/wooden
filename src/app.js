import Koa from 'koa';
import routers from './routers/index';
const app = new Koa();

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000);
