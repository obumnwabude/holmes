const request = require('request');
const server = require('../index');

const baseUrl = process.env.HOST || 'http://localhost:3000/';

describe('Server', () => {
  afterAll(() => server.close());
  describe('is working properly', () => {
    it('should return a status code of 200 on / (home route)', (done) => {
      request.get(baseUrl, (error, response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
    it('should return OK on / (home route)', (done) => {
      request.get(baseUrl, (error, response) => {
        expect(response.body).toBe('OK');
        done();
      });
    });
  });
});
