const { Schema, model } = require('mongoose');


const postSchema = Schema({
    location: {
        type: String,
        required: true
    },
    hospital_name: {
        type: String,
        required: true
    },
    amountOfBlood: {
        type: Number,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    requiredBloodGroup: {
        type: String,
        required: true
    },

    patientDisease: {
        type: String,
        required: true
    },

    statusTime: {
        type: Date,
        default: Date.now()
    },

    postedUser: {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'userModel',
            required: true
        },
        name: {
            type: String,
            required: true
        }

    }
}, { timestamps: true })

const postModel = model("Post", postSchema);
module.exports = postModel;