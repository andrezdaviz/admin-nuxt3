import Event from "../../models/Event";

export default defineEventHandler(async (event) => {
  const form = await useBody(event);
  const teams = form.teams;

  console.log(
    teams.map((t) => {
      return { team: t.team_id, odd: t.odd };
    })
  );

  const newEvent = new Event({
    league: form.league_id,
    timestamp: new Date(`${form.date} ${form.time}`),
    oddDraw: form.oddDraw || null,
    teams: teams.map((t) => {
      return { team: t.team_id, odd: t.odd };
    }),
  }).save();

  return { result: "save" };
});
