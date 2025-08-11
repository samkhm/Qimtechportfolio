const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) =>{
    
try {
    const { first_name, last_name, email,
        password
    } = req.body;

    const emailExist = await User.findOne({ email });
    if(emailExist) return res.status(401).json({ message: "User Already Exist"});
    

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ first_name, last_name, email,
        password: hashed});

    const token = jwt.sign({ id: user._id, role: user.role, email:user.email, first_name: user.first_name}, process.env.JWT_SECRET, {
        expiresIn: '24h'
    });
    res.json({ token });
    
} catch (error) {
    console.log("Failed to connect server", error);
    
}
};

exports.login = async (req, res) =>{
    try {
        const { email, password} = req.body;

        const user = await User.findOne({ email });
        if(!user) return res.status(404).json({ message: "Email not found"});

        const passMatch = await bcrypt.compare(password, user.password);
        if(!passMatch) return res.status(401).json({ message: "Incorrect password"});

        const token = jwt.sign({ id: user._id, role: user.role, email: user.email, first_name: user.first_name}, process.env.JWT_SECRET, {
            expiresIn: '24h'
        });

        res.json({ token });
        
    } catch (error) {
        console.log("Failed to connect server", error);
        
    }

};

exports.getAllUsers = async (req, res) =>{
  const users =  await User.find();
  res.json(users);
}