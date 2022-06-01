import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import orderRouter from "./routes/orders.js";
import recordsRouter from "./routes/records.js";
import usersRouter from "./routes/users.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
dotenv.config();
const port = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL)
  .then(
    app.listen(port, () =>
      console.log(
        chalk.cyanBright.bold("Data base and Server listening on port: ", port)
      )
    )
  )
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hi world");
});

//routes
app.use("/orders", orderRouter);
app.use("/records", recordsRouter);
app.use("/user", usersRouter);

//GLOBAL ERROR HANDLER
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});
