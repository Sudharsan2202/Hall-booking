const express = require("express");
require("dotenv").config();
const roomsRouter = require("./routes/router");
const app = express();
app.use(express.json());
const PORT = Number(process.env.PORT) || 8000;

app.use("/rooms", roomsRouter);
app.get("/", (req, res) => {
    res.send("Welcome to the Server! 🌐");
  });

app.listen(PORT, () => {
    console.log(`server is listening to port: ${PORT}`);
  });