export const matches = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo'
    },
    awayTeam: {
      teamName: 'Grêmio'
    },
  },
  {
    id: 2,
    homeTeamId: 9,
    homeTeamGoals: 1,
    awayTeamId: 14,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional'
    },
    awayTeam: {
      teamName: 'Santos'
    },
  },
  {
    id: 3,
    homeTeamId: 4,
    homeTeamGoals: 3,
    awayTeamId: 11,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians'
    },
    awayTeam: {
      teamName: 'Napoli-SC'
    },
  },
  {
    id: 4,
    homeTeamId: 3,
    homeTeamGoals: 0,
    awayTeamId: 2,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo'
    },
    awayTeam: {
      teamName: 'Bahia'
    },
  },
  {
    id: 5,
    homeTeamId: 7,
    homeTeamGoals: 1,
    awayTeamId: 10,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Flamengo'
    },
    awayTeam: {
      teamName: 'Minas Brasília'
    },
  },
];

export const matchesInProgress = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 2,
    awayTeamId: 9,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'São Paulo'
    },
    awayTeam: {
      teamName: 'Internacional'
    },
  },
  {
    id: 2,
    homeTeamId: 6,
    homeTeamGoals: 1,
    awayTeamId: 1,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'Ferroviária'
    },
    awayTeam: {
      teamName: 'Avaí/Kindermann'
    },
  },
  {
    id: 3,
    homeTeamId: 11,
    homeTeamGoals: 0,
    awayTeamId: 10,
    awayTeamGoals: 0,
    inProgress: true,
    homeTeam: {
      teamName: 'Napoli-SC'
    },
    awayTeam: {
      teamName: 'Minas Brasília'
    },
  },
  {
    id: 4,
    homeTeamId: 7,
    homeTeamGoals: 2,
    awayTeamId: 15,
    awayTeamGoals: 2,
    inProgress: true,
    homeTeam: {
      teamName: 'Flamengo'
    },
    awayTeam: {
      teamName: 'São José-SP'
    },
  },
  {
    id: 5,
    homeTeamId: 5,
    homeTeamGoals: 1,
    awayTeamId: 3,
    awayTeamGoals: 1,
    inProgress: true,
    homeTeam: {
      teamName: 'Cruzeiro'
    },
    awayTeam: {
      teamName: 'Botafogo'
    },
  },
];

export const finishedMatches = [
  {
    id: 1,
    homeTeamId: 16,
    homeTeamGoals: 1,
    awayTeamId: 8,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'São Paulo'
    },
    awayTeam: {
      teamName: 'Grêmio'
    },
  },
  {
    id: 2,
    homeTeamId: 9,
    homeTeamGoals: 1,
    awayTeamId: 14,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Internacional'
    },
    awayTeam: {
      teamName: 'Santos'
    },
  },
  {
    id: 3,
    homeTeamId: 4,
    homeTeamGoals: 3,
    awayTeamId: 11,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Corinthians'
    },
    awayTeam: {
      teamName: 'Napoli-SC'
    },
  },
  {
    id: 4,
    homeTeamId: 3,
    homeTeamGoals: 0,
    awayTeamId: 2,
    awayTeamGoals: 0,
    inProgress: false,
    homeTeam: {
      teamName: 'Botafogo'
    },
    awayTeam: {
      teamName: 'Bahia'
    },
  },
  {
    id: 5,
    homeTeamId: 7,
    homeTeamGoals: 1,
    awayTeamId: 10,
    awayTeamGoals: 1,
    inProgress: false,
    homeTeam: {
      teamName: 'Flamengo'
    },
    awayTeam: {
      teamName: 'Minas Brasília'
    },
  },
];

export const newMatch = {
  homeTeamId: 16,
  awayTeamId: 8,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
};

export const newMatchResponse = {
  id: 1,
  homeTeamId: 16,
  homeTeamGoals: 2,
  awayTeamId: 8,
  awayTeamGoals: 2,
  inProgress: true,
};

export const newMatchEqualTeams = {
  homeTeamId: 16,
  awayTeamId: 16,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
};

export const newMatchTeamDoesNotExist = {
  homeTeamId: 16,
  awayTeamId: 17,
  homeTeamGoals: 2,
  awayTeamGoals: 2,
};

export const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJBZG1pbiIsInJvbGUiOiJhZG1pbiIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwicGFzc3dvcmQiOiIkMmEkMDgkeGkuSHhrMWN6QU8wblpSLi5CMzkzdTEwYUVEMFJRMU4zUEFFWFE3SHh0TGpLUEVaQnUuUFciLCJpYXQiOjE2NzYxNjAyNTIsImV4cCI6MTY3NjE2Mzg1Mn0.RDoV4aQIIKJLBCtkXnNu4fMbInEwxufDu8bhmQfo1PY';
