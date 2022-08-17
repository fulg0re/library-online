import express from 'express';
import bodyParser from 'body-parser';

import { logInfo } from './utils/log.js';
import { routerConfigs } from './router-configs.js';

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routerConfigs.map(({
  method,
  route,
  handleFunction,
}) => app[method](route, handleFunction));

app.listen(3000, () => {
  logInfo('Library Online >> http://localhost:3000');
});
