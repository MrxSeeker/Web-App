var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var photoSchema = new Schema({
	'name': String,
	'path': String,
	'likes': Number,
	'username': String,
	'date': Date,
	'comments': Array,
	'reports': Number
});

var decay = require('decay')
	, hotScore = decay.hackerHot();

setInterval(function () {
	photos = []; // perhaps get recent posts saved in db here
	photos.forEach(function (photo) {
		photo.likes = hotScore(photo.likes, photo.date);
		// save so that next GET /entry/ gets an updated ordering
		save(photo);
	});
	console.log("a");
}, 60*1000); // run every 5 minutes, say

var Photo = mongoose.model('photo', photoSchema);
module.exports = Photo;