import express from "express";
import Ad from "../models/adModel";

const router = express.Router();

router.get("/", async (req, res) => {
  const ads = await Ad.find({});
  res.send(ads);
});
router.get('/:id', async (req, res) => {
  const ad = await Ad.findOne({ _id: req.params.id });
  if (ad) {
    res.send(ad);
  } else {
    res.status(404).send({ message: 'E\'lon topilmadi.' });
  }
});

router.post("/", async (req, res) => {
  const ad = new Ad({
    name: req.body.name,
    image: req.body.image,
    sort: req.body.sort,
    phoneNumber: req.body.phoneNumber,
    countRooms: req.body.countRooms,
    sanuzel: req.body.sanuzel,
    houseStorey: req.body.houseStorey,
    builtAt: req.body.builtAt,
    plan: req.body.plan,
    withFurniture: req.body.withFurniture,
    repairs: req.body.repairs,
    nearBy: req.body.nearBy,
    area: req.body.area,
    fee: req.body.fee,
    buildingType: req.body.buildingType,
    roomHeight: req.body.roomHeight,
    phoneNumber: req.body.phoneNumber,
    category: req.body.category,
    storey: req.body.storey,
    author: req.body.author,
    description: req.body.description,
    price: req.body.price,
  });
  const newAd = await ad.save();
  if (newAd) {
    return res.status(201).send({ message: "Yangi e'lon yaratildi.", data: newAd });
  }
  return res.status(500).send({message: "E'lonni yaratishlikda xatolik yuz berdi."})
});

export default router;
