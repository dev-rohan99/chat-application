/**
 * error handler
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */

// default error handler
function errorHandler(error, req, res, next){

    let errorStatus = error.status || 500;
    let errorMessage = error.message || 'Unknown Errors';

    res.status(errorStatus).json({
        status : errorStatus,
        message : errorMessage,
        stack : error.stack
    });

}


module.exports = {
    errorHandler
}
