const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {

    res.render("inicio.hbs");
  });

 module.exports = router
