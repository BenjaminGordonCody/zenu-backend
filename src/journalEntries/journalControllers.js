const Journal = require("./journalModel");

exports.addJournal = async (req, res) => {
  console.log("req.body", typeOf(re.body), req.body);
  try {
    const newJournal = await Journal.create(req.body);
    res.status(200).send({ Journal: newJournal });
  } catch (error) {
    console.log(error);
    res.status(500).send({ err: error.message, body: req.body });
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
