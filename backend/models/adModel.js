import mongoose from "mongoose";

const adSchema = mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  image2: { type: String, required: false },
  image3: { type: String, required: false },
  image4: { type: String, required: false },
  image5: { type: String, required: false },
  image6: { type: String, required: false },
  image7: { type: String, required: false },
  image8: { type: String, required: false },
  sort: { type: String, default: "Novostroyka", required: true },
  countRooms: { type: String, required: true },
  houseStorey: { type: String, required: true },
  buildingType: { type: String, default: "Panelniy", required: true },
  plan: { type: String, required: true },
  sanuzel: { type: String, required: true },
  builtAt: { type: String, required: false },
  withFurniture: { type: String, default: "Bor", required: false },
  roomHeight: { type: String, required: false },
  region: { type: String, required: true },
  liveArea: { type: String, required: true },
  rank: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  repairs: { type: String, default: "Ta'mir talab", required: true },
  nearBy: { type: String, required: false },
  area: { type: String, required: true },
  category: { type: String, required: true },
  fee: { type: String, default: "Bor", required: true },
  storey: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true }, 
});


const adModel = mongoose.model("Ad", adSchema);

export default adModel;
