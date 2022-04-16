const express = require("express");

const app = express();

app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/olx", require("./routes/olx/api"));
app.use("/cebu", require("./routes/cebu/api"));
app.use("/vote", require("./routes/voting/api"));
app.use("/library", require("./routes/library/api"));
app.use("/newsfeed", require("./routes/newsfeed/api"));

app.listen(8000, () => {
  console.log("Listening on port 5000");
});
