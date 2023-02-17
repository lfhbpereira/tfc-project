import * as chai from 'chai';
import * as sinon from 'sinon';

// @ts-ignore
import chaiHttp = require('chai-http');

import {
  allTeamsLeaderboard,
  awayTeamLeaderboard,
  homeTeamLeaderboard,
} from './mocks/leaderboard.mock';
import { app } from '../app';
import sequelize from '../database/models';

const { expect } = chai;

chai.use(chaiHttp);

afterEach(sinon.restore);

describe('Test /leaderboard/home endpoint', () => {
  describe('When searching for home team leaderboard', () => {
    it('should return the 200 status code with home team leaderboard', async () => {
      sinon.stub(sequelize, 'query').resolves(homeTeamLeaderboard as any);

      const { status, body } = await chai.request(app).get('/leaderboard/home');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(homeTeamLeaderboard);
    });
  });
});

describe('Test /leaderboard/away endpoint', () => {
  describe('When searching for away team leaderboard', () => {
    it('should return the 200 status code with away team leaderboard', async () => {
      sinon.stub(sequelize, 'query').resolves(awayTeamLeaderboard as any);

      const { status, body } = await chai.request(app).get('/leaderboard/away');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(awayTeamLeaderboard);
    });
  });
});

describe('Test /leaderboard endpoint', () => {
  describe('When searching for all teams leaderboard', () => {
    it('should return the 200 status code with all teams leaderboard', async () => {
      sinon.stub(sequelize, 'query').resolves(allTeamsLeaderboard as any);

      const { status, body } = await chai.request(app).get('/leaderboard');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(allTeamsLeaderboard);
    });
  });
});
