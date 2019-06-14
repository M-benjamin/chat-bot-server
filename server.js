import express from "express";
import "dotenv/config";
import cors from "cors";

const port = process.env.PORT || 3000;

const app = express();
app.use(cors);

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.listen(port, () => {
  console.log(`Server run on localhost:${port}`);
});
