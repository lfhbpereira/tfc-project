import MatchModel from '../database/models/match.model';
import Team from '../database/models/team.model';

export default class MatchService {
  static async getAll() {
    const matches = await MatchModel.findAll({
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return { message: matches };
  }

  static async getByQuery(query: string) {
    const inProgress = query === 'true';

    const matches = await MatchModel.findAll({ where: { inProgress },
      include: [
        { model: Team, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Team, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });

    return { message: matches };
  }
}
