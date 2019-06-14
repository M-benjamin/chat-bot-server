import express from "express";
import "dotenv/config";

const app = express();

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(process.env.PORT, () => {
  console.log(`Server run on localhost:${process.env.PORT}`);
});
