import { mongoConnect } from '../connection.js';
import { dataSamples } from './config.js';
import { MONGO_DB_NAME } from '../../../temp-configs/server.js';
import { logError, logInfo } from '../../utils/log.js';

try {
  const { mongoClient, db } = await mongoConnect();

  await db.dropDatabase();

  logInfo(`DB "${MONGO_DB_NAME}" was dropped`);

  // using sync loop here
  for (let i = 0; i < dataSamples.length; i++) {
    await db
      .collection(dataSamples[i].collection)
      .insertMany(dataSamples[i].data);
  }

  logInfo('Fill DB finished successfully');

  await mongoClient.close();
} catch (error) {
  logError(error);
}
