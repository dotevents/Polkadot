const { addconference, getConf } = require("../controllers/conference");
const router = require("express").Router();

router.route("/getConf").get(getConf);
router.route("/addconference").post(addconference);

module.exports = router;
