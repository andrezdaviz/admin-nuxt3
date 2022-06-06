import mongoose from "mongoose";

export async function connectDB() {
  try {
    const db = await mongoose.connect("mongodb://localhost/db_FBC");
    console.log("db conecctado: " + db.connection.db.databaseName);

    //const n = await Team.find();
  } catch (error) {
    console.log(error);
  }
}
