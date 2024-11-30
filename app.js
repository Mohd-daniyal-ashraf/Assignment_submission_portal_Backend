const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router1 = require("./routes/auth");
const router2 = require("./routes/assignments");

require("dotenv").config();
app.use(bodyParser.json());
// connect to mongoDB with 
mongoose
.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));

app.use("/", router1);
app.use("/", router2);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}...`);
});

