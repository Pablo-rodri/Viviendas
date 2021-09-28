const { Schema, model } = require("mongoose")

const houseSchema = new Schema({
    street: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },

    description: {
        type: String,
    },
    image: String

}, {
    timestamps: true
})

const House = model("House", houseSchema)

module.exports = House