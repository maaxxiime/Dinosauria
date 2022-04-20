const express = require("Express");
const router = express.Router();

const auth = require("../middlewares/auth.js");
const controllers = require("../controllers/boutiques.js");

const multer = require("../middlewares/multer_images.js");

router.post("/", auth, multer, controllers.create_product);
router.get("/", controllers.read_all);
router.put("/:TargetId", auth, multer, controllers.update_product);
router.delete("/:TargetId", auth, controllers.delete_product);

module.exports = router;
