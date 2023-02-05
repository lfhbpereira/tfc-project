import MatchModel from '../database/models/match.model';
import Team from '../database/models/team.model';

export default class MatchService {
  static async getAll() {
    const matches = await MatchModel.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    });

    return { message: matches };
  }
}
