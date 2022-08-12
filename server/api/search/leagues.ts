import modelLeague from "~~/server/models/League";

export default defineEventHandler(async (e) => {
  const { q } = useQuery(e);
  const result = await modelLeague.find().populate(["sport", "country"]);

  return {
    result,
  };
});
