const { Router } = require("express");
const journalRouter = Router();
const { addJournal, getJournal } = require("./journalControllers");

journalRouter.post("/journal", addJournal);
journalRouter.post("/getPosts", getJournal);

module.exports = journalRouter;
