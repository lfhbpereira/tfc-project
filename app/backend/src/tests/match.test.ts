import * as chai from 'chai';
import * as sinon from 'sinon';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import {
  finishedMatches,
  invalidToken,
  matches,
  matchesInProgress,
  newMatch,
  newMatchEqualTeams,
  newMatchResponse,
  newMatchTeamDoesNotExist,
  updatedScoreboard,
} from './mocks/match.mock';
import { IMatches } from '../interfaces/IMatch';
import { login } from './mocks/user.mock';
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
      expect(body[0]).to.have.property('inProgress');
    });
  });

  describe('When searching for matches in progress', () => {
    it('should return the 200 status code with the matches in progress', async () => {
      sinon.stub(MatchModel, 'findAll').resolves(matchesInProgress as IMatches[]);

      const { status, body } = await chai.request(app).get('/matches?inProgress=true');

      expect(status).to.equal(200);
      expect(body[0].inProgress).to.be.true;
    });
  });

  describe('When searching for finished matches', () => {
    it('should return the 200 status code with the finished matches', async () => {
      sinon.stub(MatchModel, 'findAll').resolves(finishedMatches as IMatches[]);

      const { status, body } = await chai.request(app).get('/matches?inProgress=false');

      expect(status).to.equal(200);
      expect(body[0].inProgress).to.be.false;
    });
  });

  describe('When registering a new match', () => {
    it('should return the 201 status code with the new match', async () => {
      sinon.stub(MatchModel, 'create').resolves(newMatchResponse as MatchModel);

      const { body: { token } } = await chai.request(app).post('/login').send(login);

      const { status, body } = await (
        chai.request(app).post('/matches').send(newMatch).set({ authorization: token })
      );

      expect(status).to.equal(201);
      expect(body).to.deep.equal(newMatchResponse);
    });
  });

  describe('If a user tries to register a new match', () => {
    context('with equal teams', () => {
      it('should return the 422 status code with an error message', async () => {
        const { body: { token } } = await chai.request(app).post('/login').send(login);

        const { status, body } = await (
          chai.request(app).post('/matches').send(newMatchEqualTeams).set({ authorization: token })
        );

        expect(status).to.equal(422);
        expect(body.message).to.equal('It is not possible to create a match with two equal teams');
      });
    });

    context('with a team that does not exist', () => {
      it('should return the 404 status code with an error message', async () => {
        const { body: { token } } = await chai.request(app).post('/login').send(login);

        const { status, body } = await (
          chai.request(app).post('/matches')
          .send(newMatchTeamDoesNotExist).set({ authorization: token })
        );

        expect(status).to.equal(404);
        expect(body.message).to.equal('There is no team with such id!');
      });
    });

    context('with an invalid token', () => {
      it('should return the 401 status code with an error message', async () => {
        const { status, body } = await (
          chai.request(app).post('/matches').send(newMatch).set({ authorization: invalidToken })
        );

        expect(status).to.equal(401);
        expect(body.message).to.equal('Token must be a valid token');
      });
    });
  });
});

describe('Test /matches/:id/finish endpoint', () => {
  describe('When updating the status of a match', () => {
    it('should return the 200 status code with a success message', async () => {
      const { status, body } = await chai.request(app).patch('/matches/41/finish');

      expect(status).to.equal(200);
      expect(body.message).to.equal('Finished');
    });
  });
});

describe('Test /matches/:id endpoint', () => {
  describe('When updating the scoreboard of a match', () => {
    it('should return the 200 status code with a success message', async () => {
      const { status, body } = await (
        chai.request(app).patch('/matches/42').send(updatedScoreboard)
      );

      expect(status).to.equal(200);
      expect(body.message).to.equal('Updated');
    });
  });
});
