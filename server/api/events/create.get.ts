export default defineEventHandler((e) => {
  return {
    form: {
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substring(0, 10),
      time: "00:00",
      oddDraw: 0,
      league: null,
      league_id: null,
      teams: [
        {
          team: null,
          team_id: null,
          odd: 0,
        },
        {
          team: null,
          team_id: null,
          odd: 0,
        },
      ],
    },
  };
});
