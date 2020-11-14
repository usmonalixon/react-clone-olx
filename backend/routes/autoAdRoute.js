import express from "express";
import { isAuth } from "../util";
import autoAd from "../models/autoAdModel";

const router = express.Router();

router.post("/", isAuth, async (req, res) => {
  const auto = new autoAd({
    name: req.body.name,
    image: req.body.image,
    sort: req.body.sort,
    color: req.body.color,
    mile: req.body.mile,
    autoType: req.body.autoType,
    kuzov: req.body.kuzov,
    model: req.body.model,
    builtAt: req.body.builtAt,
    addOptions: req.body.addOptions,
    region: req.body.region,
    phoneNumber: req.body.phoneNumber,
    repairs: req.body.repairs,
    category2: req.body.category2,
    fee: req.body.fee,
    author: req.body.author,
    description: req.body.description,
    price: req.body.price,
  });
const newAuto = await auto.save();
  if (newAuto) {
    return res
      .status(201)
      .send({ message: "Yangi avtomobil e'lonni yaratildi", data: newAuto });
  }
  return res
    .status(500)
    .send({ message: "E'lonni yaratishlikda xatolik yuz berdi." });
});
router.get("/", async (req, res) => {
  const category2 = req.query.category2
    ? { category2: req.query.category2 }
    : {};
  const searchKeyword2 = req.query.searchKeyword2
    ? {
        name: {
          $regex: req.query.searchKeyword2,
          $options: "i",
        },
      }
    : {};
  const sortAuto = req.query.sortAuto
    ? req.query.sortAuto === "lowest"
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const autos = await autoAd
    .find({ ...category2, ...searchKeyword2 })
    .sort(sortAuto);
  res.send(autos);
});

router.get("/:id", async (req, res) => {
  const auto = await autoAd.findOne({ _id: req.params.id });
  if (auto) {
    res.send(auto);
  } else {
    res.status(404).send({ message: "E'lon topilmadi." });
  }
});
router.delete("/:id",isAuth, async (req, res) => {
  const deletedAuto = await autoAd.findById(req.params.id);
  if (deletedAuto) {
    await deletedAuto.remove();
    res.send({ message: "E'lon muvaffaqiyatli o'chirildi." });
  } else {
    res.send("E'lonni o'chirishlikda xatolik yuz berdi.");
  }
});
export default router;
