import express from "express";
import config from "./config";
import dotenv from "dotenv";
import userRoute from "./routes/userRoute";
import adRoute from "./routes/AdRoute";
import adAutoRoute from "./routes/autoAdRoute";
import bodyParser from "body-parser";
import mongoose from "mongoose";

dotenv.config();

const mongodbUrl = config.MONGODB_URL;

mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));

const app = express();
app.use(bodyParser.json());
app.use("/api/users", userRoute);
app.use("/api/ads", adRoute);
app.use("/api/autos", adAutoRoute);
// app.get("/api/ads/:id", (req, res) => {
//   const adId = req.params.id;
//   const ad = data.ads.find((x) => x._id === adId);
//   if (ad) res.send(ad);
//   else res.status(404).send({ msg: "Ad Not Found." });
// });

// app.get("/api/ads", (req, res) => {
//   res.send(data.ads);
// });

app.listen(5000, () => {
  console.log("Server started at http://localhost:5000");
});
