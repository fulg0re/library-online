import { v4 as uuidv4 } from 'uuid';

export const mockData = [
  {
    collection: 'books',
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
    ],
  },
];
