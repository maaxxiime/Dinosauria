const multer = require("multer");

// defini les fichiers autorisés
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    // dossier de destination des images
    callback(null, "./images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split(".")[0].split(" ").join("_");
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + "." + extension);
  },
});

module.exports = multer({ storage: storage }).single("boutiqueImage");

// ‼️ <input type="file" name="boutiqueImage" />
// ‼️ formData.append("boutiqueImage", file) />