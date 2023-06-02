const User = require("../models/user");
//const {successResponse, failledResponse} = require("./product")

const successResponse = (
  data,
  status = 200,
  message = "Success, this operation is successfully"
) => {
  return {
    status,
    message,
    data,
  };
};
const failledResponse = (
  data,
  status = 400,
  message = "Sorry this operation has failled"
) => {
  return {
    status,
    message,
    data,
  };
};
// Trouver un utilisateur par son ID
const getOneUser = async (id) => {
  try {
    const user = await User.findById(id);
    return successResponse(user);
  } catch (error) {
    return failledResponse(error);
  }
};

// Obtenir tous les utilisateurs
const getAllUsers = async () => {
  try {
    const allUsers = await User.find();
    return successResponse(allUsers);
  } catch (error) {
    return failledResponse(error);
  }
};

// Mettre à jour un utilisateur
const updateUser = async (req) => {
    if (!req.params.id) return false;
    const updates = { ...req.body };
  try {
    const updateUser = await User.findByIdAndUpdate(req.params.id, updates, { new: true });
    return successResponse(updateUser);
  } catch (error) {
    return failledResponse(error);
  }
};

// Supprimer un utilisateur
const deleteUser = async (id) => {
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    return successResponse(deleteUser);
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {getAllUsers, getOneUser}