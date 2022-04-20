const express = require("Express");
const router = express.Router();

const auth = require("../middlewares/auth.js");
const controllers = require("../controllers/commentaires.js");

router.post("/", auth, controllers.create_commentaire);
router.get("/", controllers.read_all);
router.put("/:TargetId", auth, controllers.upvote_commentaire);
router.put("/:TargetId", auth, controllers.downvote_commentaire);
router.delete("/:TargetId", auth, controllers.delete_commentaire);

module.exports = router;
