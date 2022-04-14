const Item = require("../models/item.model");

const express = require("express");
const router = express.Router();

router.get("", async (req, res) => {
  try {
    const items = await Item.find().lean().exec();
    return res.send(items);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post("", async (req, res) => {
  try {
    const item = await Item.create(req.body);

    return res.status(201).send(item);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
