// Iteration #1
const mongoose = require("mongoose")
const {Schema, model} = mongoose

const droneSchema = new Schema({
    name: String,
    propellers: Number,
    maxSpeed: {
        type: Number,
        max: 18}
})

const Drone = model("Drone", droneSchema)

module.exports = Drone;