import { MongoClient } from 'mongodb';

import { logInfo } from '../utils/log.js';
import {
  MONGO_URL,
  MONGO_DB_NAME,
} from '../../temp-configs/server.js';

const mongoClient = new MongoClient(MONGO_URL);

export const mongoConnect = async () => {
  try {
    await mongoClient.connect();

    logInfo('Connected to mongo successfully');

    return {
      mongoClient,
      db: mongoClient.db(MONGO_DB_NAME),
    };
  } catch (error) {
    await mongoClient.close();

    throw error;
  }
};
