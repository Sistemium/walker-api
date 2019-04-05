import Router from 'koa-router';
import KoaApi from 'sistemium-mongo/lib/koa';
import { defaultRoutes } from 'sistemium-mongo/lib/api';
// import auth from 'sistemium-mongo/lib/auth';

import Location from '../models/Location';

const api = new Router()
  .prefix('/api');

defaultRoutes(api, [
  Location,
]);

export default new KoaApi({ api });
