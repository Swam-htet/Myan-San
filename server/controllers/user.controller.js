const jwt = require("jsonwebtoken");
const {userService} = require("../services/");

async function userRegistration(req, res, next) {
    let user_data = req.body;
    try {
        let user = await userService.userRegister(user_data);
        let payload = {id: user};
        const token = jwt.sign(payload, process.env.TOKEN_SECRET);
        res.status(201).send({token: token});
    } catch (e) {
        console.log("Error - ", e);
        res.status(400).send({message: "User already existed"});
    }
}

async function userLogin(req, res, next) {
    let user_data = req.body;
    console.log("Login user - ", user_data);
    try {
        let user = await userService.userLogin(user_data);
        let payload = {
            id: user.userID,
        }
        let token = await jwt.sign(payload, process.env.TOKEN_SECRET);
        res.status(200).send({token});
    } catch (err) {
        console.log(err)
        res.status(401).send({message: "Invalid user"});
    }
}

module.exports = {
    userLogin,
    userRegistration
}