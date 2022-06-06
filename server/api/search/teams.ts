import Team from "../../models/Team";

export default defineEventHandler(async (e) => {
  const result = await Team.find();

  return {
    result,
  };
});
