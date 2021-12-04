

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({

    bid:{
        type:String,
        required:[true,"Please enter book id"]
    },
    title:{
        type:String,
        required:[true,"Please enter book title"]
    },
    category:{
        type:String,
        required:[true,"Please enter category"]
    },
    author:{
        type:String,
        required:[true,"Please enter Author name"]
    },
    numberInStock:{
        type:Number,
        required:[true,"Please enter Number of book in stock"]
    },
    price:{
        type:Number,
        required:[true,"Please enter price"]
    },
    publishYear:{
        type:String,
        required:[true,"Please enter Publish Year"]
    },
    image:{
            type:String,
            required:[true,"Please enter Book Image"]
    }

});

const Book = mongoose.model("Book",bookSchema);

module.exports=Book;