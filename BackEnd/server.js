// Skeleton for Server Taken from Expressjs.com
const express = require('express')
const app = express()
// Port changed from 3000 to 4000 to avoid collision of app - they are completely different domains
const port = 4000

// CORS is installed - Cross Origin Resource Sharing
// Unless this is installed, resources outside your domain cannot be used - this is for security
const cors = require('cors');

// Acquiring Mongoose
const mongoose = require('mongoose');

app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// body parser
const bodyParser = require('body-parser'); 
// parse application
app.use(bodyParser.urlencoded({ extended: false}))
// parse application/json
app.use(bodyParser.json())

// Conncection String from database - Using Mongoose to connect to our database
const strConnection = 'mongodb+srv://admin:admin@cluster0.tfujv.mongodb.net/BriansMovies?retryWrites=true&w=majority';
mongoose.connect(strConnection, {useNewUrlParser: true});


// Schema allows us to store what we want - what kind of data
const Schema = mongoose.Schema;

// New instance of Schema
var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

// Collection to be stored in - name, schema
var movieModel = mongoose.model('film', movieSchema);


// Listening for a GET request at /api/movies
app.get('/api/movies', (req, res) => {

    // const mymovies = [ 
    //     {
    //         "Title": "World War Z",
    //         "Year": "2013",
    //         "imdbID": "tt0816711",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    //     }
    //     , {
    //         "Title": "War of the Worlds",
    //         "Year": "2005",
    //         "imdbID": "tt0407304",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    //     }
    // ];

    // ({objectPassingDown:constantUsed})
    // Sending a status code - many things can be done here instead
    //res.status(200).json({
    //    message: "This is a message",
    //    movies: mymovies
    //});

    // Finds all records in database
    movieModel.find((err, data)=>{
        res.json(data);
    })

})

// HTTP Req - get
app.get('/api/movies/:id', (req, res)=>{
    // Passes ID to the console
    console.log(req.params.id);

    // Callback function
    movieModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
});

// HTTP Req - put
app.put('/api/movies/:id',(req, res)=>{
    console.log("Update "+req.params.id);

    // Callback - Replacing with a new record
    movieModel.findByIdAndUpdate(req.params.id,
        req.body,
        (err, data)=>{
            res.status(200).send(data);
        })
})

// HTTP Req - delete
app.delete('/api/movies/:id', (req, res)=>{
    console.log('Delete '+req.params.id);

    // Deleting Movie by ID
    movieModel.findByIdAndDelete({_id:req.params.id}, (err, data)=>{
        if(err)
            res.send(err);
        res.send(data);
    })
})

// Listening for a POST request at /api/movies - pull the info
app.post('/api/movies', (req, res)=>{
    console.log('Movie Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    movieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })

    res.send('Data Recieved!');

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})