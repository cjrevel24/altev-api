const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(express.json());

app.use("/auth", cors(), require("./routes/auth"));
app.use("/olx", cors(), require("./routes/olx/api"));
app.use("/cebu", cors(), require("./routes/cebu/api"));
app.use("/vote", cors(), require("./routes/voting/api"));
app.use("/library", cors().require("./routes/library/api"));
app.use("/newsfeed", cors(), require("./routes/newsfeed/api"));
app.use("/stream", cors(), require("./routes/stream/api"));

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
