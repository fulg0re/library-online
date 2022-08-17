import mongoose from 'mongoose';

import { MONGO_DB_NAME } from '../../temp-configs/server.js';
import {
  logInfo,
  logError,
} from '../utils/log.js';

mongoose.connect(`mongodb://localhost/${MONGO_DB_NAME}`, { useNewUrlParser: true });

// todo @Denys: refactor this and make proper error handler
export const mongoConnect = (callback) => {
  try {
    mongoose.connection.on('error', (error) => {
      logError(`'connection error: '${error}`);
    });
    mongoose.connection.once('open', () => {
      logInfo('Connected to mongo DB successfully...');
      callback();
    });
  } catch (err) {
    logError(err);
  }
};
