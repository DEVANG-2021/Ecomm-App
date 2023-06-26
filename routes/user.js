const router = require("express").Router();

router.get("/", (req, res) => {
   console.log("User Page");
});
module.exports = router;