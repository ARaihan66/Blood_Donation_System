const { Schema, model } = require('mongoose');


const postSchema = Schema({
    postData: [{
        type: String,
        required: true,
    }],
    postedUser: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'userModel',
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

const postModel = model("Post", postSchema);
module.exports = postModel;