const Movie = require('../models/movie');
const Clasification = require('../models/clasfication');

module.exports = {
    create : async (req, res) =>{
        const { name, director, clasificationId} = req.body;
        const clasification = await Clasification.find({_id:clasificationId})
        console.log(clasification)
        const newMovie = await Movie.create({
            name:name, 
            director: director,
            clasification: clasification[0]._id
        })
        return newMovie
    },

    find : async (req, res) => {
        const movies = await Movie.find({})
        
        return movies
    },
    findById : async (req, res) => {
        const movie = await Movie.find({_id:req.body.id})
        return (movie)
    },
    delete : async (req, res) => {
        const response = await Movie.deleteMany({}, function (err, resp) {
            if (err) return err
            return resp
        })
        return response
    },
    deleteById : async (req, res) => {
        const { id } = req.body;
        const clasification = await Movie.findOneAndDelete({_id:id});
        console.log(id)
        return clasification
     },
    update : async(req, res) =>{
        const update = { name:req.body.name, director:req.body.director };
        const filter = {_id:req.body.id}
        const updatedMovie = await Movie.findOneAndUpdate(filter, update,{new:true})
        return updatedMovie
     }
}

