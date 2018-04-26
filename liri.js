// I have no idea why this isn't working very frustrated i feel like my syntax is correct please dont give F ;) 
require("dotenv").config();

var keys =require("./keys");

var command = process.argv[2];

var Twitter =require("twitter");
var Spotify = require('node-spotify-api');
var request = require('request');
var spotify = new Spotify(keys.spotify);

switch(command){
    case "my-tweets":
        twitter();
        break;
    case "spotify-this-song":
        runspotify();
        break;
    case "movie-this":
        movies();
        break;
    default:
        console.log("follow the instructions");
}

//twitter function
//spotify function
// movie function

function twitter (){
    console.log("twitter started");
    var client = new Twitter(keys.twitter);

    var params = {screen_name: 'aronskelton'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
        if (!error) {
            console.log(tweets);
        }
    });
}

function runspotify (){
    // var spotify1 = new spotify(keys.spotify);

    spotify.search({ type: 'track',

        query: 'All the Small Things' }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        var songInfo = data.tracks.items;
        console.log("Artist(s): " + songInfo[0].artists[0].name);
        console.log("Song Name: " + songInfo[0].name);
        console.log("Preview Link: " + songInfo[0].preview_url);
        console.log("Album: " + songInfo[0].album.name);
        console.log("these songs are playing");
        console.log(data);
    });


}



// function movies() {
//     var movie = "Mr.Nobody";
//     var queryUrl = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

// }

// request(queryUrl)
// {
//     if (!movie) {
//         movie = 'Mr Nobody';
//     }


//run functions

    twitter();
    runspotify();
//     movies();
// }
