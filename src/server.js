let express = require("express");
let app = express();
let stack = [];
// stack ::: 콜백함수를 연결하기위한 배열 변수

app.post("/stack", (req, res, next) => {
  // 호출 부
  let buffer = "";
  // 호출시작시 buffer 초기화
  // 매개변수에서 data라는 이벤트가 있으면 콜백 실행// 콜백 -> buffer = buffer + data;
  req.on("data", (data) => {
    buffer += data;
  });

  req.on("end", () => {
    // 매개변수에서 end 이벤트가 있으면 콜백 실행// 콜백 -> stack 배열에 buffer를 넣음
    stack.push(buffer);
    return next();
    //req, res 주기를 종료 하지 않으므로 next()로 다음 실행할 함수 호출
  });
});

app.delete("/stack", (req, res, next) => {
  // next 넘겨받음
  stack.pop();
  // stack의 method pop 호출로 stack 비움
  return next();
});

app.get("/stack/:index", (req, res) => {
  if (req.params.index >= 0 && req.params.index < stack.length) {
    // ex::req.data : server.data // stack[1] : stack[]

    return res.end("" + stack[req.params.index]);
  }
  res.status(404).end();
});

app.use("/stack", (req, res) => {
  res.send(stack);
});

app.listen(3000, () => {
  console.log("server is listen on 3000");
});
