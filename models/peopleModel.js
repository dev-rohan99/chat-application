const mongoose = require('mongoose');



const peopleDataSchema = mongoose.Schema({

    name : {
        type : String,
        required : true,
        trim : true
    },

    username : {
        type : String,
        required : true,
        unique : true,
        trim : true,
        lowercase : true
    },

    email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true
    },

    password : {
        type : String,
        trim : true,
        required : true
    },

    avatar : {
        type : String,
        required : true
    },

    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    }

}, {
    timestamps : true
});



const peopleModel = mongoose.model('peoples', peopleDataSchema);

module.exports = peopleModel;

