const request = require('supertest');
const express = require('express');
const getAllDistricts = require('../api/v1/districts/index');

const app = express();

describe('Server', () => {
  it('can get all districts', (done) => {
    app.get('/districts', getAllDistricts);
    request(app)
      .get('/districts')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.districts).toBeDefined();
        expect(response.body.districts).toBeInstanceOf(Array);
        expect(response.body.districts.length).toBeGreaterThan(0);
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
});
