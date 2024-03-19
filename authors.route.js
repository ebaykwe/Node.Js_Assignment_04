const express = require("express");
const router = express.Router();

// Apply logger middleware to all routes in this router
router.use((req, res, next) => {
  console.log("request from authors");
  next();
});

// CRUD Endpoints
router.get("/", (req, res) => {
  res.json({ message: "We've received all the new Authors" });
});

router.post("/", (req, res) => {
  res.json({ message: "We've created new Authors" });
});

router.put("/", (req, res) => {
  res.json({ message: "We've updated all Authors" });
});

router.delete("/", (req, res) => {
  res.json({ message: "We've deleted all Authors" });
});

//Params
router.get("/:authorsId", (req, res) => {
  console.log(req.params);
  res.json({ message: "We've received all new Authors by ID" });
});

router.post("/:authorsId", (req, res) => {
  console.log(req.params);
  res.json({ message: "We've created new Authors by ID" });
});

router.put("/:authorsId", (req, res) => {
  console.log(req.params);
  res.json({ message: "We've updated all Authors by ID" });
});

router.delete("/:authorsId", (req, res) => {
  console.log(req.params);
  res.json({ message: " We've deleted all Authors by ID"});
});

module.exports = router;
