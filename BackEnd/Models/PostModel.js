const { Schema, model } = require('mongoose');


const postModel = Schema({
    postData: [{
        type: String,
        required: true,
    }],
    postedUser: {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true
        },
        createAt: {
            type: Date,
            default: Date.now()
        }

    }
})


module.exports = model("Post", postModel);