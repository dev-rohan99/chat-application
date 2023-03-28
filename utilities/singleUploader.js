const createError = require('create-error');
const multer = require('multer');
const path = require('path');


function uploader(fileCustomName, extName, size, errMsg){

    const uploadsFolder = `/uploads/`;

    const Storage = multer.diskStorage({
        destination : (req, file, cb) => {
            cb(null, uploadsFolder);
        },

        filename : (req, file, cb) => {
            cb(null, fileCustomName + '-' + Date.now() + '-' + file.originalname);
        }
    });

    const upload = multer({
        storage : Storage,
        limits : {
            fileSize : size
        },
        fileFilter : (req, file, cb) => {
            if(extName.includes(file.mimetype)){
                cb(null, true);
            }else{
                cb(createError(errMsg));
            }
        }
    }).single('photo');
    

    return upload;

}







module.exports = uploader;

