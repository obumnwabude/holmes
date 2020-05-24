const request = require('supertest');
const express = require('express');
const getDistrict = require('../api/v1/district/[id]');

const app = express();

describe('Server', () => {
  it('can get a district when given a valid id', (done) => {
    app.get('/district/:id', getDistrict);
    request(app)
      .get('/district/1')
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
  it('should return no district on #getDistrict when given a non-existent or invalid id', (done) => {
    app.get('/district/:id', getDistrict);
    request(app)
      .get('/district/50000') // Holmes does not have up to 50000 districts.
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(404);
        expect(response.body.district).toBeUndefined();
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
    request(app)
      .get('/district/i-am-invalid')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(404);
        expect(response.body.district).toBeUndefined();
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
});
