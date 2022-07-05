// get login page
function loginGet(req, res){

    res.status(200).json({
        title : 'Login - Chat Application'
    });

}



module.exports = {
    loginGet
}
