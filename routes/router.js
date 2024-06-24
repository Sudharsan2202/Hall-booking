
const express = require("express");
const roomsRouter =require("./room") ;

const router = express.Router();

router.use("/room", roomsRouter);

module.exports = router;
