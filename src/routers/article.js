const express = require("express");
const Article = require("../models/article");
const router = new express.Router();

router.post("/articles", async (req, res) => {
  const article = new Article(req.body);

  try {
    await article.save();
    res.status(201).send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/articles", async (req, res) => {
  try {
    const articles = await Article.find({});
    res.send(articles);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/articles/:id", async (req, res) => {
  const _id = req.params.id;

  try {
    const article = await Article.findById(_id);
    if (!article) {
      return res.status(404).send();
    }
    res.send(article);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/articles/:id", async (req, res) => {
  const updates = Object.keys(req.body); //converts json to javascript
  const allowedUpdates = ["title", "input", "date"]; // specifing what propertises can be editable
  const isValidOperation = updates.every(
    (
      update ///checking if each propertises is similar to the one we want to update (also is a boolean type unlike map that can be manupilated)
    ) => allowedUpdates.includes(update)
  );

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid updates!" });
  }

  try {
    const article = await Article.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!article) {
      return res.status(404).send();
    }

    res.send(article);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete("/articles/:id", async (req, res) => {
  try {
    const article = await Article.findByIdAndDelete(req.params.id);
    if (!article) {
      res.status(400).send();
    }
    res.send(article);
  } catch (e) {
    res.status(500).send();
  }
});

module.exports = router;
