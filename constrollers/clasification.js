const Clasification = require('../models/clasfication');
const Movie = require('../models/movie');

module.exports = {
    create : async (req, res) =>{        
        const { name } = req.body;
        const clasification = await Clasification.create({
            name,
        })

        return clasification
    },

    find : async (req, res) => {
        const clasifications = await Clasification.find({})
        return clasifications
    },
    delete : async (req, res) => {
        const response = await Clasification.deleteMany({}, function (err, resp) {
            if (err) return err
            return resp
        })
        return response
    },
    deleteById : async (req, res) => {
        const { id } = req.body;
        const response = await Clasification.findOneAndDelete({_id:id});
        const clasificationResult = await Clasification.find({_id:id})
        const clasification = clasificationResult[0]
        Movie.deleteMany({clasification:clasification._id}).remove().exec(function(err, data) {
            if (err) return err
            return data    
          })        
     },
     update : async(req, res) =>{
        const update = { name:req.body.name};
        const filter = {_id:req.body.id}
        const updatedClasification = await Clasification.findOneAndUpdate(filter, update,{new:true})
        return updatedClasification
     }
    }

