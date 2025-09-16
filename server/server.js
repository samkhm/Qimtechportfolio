require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
connectDB();

app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));

app.use("/api/auth", require("./routes/regLogRoutes"));
app.use("/api/admin_operations", require("./routes/adminTasksRoutes"));
app.use("/api/user", require("./routes/userTestimonyRoute"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});