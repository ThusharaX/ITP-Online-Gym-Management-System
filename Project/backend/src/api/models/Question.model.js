// create connect to database
const mongoose = require("mongoose");

const Question = new mongoose.Schema({
 //email, qTopic , question, date ,status, weekNo

    Email:{
        type: String,
    },
    QTopic:{
        type: String,
    },
    Question:{
        type: String,
    },
    Date:{
        type: String,
    },
    Status:{
        type: String,
    },
    WeekNo:{
        type: String,
    }

});
module.exports = mongoose.model("Question", Question);