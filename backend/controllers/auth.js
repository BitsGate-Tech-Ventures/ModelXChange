const { User }  = require('../models');
const hashPassword = require('../utils/hashPassword');
const {comparePassword, compareCode} = require("../utils/comparePassword");
const generateCode = require("../utils/generateCode");
const generateToken = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");

const signup = async (req, res, next ) => {
    try{
        const { name, email, password, role, company } = req.body;

        const isEmailExist = await User.findOne({ email });
        if(isEmailExist){
            res.code = 400;
            throw new Error("Email already exist");
        }

        const hashedPassword = await hashPassword(password);

        const newUser = new User({ name, email, password: hashedPassword, role, company});

        await newUser.save();
        
        res.status(201).json({ code: 201, status: true, message: "User registered successfully"});
    }catch(error){
        next(error);
    }
};

//email verification function with code - sending verification code through mail
const verifyCode = async (req, res, next) => {
    try{
        const { email } = req.body;

        const user = await User.findOne({ email });
        if(!user){
            res.code = 404;
            throw new Error("User not found");
        }

        //user.isVerified === true  is same as user.isVerified
        if(user.isVerified){
            res.code = 400;
            throw new Error("User already verified")
        }

        const code = generateCode(6);
        const hashedCode = await hashPassword(code);

        user.verificationCode = hashedCode;
        await user.save();

        //send email
        await sendEmail({
            emailTo: user.email,
            subject: "Email Verification Code",
            code,
            content: "verify your account",
        })

        res.status(200).json({code: 200, status: true, message: "User verification sent succesfuly"});
    }catch(error) {
        next(error)
    }
};
  
 //verifying user- with code recieved through mail
const verifyUser = async(req, res, next) => {
    try{
        const {email, code} = req.body;

        const user = await User.findOne({ email });
        // const user = await User.findOne({ email });
        if(!user){
            req.code = 404;
            throw new Error("User not found")
        }

        // Ensure code is a string before comparing
        const codeString = code.toString();
        
        const match = await compareCode(code, user.verificationCode);
        if(!match){
            res.code = 401;
            throw new Error("Invalid code")
        }

        user.isVerified = true;
        user.verificationCode = null;
        await user.save();

        res.status(200).json({code: 200, status: true, message: "User verified successfully"})
    }catch(error){
        next(error);
    }
};

//forgot password code - it resends the code and stores the value in forgotpasswordCode
const forgotPasswordCode = async (req, res, next) => {
    try{
        const {email} = req.body;

        const user = await User.findOne({email});
        if(!user){
            res.code = 404;
            throw new Error("User not found")
        }

        const code = generateCode(6);

        user.forgotPasswordCode = code;
        await user.save()

        await sendEmail({
            emailTo: user.email,
            subject: "Forgot password code",
            code,
            content: "change your password"
        });

        res.status(200).json({code: 200, status: true, messsage: "Forgot password code sent successfully"})
    }catch(error){
        next(error)
    }
};

//code for forget password
const recoverPassword = async (req, res, next)=> {
    try{
        const {email, code, password} = req.body;

        const user = await User.findOne({email});
        if(!user){
            res.code = 400;
            throw new Error("User not found")
        }

        if(user.forgotPasswordCode !== code){
            res.code = 400;
            throw new Error("Invalid code")
        }
        
        const hashedPassword = await hashPassword(password)   //password will be converted into hash password

        user.password = hashedPassword  //hashed password will be stored in db
        user.forgotPasswordCode = null;
        await user.save();  
        
        res.status(200).json({code: 200, status: true, message: "Password recovered successfully"})
    }catch(error){
        next(error)
    }
};

//Signin controller function
const signin = async (req, res, next) => {
    try{
        const {email, password} =req.body;
        const user = await User.findOne({email});
        if(!user){
            res.code = 401;
            throw new Error("Invalid credentials")
        }
        const match = await comparePassword(password, user.password);
        if(!match){
            res.code = 401;
            throw new Error("Invalid credentials")
        }

        user.password = undefined;

        const token = generateToken(user);

        res
            .status(200)
            .json({ 
                code: 200,
                status: true, 
                message: "User signin successful", 
                data: {token, user},
            });
    }catch(error){
        next(error)
    }
};

const updateProfile = async (req, res, next) => {
    try{
        const {_id} = req.user;
        const {name, email, profilePic, company} = req.body;

        const user = await User.findById(_id).select("-password -verificationCode");
        if(!user){
            res.code = 404;
            throw new Error("User not found")
        }

        if(email){
            const isUserExist = await User.findOne({ email });
            if(
                isUserExist &&
                isUserExist.email === email &&
                String(user._id) !== String(isUserExist._id)
            ){
                res.code = 400;
                throw new Error("Email already exist");
            }
        }

        if(profilePic){
            const file = await File.findById(profilePic);
            if(!file){
                res.code = 404;
                throw new Error("File not found")
            }
        }

        user.name = name ? name : user.name;//if name exists it will change name or else uses old name
        user.email = email ? email : user.email;//if email exists it will change email or else uses old email
        user.profilePic = profilePic;
        user.company = company ? company : user.company;

        if(email){
            user.isVerified = false;
        }

        await user.save();

        res.status(200).json({code: 200, status: true, message: "User profile updated successfully", data: {user}});
    }catch(error){
        next(error)
    }
};

  module.exports = {
    signup,
    verifyUser,
    verifyCode,
    forgotPasswordCode,
    recoverPassword,
    signin,
    updateProfile
  };//exporting