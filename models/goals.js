const mongoose = require('mongoose');
const GoalSchema = new mongoose.Schema({

   
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    

    goal: {
        type: String,
        required: true
    },

   description: {
        type: String,
        required: true
    },

    started: {
        type: Date,
        required: true
    },

   

    
})
module.exports = mongoose.model('Goal', GoalSchema);