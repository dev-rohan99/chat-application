// get users page
function usersGet(req, res){

    res.status(200).json({
        title : 'Users - Chat Application'
    });

}



module.exports = {
    usersGet
}
