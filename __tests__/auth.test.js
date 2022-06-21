'use strict';

const { server, sequelize } = require('../src/server');
const base64 = require('base-64');
const supertest = require('supertest');
const mockRequest = supertest(server);

beforeAll(async () => {
  await sequelize.sync();
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Auth Tests', () => {

  test('allows a user to sign up with a POST to /signup', async () => {
    let response = await mockRequest.post('/signup').send({
      username: 'testusername',
      password: 'testpassword',
    });

    console.log('Response Body', response.body);
    expect(response.status).toEqual(200);
    expect(response.body.username).toEqual('testusername');
    expect(response.body.password).toBeTruthy();
    expect(response.body.username).not.toEqual('testpassword');
  });

});