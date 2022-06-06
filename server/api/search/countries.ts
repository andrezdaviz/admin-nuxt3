import Country from "../../models/Country";

export default defineEventHandler(async (e) => {
  const result = await Country.find();

  return {
    result,
  };
});
