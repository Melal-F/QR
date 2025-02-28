const express = require('express');
const controller = require('./controller');

const router = express.Router();

router.post('/generate-qr', controller.generateQR);

router.get("/", (req, res) => {
    res.send("API is working!");
  });

module.exports = router;
