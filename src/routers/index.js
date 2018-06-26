import Router from 'koa-router';
import api from './api';

export default new Router().use('/api', api.routes(), api.allowedMethods());
