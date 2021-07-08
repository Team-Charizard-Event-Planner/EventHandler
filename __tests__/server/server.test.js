/* eslint-disable no-undef */
const request = require('supertest');

const server = 'http://localhost:3000';

xdescribe('route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      test('responds with index.html and status 200', () => {
        return request(server)
          .get('/')
          .expect(200);
      });
    });
  });

  describe('/404', () => {
    describe('GET', () => {
      test('responds to unused endpoints with status 404', () => {
        return request(server)
          .get('/404')
          .expect(404);
      })
    });
  });
});