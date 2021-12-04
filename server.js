

const express= require("express");
const app = express();
const mongoose = require("mongoose");
const cors=require("cors");
const Book=require("./model/book.js");



app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());


const url="mongodb://localhost:27017/CartBooksDB";

//READING
app.get("/api/CartBookInfo",async (req,res)=>{

    try{

        await mongoose.connect(url);
        console.log("datababse Connected");
        
        Book.find((err,books)=>{
            if(err) console.log(err);
            else{
                res.send(books);
                mongoose.connection.close();
            }
        })

    }catch(err){
        console.log(error);
        
    }
});


// create data

app.post("/api/CartBookInfo",async (req,res)=>{

    try{

       
        
        const {bid,title,category,author,numberInStock,price,publishYear,image} = req.body;

        const book = new Book({
            bid:bid,
            title:title,
            category:category,
            author:author,
            numberInStock:numberInStock,
            price:price,
            publishYear:publishYear,
            image:image
        });

        await mongoose.connect(url);
        console.log("datababse Connected");

        book.save((err)=>{
            if(err) {console.log(err);
            res.send(err);}
            else{
                console.log("The document inserted successfully");

                res.send(book);
                mongoose.connection.close();
            }
        })

    }catch(err){
        console.log(error);
        
    }
});


// //update 1


app.put("/api/CartBookInfo/:id",async (req,res)=>{

    try{

       let _id= req.params.id;
       _id=mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("datababse Connected");

        Book.updateOne(
            {_id:_id},
            {
            $inc:{numberInStock:-1}
            },
            (err)=>{
                if(err) {
                    console.log(err);
                res.send(err);
            }else{
                
                res.send("Updated successFully");
                mongoose.connection.close();

            }
            });

    }catch(err){
        console.log(error);
        
    }
});



app.put("/api/CartBookInfo/:title",async (req,res)=>{

    try{

       let title= req.params.title;
    //    _id=mongoose.Types.ObjectId(_id);

        await mongoose.connect(url);
        console.log("datababse Connected");

        Book.updateOne(
            {title:title},
            {
            $inc:{numberInStock:1}
            },
            (err)=>{
                if(err) {
                    console.log(err);
                res.send(err);
            }else{
                
                res.send("Updated successFully");
                mongoose.connection.close();

            }
            });

    }catch(err){
        console.log(error);
        
    }
});

// // delete

// app.delete("/api/BookInfo/:id",async (req,res)=>{

//     try{

//        let _id= req.params.id;
//        _id=mongoose.Types.ObjectId(_id);
        
    

//         await mongoose.connect(url);
//         console.log("datababse Connected");

//         Book.deleteOne(
//             {_id:_id},
//             (err)=>{
//                 if(err) {
//                     console.log(err);
//                     res.send(err);
//             }else{
//                 res.send("Updated successFully");
//                 mongoose.connection.close();

//             }
//             });

//     }catch(err){
//         console.log(error);
        
//     }
// });

app.listen(5000,()=>{
    console.log("Server is up and listening at 5000")
});