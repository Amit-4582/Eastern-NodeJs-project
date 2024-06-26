const multer = require('multer');
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("Upload Destination", req.body);
        const { id } = req.body;
        const path = `./uploads/${id}`;
        fs.mkdirSync(path, { recursive: true });
        return cb(null, path);
    },
    filename: (req, file, cb) => {
        const fileName = `${Date.now()}-${file.originalname}`;
        req.myData = {
            fileName,
        };
        return cb(null, fileName);
    }
});

const upload = multer({ storage });

module.exports = upload;
