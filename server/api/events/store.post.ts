import Event from "../../models/Event";

export default defineEventHandler(async (event) => {
  const form = await useBody(event);
  const { league_id, date, time, oddDraw, teams } = form;

  const newEvent = await new Event({
    league_id,
    timestamp: new Date(`${date} ${time}`),
    oddDraw: oddDraw || null,
    teams,
  }).save();
  console.log(newEvent);

  return { result: newEvent };
});
