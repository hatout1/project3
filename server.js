const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
app.use(cookieParser());
app.use(express.json());

// mongoose.connect(
//   "mongodb://localhost/mernauth",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log("successfully connected to database");
//   }
// );

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost/project_test";

mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  },
  () => {
    console.log("successfully connect to db");
  }
);

const userRouter = require("./routes/User");
app.use("/", userRouter);

const postsRoutes = require("./routes/postsRoutes");
app.use("/api", postsRoutes);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
