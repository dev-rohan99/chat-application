// get inbox page
function inboxGet(req, res){

    res.status(200).json({
        title : 'Inbox - Chat Application'
    });

}



module.exports = {
    inboxGet
}
