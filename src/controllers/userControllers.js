const User = require("../models/userModels")

exports.userLogin= (req, res) => {
    res.send("Login page")
}

exports.userSignUp = async (req, res) => {    
    const { firstName, email, lastName, imageUrl, role} = req.body;
    const hashedPassword = req.hashedPassword;
    const newUser = new User({
        firstName,
        lastName,
        email,
        password:hashedPassword,
        imageUrl,
        role,
        inventory: [],
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
}