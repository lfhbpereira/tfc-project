export const homeTeams = (
  `SELECT t.team_name AS name,
  SUM(if(m.home_team_goals > m.away_team_goals, 3,
    if(m.home_team_goals = m.away_team_goals, 1, 0))) AS totalPoints,
  COUNT(m.home_team_id) AS totalGames,
  SUM(m.home_team_goals > m.away_team_goals) AS totalVictories,
  SUM(m.home_team_goals = m.away_team_goals) AS totalDraws,
  SUM(m.home_team_goals < m.away_team_goals) AS totalLosses,
  SUM(m.home_team_goals) AS goalsFavor,
  SUM(m.away_team_goals) AS goalsOwn,
  SUM(m.home_team_goals - m.away_team_goals) AS goalsBalance,
  round(SUM(if(m.home_team_goals > m.away_team_goals, 3,
    if(m.home_team_goals = m.away_team_goals, 1, 0))) / (COUNT(m.id) * 3) * 100, 2) AS efficiency
  FROM matches AS m
  INNER JOIN teams AS t
  ON m.home_team_id = t.id
  WHERE m.in_progress = false
  GROUP BY t.team_name
  ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn ASC`
);

export const awayTeams = (
  `SELECT t.team_name AS name,
  SUM(if(m.away_team_goals > m.home_team_goals, 3,
    if(m.away_team_goals = m.home_team_goals, 1, 0))) AS totalPoints,
  COUNT(m.away_team_id) AS totalGames,
  SUM(m.away_team_goals > m.home_team_goals) AS totalVictories,
  SUM(m.away_team_goals = m.home_team_goals) AS totalDraws,
  SUM(m.away_team_goals < m.home_team_goals) AS totalLosses,
  SUM(m.away_team_goals) AS goalsFavor,
  SUM(m.home_team_goals) AS goalsOwn,
  SUM(m.away_team_goals - m.home_team_goals) AS goalsBalance,
  round(SUM(if(m.away_team_goals > m.home_team_goals, 3,
    if(m.away_team_goals = m.home_team_goals, 1, 0))) / (COUNT(m.id) * 3) * 100, 2) AS efficiency
  FROM matches AS m
  INNER JOIN teams AS t
  ON m.away_team_id = t.id
  WHERE m.in_progress = false
  GROUP BY t.team_name
  ORDER BY totalPoints DESC, totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn ASC`
);
