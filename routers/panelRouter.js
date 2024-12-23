const { Router } = require("express");
const panelCtrl = require('../controllers/panelControllers');

const panelRouter = Router();

panelRouter.get('/',panelCtrl.homePage);

module.exports = panelRouter;