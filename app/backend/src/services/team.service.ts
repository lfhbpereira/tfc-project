import TeamModel from '../database/models/team.model';

export default class TeamService {
  static async getAllTeams() {
    const teams = await TeamModel.findAll();

    return { message: teams };
  }
}
