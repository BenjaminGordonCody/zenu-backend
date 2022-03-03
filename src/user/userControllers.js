const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    console.log("addUser", req.body);
    const newUser = await User.create(req.body);
    console.log("newUser", newUser);
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  console.log(req.body);

  try {
    const deleteUserReply = await User.deleteOne(req.body);
    res.status(200).send({ deleteCount: deleteUserReply.deletedCount });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.getStoredHash = async (username) => {
  try {
    console.log("getPasswordHash");
    const user = await User.findOne({ username: username });
    if (user["password"]) {
      return user.password;
    } else {
      return "";
    }
  } catch (error) {
    console.log(error);
  }
};

exports.giveToken = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    console.log("giveToken", user);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
  }
};

exports.updateTally = async (req, res) => {
  try {
    console.log("updateTally", req.body);
    const updateResponse = await User.findOneAndUpdate(
      { username: req.body.username },
      { taskTally: JSON.stringify(req.body.newTaskTally) }
    );
    console.log("response", updateResponse);
    // console. log("newUser", newUser);
    // res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      err: error.message,
      origin: "updateTally",
      requestBody: req.body,
    });
  }
};
