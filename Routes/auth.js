// imports
const router = require("express").Router();
// const auth = require("../Controllers/auth");
const ctrl = require("../Controllers");

// routes
router.post("/register", ctrl.auth.register);
router.post("/login", ctrl.auth.login);

// exports
module.exports = router;