import TeamModel from '../database/models/team.model';

export default class TeamService {
  static async getAll() {
    const teams = await TeamModel.findAll();

    return { message: teams };
  }

  static async getTeamById(id: number) {
    const team = await TeamModel.findByPk(id);

    return { message: team };
  }
}
