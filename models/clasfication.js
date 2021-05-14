const mongoose = require('mongoose');


const clasificationSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
});

module.exports = mongoose.model('Clasification',clasificationSchema);