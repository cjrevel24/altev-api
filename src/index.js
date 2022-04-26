const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/olx", require("./routes/olx/api"));
app.use("/cebu", require("./routes/cebu/api"));
app.use("/vote", require("./routes/voting/api"));
app.use("/library", require("./routes/library/api"));
app.use("/newsfeed", require("./routes/newsfeed/api"));
app.use("/stream", require("./routes/stream/api"));

const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log("Listening on port", port);
});
