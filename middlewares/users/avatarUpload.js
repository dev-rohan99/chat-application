const uploader = require("../../utilities/singleUploader");


function avatarUpload(req, res, next){

    const upload = uploader(
        'uploads',
        ['image/jpeg', 'image/jpg', 'image/png'],
        1000000,
        'Only allowed for jpeg, jpg or png format!'
    )

}


module.exports = avatarUpload;
