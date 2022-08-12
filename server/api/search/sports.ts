import Sport from "../../models/Sport";

export default defineEventHandler(async (e) => {
  const { q } = useQuery(e);
  const query = q || "";
  const results = await Sport.find({
    sport: { $regex: ".*" + query + ".*", $options: "i" },
  }).limit(5);

  return {
    results,
  };
});
