import express from 'express';
import bodyParser from 'body-parser';

import { logError, logInfo } from './utils/log.js';
import { routerConfigs } from './router-configs.js';
import { mongoConnect } from './mongo/connection.js';
import {
  SERVER_URL,
  SERVER_PORT,
} from '../temp-configs/server.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routerConfigs.map(({
  method,
  route,
  handleFunction,
}) => app[method](route, handleFunction));

try {
  await mongoConnect();

  app.listen(SERVER_PORT, () => {
    logInfo(`Library Online >> ${SERVER_URL.local}:${SERVER_PORT}`);
  });
} catch (error) {
  logError(error.stack);
}
