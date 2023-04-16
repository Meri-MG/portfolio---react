const express = require("express");
const Router = express.Router();
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const { customAlphabet } = require('nanoid');


const app = express();

app.use(bodyParser.json());
app.use(express.json())
app.use(cors());


const generateJWTSecret = () => {
    const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const nanoid = customAlphabet(alphabet, 64);
    return nanoid();
};

const JWT_SECRET = generateJWTSecret();





Router.post("/login", async(req, res) => {
    const { email, password } = req.body;

    console.log(email, password);

    try {
        const user = await User.findOne({ email });
        console.log("user : ", user);
        if (user) {
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            console.log("user : ", user);
            if (isPasswordMatch) {
                const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET);
                res.json({ token });
            } else {
                res.json("Invalid password");
            }
        } else {
            res.json("Invalid email");
        }
    } catch (err) {
        console.log(err);
        res.status(500).send("Internal server error");
    }
});



// Route pour l'inscription d'un utilisateur
Router.post('/register', async(req, res) => {


    const { email, password } = req.body;
    console.log(email);
    console.log(password);
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    // Hash the password before saving it to the database
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user document
    const newUser = new User({ email, password: hashedPassword });

    // Save the user document to the database
    const savedUser = await newUser.save();

    res.json({ savedUser })






});







module.exports = Router;