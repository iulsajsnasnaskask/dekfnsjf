const { API } = require('easy-api.ts');

const api = new API({
  port: process.env.PORT || 3000,
  spaces: 2,
  reverseReading: false
});

api.routes.load('./routes').then(() => {
  console.log('Source loaded.')
  api.connect()
});
