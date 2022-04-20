const express = require("Express");
const router = express.Router();

const auth = require("../middlewares/auth.js");
const controllers = require("../controllers/commentaires.js");

router.post("/", auth, controllers.create_todos);
router.get("/", controllers.read_all);
router.put("/:TargetId", auth, controllers.update_commentaire);
router.delete("/:TargetId", auth, controllers.delete_commentaire);

module.exports = router;
