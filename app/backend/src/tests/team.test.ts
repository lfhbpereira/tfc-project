import * as chai from 'chai';
import * as sinon from 'sinon';

// @ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import { team, teams } from './mocks/team.mock';
import TeamModel from '../database/models/team.model';

const { expect } = chai;

chai.use(chaiHttp);

describe('Test /teams endpoint', () => {
  describe('When searching for all teams', () => {
    it('should return the 200 status code with all teams', async () => {
      sinon.stub(TeamModel, 'findAll').resolves(teams as TeamModel[]);

      const { status, body } = await chai.request(app).get('/teams');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(teams);
    });
  });
});

describe('Test /teams/:id endpoint', () => {
  describe('When searching for a team by id', () => {
    it('should return the 200 status code with the searched team', async () => {
      sinon.stub(TeamModel, 'findByPk').resolves(team as TeamModel);

      const { status, body } = await chai.request(app).get('/teams/1');

      expect(status).to.equal(200);
      expect(body).to.deep.equal(team);
    });
  });
});
