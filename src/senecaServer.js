const seneca = require("seneca");
const service = seneca();

// math 가 sum 인 객체와 일치하는 생산자 함수를 노출

//-> math 속성이 sum 인 서비스에 대한 모든 요청 객체가 이함수로 전달
service.add(
  {
    math: "sum",
    //math 가 sum 인 객체와 일치하는 생산자 함수를(add를 말함) 노출
  },
  (msg, next) => {
    next(null, {
      sum: msg.values.reduce((total, value) => total + value, 0),
    });
  }
);

service.act({ math: "sum", values: [1, 2, 3] }, (err, msg) => {
  if (err) return console.err(err);
  console.log("sum=%s", msg.sum);
});
