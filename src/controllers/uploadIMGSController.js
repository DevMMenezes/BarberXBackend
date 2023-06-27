const multer = require("multer");
const fs = require("fs");
const UsuarioModels = require("../models/UsuarioModels");
const BarbeariaModels = require("../models/BarbeariaModels");

const storageImgUsers = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/usuarios");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
exports.setupMulterImgUsers = multer({
  dest: "public/usuarios",
  storage: storageImgUsers,
}).single("imgperfil");

exports.postImagePerfil = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({
      error: "Cod User no found",
    });
  }

 // await UsuarioModels.sync({ alter: true });
  const ValidaUser = await UsuarioModels.findByPk(id);

  try {
    if (ValidaUser.img_perfil) {
      await fs.unlink(`./public/usuarios/${ValidaUser.img_perfil}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }

  if (req.file) {
    const Data = await UsuarioModels.update(
      {
        img_perfil: req.file.filename,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({
      Data: Data,
    });
  } else {
    res.status(400).send("Please upload a valid image");
  }
};

//BARBEARIAS
const storageImgBarbers = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/barbearias");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
exports.setupMulterImgBarbers = multer({
  dest: "public/barbearias",
  storage: storageImgBarbers,
}).single("imgperfilbarber");

exports.postImageBarber = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.status(404).json({
      error: "Cod Barber no found",
    });
  }

  await BarbeariaModels.sync({ alter: true });
  const ValidaUser = await BarbeariaModels.findByPk(id);

  try {
    if (ValidaUser.img_perfil_barbearia) {
      await fs.unlink(`./public/barbearias/${ValidaUser.img_perfil_barbearia}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }
  } catch (error) {
    console.log(error);
  }

  if (req.file) {
    const Data = await BarbeariaModels.update(
      {
        img_perfil_barbearia: req.file.filename,
      },
      {
        where: {
          id: id,
        },
      }
    );

    res.status(200).json({
      Data: Data,
    });
  } else {
    res.status(400).send("Please upload a valid image");
  }
};
