import Sport from "../../models/Sport";

export default defineEventHandler(async (e) => {
  const result = await Sport.find();
  return {
    result,
  };
});
