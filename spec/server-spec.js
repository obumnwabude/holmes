/**
 * The following Test was commented out after
 * it had worked well when the server is up and running.
 * But it fails in Travis CI build because Travis
 * starts the test without starting the server.
 */
/*
const request = require('request');

const baseUrl = 'http://localhost:3000/';

describe('server', () => {
  describe('GET /', () => {
    it('returns status code 200', (done) => {
      request.get(baseUrl, (error, response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
    });
  });
});
*/
