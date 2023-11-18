let bcrypt = require('bcrypt');
let {User} = require("../models/");

async function userRegister(user) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, salt);

    let newUser = await User.create(
        {
            username: user.username,
            password: hashPassword,
            email: user.email,
            role: user.role,
        }
    );
    return newUser;
}

async function userLogin(user) {
    // user name
    let userName = user.username;

    //////////// TODO: to find the user from user model
    let login_user = await User.findOne({where: {username: userName}});
    if (login_user) {
        const validPass = await bcrypt.compare(user.password, login_user.password);
        if (validPass) {
            return login_user;
        } else {
            throw Error("Invalid username or password");
        }
    } else {
        throw Error("Invalid username or password");
    }
}

module.exports = {
    userRegister,
    userLogin
}