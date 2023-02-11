import * as chai from 'chai';
import * as sinon from 'sinon';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { finishedMatches, matches, matchesInProgress } from './mocks/match.mock';
import { IMatches } from '../interfaces/IMatch';
import MatchModel from '../database/models/match.model';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test /matches endpoint', () => {
  afterEach(sinon.restore);

  describe('When searching for all matches', () => {
    it('should return the 200 status code with all matches', async () => {
      sinon.stub(MatchModel, 'findAll').resolves(matches as IMatches[]);

      const { status, body } = await chai.request(app).get('/matches');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(matches);
    });
  });

  describe('When searching for matches in progress', () => {
    it('should return the 200 status code with the matches in progress', async () => {
      sinon.stub(MatchModel, 'findAll').resolves(matchesInProgress as IMatches[]);

      const { status, body } = await chai.request(app).get('/matches?inProgress=true');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(matchesInProgress);
    });
  });

  describe('When searching for finished matches', () => {
    it('should return the 200 status code with the finished matches', async () => {
      sinon.stub(MatchModel, 'findAll').resolves(finishedMatches as IMatches[]);

      const { status, body } = await chai.request(app).get('/matches?inProgress=false');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(finishedMatches);
    });
  });
});
