import express from "express";
import data from "./data";

const app = express();
app.get("/api/ads/:id", (req, res) => {
  const adId = req.params.id;
  const ad = data.ads.find((x) => x._id === adId);
  if (ad) res.send(ad);
  else res.status(404).send({ msg: "Ad Not Found." });
});

app.get("/api/ads", (req, res) => {
  res.send(data.ads);
});

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
