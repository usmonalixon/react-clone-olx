import mongoose from "mongoose";

const autoSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  sort: { type: String, required: true },
  color: { type: String, required: true },
  mile: { type: String, required: true },
  autoType: { type: String, default: "Panelniy", required: true },
  kuzov: { type: String, required: true },
  model: { type: String, required: true },
  builtAt: { type: String, required: false },
  addOptions: { type: String, default: "Bor", required: false },
  region: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  repairs: { type: String, default: "Ta'mir talab", required: true },
  category2: { type: String, required: true },
  fee: { type: String, default: "Bor", required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
});

const autoModel = mongoose.model("autoAd", autoSchema);
export default autoModel;
