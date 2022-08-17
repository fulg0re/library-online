import { MongoClient } from 'mongodb';

import { logInfo } from '../utils/log.js';
import { mockData } from './mock-data.js';
import {
  MONGO_URL,
  MONGO_DB_NAME,
} from '../../temp-configs/server.js';

const client = new MongoClient(MONGO_URL);

const fillDBWithMockData = async () => {
  const db = client.db(MONGO_DB_NAME);

  await db.dropDatabase();

  mockData.map(async ({ collection, data }) => {
    await db.collection(collection).insertMany(data);
  });

  return null;
};

export const mongoConnect = async () => {
  try {
    await client.connect();

    logInfo('Connected to mongo successfully');

    // todo: use this only for local testing to fill DB with mocked data
    // await fillDBWithMockData();

    return null;
  } catch (error) {
    await client.close();

    throw error;
  }
};
