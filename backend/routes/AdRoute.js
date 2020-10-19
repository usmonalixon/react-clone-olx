import express from "express";
import { isAuth } from "../util";
import Ad from "../models/adModel";

const router = express.Router();

router.get("/", async (req, res) => {
  const ads = await Ad.find({});
  res.send(ads);
});
router.get("/:id", async (req, res) => {
  const ad = await Ad.findOne({ _id: req.params.id });
  if (ad) {
    res.send(ad);
  } else {
    res.status(404).send({ message: "E'lon topilmadi." });
  }
});


router.post("/",isAuth, async (req, res) => {
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
    return res
      .status(201)
      .send({ message: "Yangi e'lon yaratildi.", data: newAd });
  }
  return res
    .status(500)
    .send({ message: "E'lonni yaratishlikda xatolik yuz berdi." });
});

router.put("/:id",isAuth, async (req, res) => {
  const adId = req.params.id;
  const ad = await Ad.findById(adId);
  if (ad) {
    ad.name = req.body.name;
    ad.image = req.body.image;
    ad.sort = req.body.sort;
    ad.phoneNumber = req.body.phoneNumber;
    ad.countRooms = req.body.countRooms;
    ad.sanuzel = req.body.sanuzel;
    ad.houseStorey = req.body.houseStorey;
    ad.builtAt = req.body.builtAt;
    ad.plan = req.body.plan;
    ad.withFurniture = req.body.withFurniture;
    ad.repairs = req.body.repairs;
    ad.nearBy = req.body.nearBy;
    ad.area = req.body.area;
    ad.fee = req.body.fee;
    ad.buildingType = req.body.buildingType;
    ad.roomHeight = req.body.roomHeight;
    ad.phoneNumber = req.body.phoneNumber;
    ad.category = req.body.category;
    ad.storey = req.body.storey;
    ad.author = req.body.author;
    ad.description = req.body.description;
    ad.price = req.body.price;
    const updatedAd = await ad.save();
    if (updatedAd) {
      return res
        .status(200)
        .send({ message: "E'lon o'zgartirildi.", data: updatedAd });
    }
  }
  return res
    .status(500)
    .send({ message: "E'lonni o'zgartirishlikda xatolik yuz berdi." });
});

router.delete("/:id",isAuth, async (req, res) => {
  const deletedAd = await Ad.findById(req.params.id);
  if (deletedAd) {
    await deletedAd.remove();
    res.send({ message: "E'lon muvaffaqiyatli o'chirildi." });
  } else {
    res.send("E'lonni o'chirishlikda xatolik yuz berdi.");
  }
});

export default router;
