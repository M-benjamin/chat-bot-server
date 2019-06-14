import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();
app.use(cors);

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(process.env.PORT, () => {
  console.log(`Server run on localhost:${process.env.PORT}`);
});
