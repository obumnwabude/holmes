const request = require('supertest');
const express = require('express');
const getStreet = require('../api/v1/street/[id]');

const app = express();

describe('Server', () => {
  it('should return a valid street with houses when given a valid id', (done) => {
    app.get('/street/:id', getStreet);
    request(app)
      .get('/street/1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.street).toBeDefined();
        expect(response.body.street.houses).toBeInstanceOf(Number);
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
  it('should return no street when given a non-existent or invalid id', (done) => {
    app.get('/street/:id', getStreet);
    request(app)
      .get('/street/50000') // Holmes does not have up to 50000 streets.
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(404);
        expect(response.body.street).toBeUndefined();
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
    request(app)
      .get('/street/i-am-invalid')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(404);
        expect(response.body.street).toBeUndefined();
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
});
