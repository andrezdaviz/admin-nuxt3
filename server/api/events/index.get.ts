import Evento from "../../models/Event";

export default defineEventHandler(async (e) => {
  const results = await Evento.find()
    .populate({
      path: "teams",
      populate: { path: "team_id" },
    })
    .populate("league_id");
  return {
    results,
  };
});
