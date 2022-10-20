const { Schema, model } = require('mongoose');

const commentSchema = Schema({
    commentData: [{
        type: String,
        required: true,
        maxlength: [3000, "Maximum length of your comment is 3000 words"]
    }
    ],

    commentedUser: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "userModel",
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

const commentModel = model("Comments", commentSchema);
module.exports = commentModel;