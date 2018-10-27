var mongoose = require('mongoose');
let mongo_url = process.env.NODE_ENV == 'production' ? process.env.MONGOLAB_URI : 'mongodb://localhost:27017/hack';

console.log("Connected to: " + mongo_url);
mongoose.connect(mongo_url, { useNewUrlParser: true });

var user = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    level0: {
        type: Boolean
    },
    level1: {
        type: Boolean
    },
    level2: {
        type: Boolean
    },
    level3: {
        type: Boolean
    },
    level4: {
        type: Boolean
    },
    level5: {
        type: Boolean
    }
});

var User = mongoose.model('User', user);
module.exports = { User };