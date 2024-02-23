const express = require("express");
const cors = require("cors");
const Pusher = require("pusher");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const pusher = new Pusher({
  appId: "xxxx",
  key: "xxxxxxxxxx",
  secret: "xxxxxxxxxx",
  cluster: "ap1",
  useTLS: true,
});

app.post("/send", (req, res) => {
  pusher.trigger("realtime-chat-app", "msg-" + req.body.nama, req.body);
  console.log(req.body);
  res.send({
    body: req.body,
  });
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
  console.log("Dont forget follow to my github ^^");
});
