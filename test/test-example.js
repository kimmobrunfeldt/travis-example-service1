const assert = require('assert');
const request = require('supertest')('http://localhost:3000');

describe('GET http://localhost:3000/api/test', () => {
  it('responds with json', () => {
    return request
      .get('/api/test')
      .set('Accept', 'application/json')
      .expect(200)
      .then(response => {
        assert.deepEqual(response.body, { test: true })
      });
  });
});
