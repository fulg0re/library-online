import { v4 as uuidv4 } from 'uuid';

import { collectionNames } from '../../constants/collection.js';

export const dataSamples = [
  {
    collection: collectionNames.books,
    data: [
      {
        _id: uuidv4(),
        name: 'Some Book 1',
      },
      {
        _id: uuidv4(),
        name: 'Some Book 2',
      },
      {
        _id: uuidv4(),
        name: 'Some Book 3',
      },
      {
        _id: uuidv4(),
        name: 'Some Book 4',
      },
    ],
  },
];
