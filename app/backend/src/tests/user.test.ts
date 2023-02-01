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
  passcode,
} from '../tests/mocks/user.mock';
import User from '../database/models/user.model';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test /login endpoint', () => {
  afterEach(sinon.restore);

  describe('If a user tries to log in', () => {
    context('with right credentials', () => {
      it('should return the 200 status code with a token', async () => {
        sinon.stub(User, 'findOne').resolves(passcode as User);

        const { status, body } = await chai.request(app).post('/login').send(login);

        expect(status).to.equal(200);
        expect(body).to.haveOwnProperty('token');
      });
    });

    context('without providing email', () => {
      it('should return the 400 status code with an error message', async () => {
        sinon.stub(User, 'findOne').resolves(loginWithoutEmail as User);

        const { status, body } = await chai.request(app).post('/login').send(loginWithoutEmail);

        expect(status).to.equal(400);
        expect(body.message).to.equal('All fields must be filled');
      });
    });

    context('without entering a password', () => {
      it('should return the 400 status code with an error message', async () => {
        sinon.stub(User, 'findOne').resolves(loginWithoutPassword as User);

        const { status, body } = await chai.request(app).post('/login').send(loginWithoutPassword);

        expect(status).to.equal(400);
        expect(body.message).to.equal('All fields must be filled');
      });
    });

    context('with an invalid email', () => {
      it('should return the 401 status code with an error message', async () => {
        sinon.stub(User, 'findOne').resolves(null);

        const { status, body } = await chai.request(app).post('/login').send(loginInvalidEmail);

        expect(status).to.equal(401);
        expect(body.message).to.equal('Incorrect email or password');
      });
    });

    context('with an invalid password', () => {
      it('should return the 401 status code with an error message', async () => {
        sinon.stub(User, 'findOne').resolves(null);

        const { status, body } = await chai.request(app).post('/login').send(loginInvalidPassword);

        expect(status).to.equal(401);
        expect(body.message).to.equal('Incorrect email or password');
      });
    });
  });
});
