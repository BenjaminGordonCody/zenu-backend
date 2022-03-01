const User = require("./userModel");

exports.addUser = async (req, res) => {
  req.body.taskCount = {};
  console.log("addUser", req.body);
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message });
  }
};

exports.deleteUser = async (req, res) => {
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
    if (user.password) {
      return user.password;
    } else {
      return "no password found";
    }
  } catch (error) {
    console.log(error);
    return { err: "error in getStoredHash", user: user };
  }
};

exports.giveToken = async (req, res) => {
  try {
    res.status(200).send({
      token: "This user is legit",
      username: req.body.username,
    });
  } catch (error) {
    console.log(error);
  }
};
