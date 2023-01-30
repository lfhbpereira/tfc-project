import * as chai from 'chai';
import * as sinon from 'sinon';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { login } from '../tests/mocks/user.mock';
import User from '../database/models/user.model';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test /login endpoint', () => {
  describe('If a user tries to log in', () => {
    context('with right credentials', () => {
      it('should return a 200 response with a token', async () => {
        sinon.stub(User, 'findOne').resolves(login as User);

        const { status, body } = await chai.request(app).post('/login').send(login);

        expect(status).to.equal(200);
        expect(body).to.haveOwnProperty('token');
      });
    });
  });
});
