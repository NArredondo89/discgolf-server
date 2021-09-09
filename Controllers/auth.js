const db = require("../Models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


//Register///////
const Register = async (req, res) => {
  try {
    res.send("Works")
    console.log(req.body)
    const foundUser = await db.User.findOne({ email: req.body.email });

    if (foundUser) 
      return res.status(400).json({
        status: 400,
        message: "Email address has already been registered. Please try again",
      });
      
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);

    // //////trouble child/////
    const createdUser = await db.User.create({username:req.body.username, email:req.body.email, password: hash });

      return res
      .status(201)
      .json({ status: 201, message: "success", ...createdUser });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};


//////Login///////
const Login = async (req, res) => {
  try {
    const foundUser = await db.User.findOne({ email: req.body.email }).select(
      "+password"
    );

    if (!foundUser) {
      return res
        .status(400)
        .json({ status: 400, message: "Username or password is incorrect" });
    }

    const isMatch = await bcrypt.compare(req.body.password, foundUser.password);
    // check if the passwords match
    if (isMatch) {
      //TODO create a json web token and send response
      // jwt.sign(payload, secret key for signing, config object)
      const token = jwt.sign({ _id: foundUser._id }, "password", {
        expiresIn: "30d",
      });

      return res.status(200).json({
        status: 200,
        message: "success",
        token,
      });
    } else {
      // the password provided does not match the password on file.
      return res.status(400).json({
        status: 400,
        message: "Username or password is incorrect",
      });
    }
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: "Something went wrong. Please try again",
    });
  }
};

module.exports = {
  Register,
  Login,
};

