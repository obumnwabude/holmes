const request = require('supertest');
const app = require('../index');

describe('Server', () => {
  it('can get all districts', (done) => {
    request(app)
      .get('/api/v1/districts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.districts).toBeInstanceOf(Array);
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
  it('can return a given particular district given an id', (done) => {
    request(app)
      .get('/api/v1/district/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.district).toBeDefined();
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
});
