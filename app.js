const bodyParser = require('body-parser');
const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');

const Clasification = require('./constrollers/clasification');
const Movie = require('./constrollers/movie');



//MongoDB Connection
mongoose.connect('mongodb+srv://admin-santiago:admin-santiago@cluster0.neqzd.mongodb.net/testDB', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// mongoose.connect('mongodb://127.0.0.1:27017/testDB', {useNewUrlParser: true, useUnifiedTopology: true});


const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.static('public'))


app.get('/', async (req, res)=>{
    const movies = await Movie.find(req, res);
    const clasifications = await Clasification.find(req,res);
    return res.render('home', {movies:movies, clasifications:clasifications} )
})

app.get('/createMovie', async (req, res)=>{
    const clasifications = await Clasification.find(req,res);
    return res.render('createMovie', {clasifications: clasifications})
})
app.get('/createClasification', async (req, res)=>{
    return res.render('createClasification', {})
})

app.route("/movies")
    .get(async function (req, res) {
        const movies = await Movie.find(req, res);
        return res.send(movies)
    })

    .post(async function (req, res) {
        const newMovie = await Movie.create(req, res);
        return res.send(newMovie)
    })
    .patch(async function (req, res) {
        const newMovie = await Movie.update(req, res);
        return res.send(newMovie)
    })
    .delete(async function (req, res) {
        const response = await Movie.deleteById(req, res)
        return res.send(response)
    })

app.route("/clasifications")
    .get(async function (req, res) {
        const clasifications = await Clasification.find(req, res);
        return res.send(clasifications)
    })

    .post(async function (req, res) {
        const newClasification = await Clasification.create(req, res);
        return res.send(newClasification)
    })
    .patch(async function (req, res) {
        const response = await Clasification.update(req, res);
        return res.send(response)
    })
    .delete(async function (req, res) {
        const response = await Clasification.deleteById(req, res)
        return res.send(response)
    })

app.route('/movies/:id')
    .get(async function (req, res) {
        Movie.findById(req)

    })
    .put(async function (req, res) {
        const title = req.params.title;
        Article.update({
                title: title
            }, {
                title: req.body.title,
                content: req.body.content
            }, {
                overwrite: true
            },
            function (err, response) {
                if (err) return err
                return res.send(response)
            })
    })

    .patch(async function (req, res) {
        const title = req.params.title;
        //Here we are only updating the fields for which we are provided updates for
        Article.update({
                title: title
            }, {
                $set: req.body
            },
            function (err, response) {
                if (err) return err
                return res.send(response)
            })
    })

    .delete(async function (req, res) {
        const title = req.params.title;
        Article.findOneAndDelete({
                title: title
            },
            function (err, response) {
                if (err) return err
                return res.send(response)
            })
    })

let PORT = process.env.PORT;

if (PORT == null || PORT == "") {
    PORT = 8000;
}

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
})
