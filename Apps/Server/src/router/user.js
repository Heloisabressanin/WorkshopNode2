const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/user");

// routes



router.get("/", async (req, res) => {
  const allUsers = await userCtrl.getAllUsers(req.body);
  return res.json(allUsers);
});

router.get("/:id", async (req, res) => {
  const user = await userCtrl.getOneUser(req.params.id);
  return res.json(user);
});

router.delete("/:id", async (req, res) => {
  const deleteUser = await userCtrl.deleteUser(req.params.id);
  return res.json(deleteUser);
});

router.put("/:id", async (req, res) => {
  const updateUser = await userCtrl.updateUser(req, res);
  return res.json(updateUser);
});

module.exports = router;
