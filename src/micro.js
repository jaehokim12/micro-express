const express = require("express");

const sharp = require("sharp");

const app = express();
app.get("/", (req, res) => {
  res.send("this is home");
});
app.get(/\/thumbnail\.(jpg|png)/, async (req, res, next) => {
  let format = req.params[0] === "png" ? "png" : "jpeg";

  let image = sharp({
    create: {
      width: 300,
      height: 200,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 },
    },
  })
    .png()
    .toBuffer()
    .then((data) => {
      res.send(data);
    });
});

app.listen(3002, () => {
  console.log("redy");
});
