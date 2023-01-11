// node js 메모리 할당 해주는 new Buffer deprecated 됨
// 이미지를 만들어 주는 api sharp 에서  이미지를 덮어쓰는 방식 overlaywith 는 deprecated 되었다. composed 를 사용해야함
// const express = require("express");

// const sharp = require("sharp");

// const app = express();

// app.get(/\/thumbnail\.(jpg|png)/, (req, res, next) => {
//   console.log("req", req);
//   let format = req.params[0] === "png" ? "png" : "jpeg";
//   let width = 300;
//   let height = 200;
//   let border = 5;
//   let bgcolor = "#fcfcfc";
//   let fgcolor = "#ddd";
//   let textcolor = "#aaa";
//   let textsize = 24;
//   let image = sharp({
//     create: {
//       width: width,
//       height: height,
//       channels: 4,
//       background: { r: 0, g: 0, b: 0 },
//     },
//   });

//   const thumbnail = Buffer.from(
//     `<svg width="${width}" height="${height}>
//       <rect
//           x="0" y="0"
//           width="${width}" height="${height}"
//           fill="${fgcolor}" />
//       <rect
//           x="${border}" y="${border}"
//           width="${width - border * 2}" height="${height - border * 2}"
//           fill="${bgcolor}" />
//       <line
//           x1="${border * 2}" y1="${border * 2}
//           x2="${width - border * 2}" y2="${height - border * 2}"
//           stroke-width="${border}" stroke="${fgcolor}" />
//       <line
//           x1="${width - border * 2}" y1="${border * 2}"
//           x2="${border * 2}" y2="${height - border * 2}
//           stroke-width="${border}" stroke="${fgcolor}" />
//       <rect
//           x="${border}" y="${(height - textsize) / 2}"
//           width="${width - border * 2}" height="${textsize}"
//           fill="${bgcolor}" />
//       <text
//           x="${width / 2}" y="${height / 2}" dy="8"
//           font-family="Helvetica" font-size="${textsize}"
//           fill="${textcolor}" text-anchor="middle">${width} x ${height}</text>
// </svg>`
//   );
//   console.log("buffer", thumbnail);
//   image.composite(thumbnail)[format]().pipe(res);
// });

// app.listen(3002, () => {
//   console.log("redy");
// });
