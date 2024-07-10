import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./data/database.js";
import authRoute from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const server = app.listen(process.env.PORT, () => {
  console.log(`Server started on port:${process.env.PORT}`);
});

connectDB().catch((err) => console.error(err));
