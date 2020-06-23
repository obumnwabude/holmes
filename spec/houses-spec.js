const request = require('supertest');
const express = require('express');
const getHouses = require('../api/v1/houses/index');

const app = express();

describe('Server', () => {
  it('can get number of houses', (done) => {
    app.get('/houses', getHouses);
    request(app)
      .get('/houses')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.houses).toBeDefined();
      //  expect(response.body.houses).toBeInstanceOf(Number);
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
});
