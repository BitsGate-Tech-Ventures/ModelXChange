import express from "express";
import { connectDB } from "./data/database.js";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authroute.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});

connectDB().catch((err) => console.log(err));
