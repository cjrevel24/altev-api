const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
};

app.use(express.json());

app.use("/auth", cors(corsOptions), require("./routes/auth"));
app.use("/olx", cors(corsOptions), require("./routes/olx/api"));
app.use("/cebu", cors(corsOptions), require("./routes/cebu/api"));
app.use("/vote", cors(corsOptions), require("./routes/voting/api"));
app.use("/library", cors(corsOptions).require("./routes/library/api"));
app.use("/newsfeed", cors(corsOptions), require("./routes/newsfeed/api"));
app.use("/stream", cors(corsOptions), require("./routes/stream/api"));

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
