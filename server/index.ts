import { Nitro } from "nitropack";
import { connectDB } from "./db";

export default (_nitroApp: Nitro) => {
  //run your connect code here
  connectDB();
};
