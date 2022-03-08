const Journal = require("./journalModel");

exports.addJournal = async (req, res) => {
  try {
    const newJournal = await Journal.create(req.body);
    res.status(200).send({ Journal: newJournal });
  } catch (error) {
    console.log(error);
    throw { err: error.message, body: req.body }
    res.status(500).send();
  }
};

// exports.updateJournal = async (req, res) => {
//   try {
//     const newJournal = await Journal.create(req.body);
//     res.status(200).send({ Journal: newJournal });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ err: error.message });
//   }
// };

// exports.addJournal = async (req, res) => {
//   try {
//     const newJournal = await Journal.create(req.body);
//     res.status(200).send({ Journal: newJournal });
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({ err: error.message });
//   }
// };
