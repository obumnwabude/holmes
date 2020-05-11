const request = require('supertest');
const express = require('express');
const queries = require('../queries');

const app = express();

describe('Database', () => {
  it('should return all districts on #getAllDistricts', (done) => {
    app.get('/districts', queries.getAllDistricts);
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
  it('should return a valid district on #getDistrict when given a valid id', (done) => {
    app.get('/district/:id', queries.getDistrict);
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
  it('should return no district on #getDistrict when given a non-existent id', (done) => {
    app.get('/district/:id', queries.getDistrict);
    request(app)
      .get('/district/50000') // Holmes does not have up to 50000 districts.
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.district).toBeUndefined();
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
  it('should return no district on #getDistrict when given invalid or non-numeric id', (done) => {
    app.get('/district/:id', queries.getDistrict);
    request(app)
      .get('/district/i-am-invalid')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(400);
        expect(response.body.district).toBeUndefined();
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
  it('should return all streets on #getAllStreets', (done) => {
    app.get('/streets', queries.getAllStreets);
    request(app)
      .get('/streets')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect((response) => {
        expect(response.status).toBe(200);
        expect(response.body.streets).toBeDefined();
        expect(response.body.streets).toBeInstanceOf(Array);
        expect(response.body.streets.length).toBeGreaterThan(0);
      })
      .end((err) => {
        if (err) done.fail(err);
        else done();
      });
  });
});
