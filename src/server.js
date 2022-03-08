require("./db/connection");
const express = require("express");
const app = express();
const userRouter = require("./user/userRoutes");
const cors = require("cors");
const journalRouter = require("./journalEntries/journalRoutes");
const port = 5001;


app.use(express.json()); //allows API to parse JSON
app.use(cors());
app.use(cors({ origin: process.env.REACT_DOMAIN }));
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });
app.use(userRouter);
app.use(journalRouter);
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
//comment
