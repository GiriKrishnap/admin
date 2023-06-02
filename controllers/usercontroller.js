const res = require('express/lib/response');
const User = require('../models/userNames');

const insertUser = async(req,res) => {
    try {

        const user = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        });

        const result = await user.save();
        res.send('registration has been successful'+result);

    } catch (error){
        res.send(error.message);
    }
}

module.exports = {
    insertUser
};