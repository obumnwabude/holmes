const request = require('supertest');
const app = require('../index');

describe('Server', () => {
  afterAll(() => app.close());
  describe('is working properly', () => {
    it('should return a status code of 200 on / (home route)', (done) => {
      request(app)
        .get('/')
        .expect(200)
        .end((err) => {
          if (err) done.fail(err);
          else done();
        });
    });
  });
  describe('can get all districts', () => {
    it('should return districts', (done) => {
      request(app)
        .get('/districts')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end((err) => {
          if (err) done.fail(err);
          else done();
        });
    });
  });
});
