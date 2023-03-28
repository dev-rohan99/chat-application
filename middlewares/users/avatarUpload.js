const uploader = require("../../utilities/singleUploader");


function avatarUpload(req, res, next){

    const upload = uploader(
        'uploads',
        ['image/jpeg', 'image/jpg', 'image/png'],
        1000000,
        'Only allowed for jpeg, jpg or png format!'
    )

    upload.any()(req, res, (err) => {
        
        console.log(err.message);

        if(err){
            res.status(500).json({
                error : {
                    avatar : {
                        msg : err.message
                    }
                }
            })
        }else{
            next();
        }

    });

}


module.exports = avatarUpload;
