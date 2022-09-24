import Evento from "../../models/Event";

export default defineEventHandler(async (e) => {
  const results = await Evento.find();

  return {
    results,
  };
});
