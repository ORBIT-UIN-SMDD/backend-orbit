const controller = {}

//inisialisasi controller yang dibuat kesini
const auth = require("./auth_keangotaaan")
const profile = require("./profile")
const example = require("./example")

controller.auth = auth;
controller.profile = profile;
controller.example = example;


module.exports = controller