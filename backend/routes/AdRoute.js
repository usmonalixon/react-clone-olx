import express from "express";
import { isAuth } from "../util";
import Ad from "../models/adModel";

const router = express.Router();

router.get("/", async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        name: {
          $regex: req.query.searchKeyword,
          $options: "i",
        },
      }
    : {};
  const sortAd = req.query.sortAd
    ? req.query.sortAd === "lowest"
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const ads = await Ad.find({ ...category, ...searchKeyword }).sort(sortAd);
  res.send(ads);
});
router.get("/mine", isAuth, async (req, res) => {
  const ads = await Ad.find({ user: req.user._id });
});
router.get("/:id", async (req, res) => {
  const ad = await Ad.findOne({ _id: req.params.id });
  if (ad) {
    res.send(ad);
  } else {
    res.status(404).send({ message: "E'lon topilmadi." });
  }
});

router.post("/", isAuth, async (req, res) => {
  const ad = new Ad({
    name: req.body.name,
    image: req.body.image,
    image1: req.body.image1,
    image2: req.body.image2,
    image3: req.body.image3,
    image4: req.body.image4,
    image5: req.body.image5,
    image6: req.body.image6,
    image7: req.body.image7,
    image8: req.body.image8,
    sort: req.body.sort,
    phoneNumber: req.body.phoneNumber,
    countRooms: req.body.countRooms,
    sanuzel: req.body.sanuzel,
    houseStorey: req.body.houseStorey,
    builtAt: req.body.builtAt,
    plan: req.body.plan,
    withFurniture: req.body.withFurniture,
    repairs: req.body.repairs,
    rank: req.body.rank,
    region: req.body.region,
    liveArea: req.body.liveArea,
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

router.put("/:id", isAuth, async (req, res) => {
  const adId = req.params.id;
  const ad = await Ad.findById(adId);
  if (ad) {
    ad.name = req.body.name;
    ad.image = req.body.image;
    ad.image1 = req.body.image1;
    ad.image2 = req.body.image2;
    ad.image3 = req.body.image3;
    ad.image4 = req.body.image4;
    ad.image5 = req.body.image5;
    ad.image6 = req.body.image6;
    ad.image7 = req.body.image7;
    ad.image8 = req.body.image8;
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
    ad.region = req.body.region;
    ad.liveArea = req.body.liveArea;
    ad.area = req.body.area;
    ad.rank = req.body.rank;
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

router.delete("/:id", isAuth, async (req, res) => {
  const deletedAd = await Ad.findById(req.params.id);
  if (deletedAd) {
    await deletedAd.remove();
    res.send({ message: "E'lon muvaffaqiyatli o'chirildi." });
  } else {
    res.send("E'lonni o'chirishlikda xatolik yuz berdi.");
  }
});

export default router;
