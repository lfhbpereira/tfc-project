import * as chai from 'chai';
import * as sinon from 'sinon';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { login,
  loginInvalidEmail,
  loginInvalidPassword,
  loginWithoutEmail,
  loginWithoutPassword,
  user,
} from '../tests/mocks/user.mock';
import Token from '../auth/token';
import UserModel from '../database/models/user.model';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test /login endpoint', () => {
  afterEach(sinon.restore);

  describe('If a user tries to log in', () => {
    context('with right credentials', () => {
      it('should return the 200 status code with a token', async () => {
        sinon.stub(UserModel, 'findOne').resolves(user as UserModel);
        sinon.stub(Token, 'create').returns('token');

        const { status, body } = await chai.request(app).post('/login').send(login);

        expect(status).to.equal(200);
        expect(body).to.haveOwnProperty('token');
      });
    });

    context('without providing email', () => {
      it('should return the 400 status code with an error message', async () => {
        const { status, body } = await chai.request(app).post('/login').send(loginWithoutEmail);

        expect(status).to.equal(400);
        expect(body.message).to.equal('All fields must be filled');
      });
    });

    context('without entering a password', () => {
      it('should return the 400 status code with an error message', async () => {
        const { status, body } = await chai.request(app).post('/login').send(loginWithoutPassword);

        expect(status).to.equal(400);
        expect(body.message).to.equal('All fields must be filled');
      });
    });

    context('with an invalid email', () => {
      it('should return the 401 status code with an error message', async () => {
        const { status, body } = await chai.request(app).post('/login').send(loginInvalidEmail);

        expect(status).to.equal(401);
        expect(body.message).to.equal('Incorrect email or password');
      });
    });

    context('with an invalid password', () => {
      it('should return the 401 status code with an error message', async () => {
        const { status, body } = await chai.request(app).post('/login').send(loginInvalidPassword);

        expect(status).to.equal(401);
        expect(body.message).to.equal('Incorrect email or password');
      });
    });
  });
});

describe('Test /login/validate endpoint', () => {
  describe('When providing the right token', () => {
    it('should return the 200 status code with the user role', async () => {
      const { body: { token } } = await chai.request(app).post('/login').send(login);

      const { status, body } = await chai.request(app).get('/login/validate').set({ authorization: token });

      expect(status).to.equal(200);
      expect(body).to.deep.equal({ role: 'admin' });
    });
  });
});
