const { Router } = require("express");
const panelRouter = require("./panelRouter");
const productRouter = require("./productRouter");
const CategoryRouter = require("./categoryRouter");
const SubCategoryRouter = require("./SubCategoryRouter");
const ExtraSubCategoryRouter = require('./ExtraSubCategoryRouter');

const router = Router();

router.use('/',panelRouter);
router.use('/product',productRouter);
router.use('/Category',CategoryRouter);
router.use('/Category',SubCategoryRouter);
router.use('/Category',ExtraSubCategoryRouter);

module.exports = router;