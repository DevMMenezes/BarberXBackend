const express = require("express");
const router = express.Router();
const uploadIMGSController = require("../controllers/uploadIMGSController");
const UserAuth = require("../middlewares/UserAuth");

router.post(
  "/:id/imgperfil",
  uploadIMGSController.setupMulterImgUsers,
  uploadIMGSController.postImagePerfil
);

router.post(
  "/:id/imgperfilbarber",
  uploadIMGSController.setupMulterImgBarbers,
  uploadIMGSController.postImageBarber
);


module.exports = router;
