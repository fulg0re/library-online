import express from 'express';
import bodyParser from 'body-parser';

import { logInfo } from './utils/log.js';
import { routerConfigs } from './router-configs.js';
import {
  SERVER_URL,
  SERVER_PORT,
} from './configs/server.js';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routerConfigs.map(({
  method,
  route,
  handleFunction,
}) => app[method](route, handleFunction));

app.listen(SERVER_PORT, () => {
  logInfo(`Library Online >> ${SERVER_URL.local}:${SERVER_PORT}`);
});
