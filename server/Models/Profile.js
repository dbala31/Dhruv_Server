const mongoose = require('mongoose');
const Schema= mongoose.Schema;
const ProfileSchema = new Schema({
        user: {type: Schema.Types.ObjectId, ref: 'users'},
        handle: {type: String, required: true, max:40, min:2},
        company: {type: String},
        website: {type: String},
        location: {type: String},
        bio: {type: String},
        githubusername: {type: String},
        social: {
            youtube: {type: String},
            facebook: {type: String},
            twitter: {type: String},
            linkedin: {type: String},
            instagram: {type: String},
        },
        date: {type: Date, default: Date.now},
}
);
module.exports = Profile = mongoose.model('p3rofile', ProfileSchema);
