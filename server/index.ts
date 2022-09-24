import { Nitro } from "nitropack";
import { connectDB } from "./db";
import {
  createCountries,
  createSports,
  createLeague,
  createTeams,
  addOthersCountries,
} from "./utils/initSetup";

export default (_nitroApp: Nitro) => {
  //run your connect code here
  connectDB();
  createCountries();
  createSports();
  createLeague();
  addOthersCountries();
  createTeams();
};
