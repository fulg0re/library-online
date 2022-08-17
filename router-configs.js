const expressMethods = {
  get: 'get',
};

export const routerConfigs = [
  {
    method: expressMethods.get,
    route: '/',
    handleFunction: (req, res) => {
      res.render('index');
    },
  },
];
