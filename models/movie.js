const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    director: {
        type:String,
        required: true
    },
    clasification: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Clasification'
    }
});

module.exports = mongoose.model('Movie',movieSchema);
