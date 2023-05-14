import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();

const startServer = async () => {
  try {
    app.use(cors());
    app.use(express.json({ limit: "50mb" }));

    app.use("/api/v1/post", postRoutes);
    app.use("/api/v1/dalle", dalleRoutes);

    app.get("/", (req, res) => {
      console.log("AAAAA");
      res.status(200).json({
        message: "Hello from DALL.E!",
      });
    });

    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log("Server started on port 8080"));
  } catch (error) {
    console.log(error);
  }
};

startServer();
