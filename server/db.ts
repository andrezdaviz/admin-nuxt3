import mongoose from "mongoose";
const pss = process.env.NUXT_MONGODB_PASSWORD;

export async function connectDB() {
  try {
    const db = await mongoose.connect(
      `mongodb+srv://andrzchsq:${pss}@cluster0.tjvi2po.mongodb.net/dbfbc?retryWrites=true&w=majority`
    );
    console.log("db conecctado: " + db.connection.db.databaseName);

    //const n = await Team.find();
  } catch (error) {
    console.log(error);
  }
}
