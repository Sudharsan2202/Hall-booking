const express = require("express");

const roomController =require("../controller/roomController")

const router = express.Router();

router.post("/createRoom", roomController.createRoom);
router.post("/bookRoom", roomController.bookRoom);
router.get("/allBookedRoom", roomController.getAllBookedRoom);
router.get("/listCustomers", roomController.getAllCustomerData);
router.get("/customerBookingHistory/:customerName", roomController.bookedCount);
module.exports = router;
