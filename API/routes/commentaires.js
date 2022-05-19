const express = require("Express");
const router = express.Router();

const auth = require("../middlewares/auth.js");
const controllers = require("../controllers/commentaires.js");

router.post("/postcommentaire", auth, controllers.create_commentaire);
router.get("/readcommentaire", controllers.read_all);
router.get("/compte", controllers.read_all_by_userId);
// router.put("/:TargetId", auth, controllers.upvote_commentaire);
// router.put("/:TargetId", auth, controllers.downvote_commentaire);
router.delete("/:TargetId", auth, controllers.delete_commentaire);


module.exports = router;
