const app = require('../modules/app/app');

describe('App', () => {
  it('GET / responds with 200 containing "Hello, Petful user!"', () => {
    return supertest(app).get('/').expect(200, 'Hello, Petful user!');
  });
});
