const { Router } = require("express");
const journalRouter = Router();
const { addJournal } = require("./journalControllers")

journalRouter.post("/journal", addJournal);


module.exports = journalRouter;
