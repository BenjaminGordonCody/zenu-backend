const { Router } = require("express");
const {
  addUser,
  giveToken,
  deleteUser,
  updateTally,
} = require("./userControllers");
const { hashPass, checkPasswordAgainstDB } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.delete("/user", deleteUser);
userRouter.post("/login", checkPasswordAgainstDB, giveToken);
userRouter.put("/tally", updateTally);


module.exports = userRouter;
