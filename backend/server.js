import express from "express";
import data from "./data";

const app = express();

app.get("/api/ads", (req, res) => {
  res.send(data.ads);
});
app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
