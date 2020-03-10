//similar to other models
//string schema type called name to describe the genere
//required between 3 and 100 characters
//declare a virtual for the genre's url named url
//export the module

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema ({
  name: {type: String, required: true, min: 3, max: 100}
});

GenreSchema
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreSchema);
