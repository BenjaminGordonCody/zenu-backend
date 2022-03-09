const Journal = require("./journalModel");

exports.addJournal = async (req, res) => {
  try {
    const newJournal = await Journal.create(req.body.journalObj);
    res.status(200).send({ Journal: newJournal });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message, body: req.body });
  }
};

exports.getJournal = async (req, res) => {
  try {
    const posts = await Journal.find(req.body);
    res.status(200).send({ posts });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message, body: req.body });
  }
};
