const createError = require('create-error');

function notFoundHandler(req, res, next){

    next(createError(404, 'Your requested content was not found!'))

}


// default error handler
function errorHandler(err, req, res, next){

    // res.locals.err = process.env.NODE_ENV = 'development' ? err : {message : err.message};

    res.status(err.status || 500).json({
        title : 'Error Page'
    });
    // next();

}


module.exports = {
    notFoundHandler,
    errorHandler
}
