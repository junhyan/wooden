import Router from 'koa-router';
import user from './user';

export default new Router().use('/user', user.routes(), user.allowedMethods());
