let orm = require('orm');

console.log()
orm.connect(`sqlite:///home/lovegood/WebstormProjects/Spider/movies.db`, function (err, db) {
//...
    if (err) throw err;

    var Movie = db.define("movie", {
        id : String,
        alt : String
    });

    var Report = db.define("introduction", {
        id : Number,
        movie_id : Number,
        content : String
    })

    Movie.find(function (err, movies) {
        if (err) throw err;
        //console.log(movies);
        for (let movie of movies) {
            let getMovieReport = require("./getMovieReport");
            //console.log(movie);
            let s = getMovieReport.getMovieReport(movie.alt);
            console.log({ id : Number(movie.id), movie_id : Number(movie.id), content : s});
            Report.create({ id : Number(movie.id), movie_id : Number(movie.id), content : s}, function (err, result) {
                if (err) console.log(err);
                if (err) throw err;
            });
        }
    })
});