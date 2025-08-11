const mongoose = require("mongoose");

const connectDB = async () =>{
   try {
     mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Database connected");
    
   } catch (error) {
    console.log("Database error", error);
    process.exit(1);
    
   }
};

module.exports = connectDB;