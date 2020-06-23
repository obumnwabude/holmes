const request = require('supertest');
const express = require('express');
const getAllStreets = require('../api/v1/streets/index');

const app = express();

describe('Server', () => {
  it('can get all streets', (done) => {
    app.get('/streets', getAllStreets);
    request(app)
      .get('/streets')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.streets).toBeDefined();
      //  expect(response.body.streets).toBeInstanceOf(Array);
      //  expect(response.body.streets.length).toBeGreaterThan(0);
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
});
