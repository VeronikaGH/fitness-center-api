const db = require("../models");
const User = db.user;


exports.getUser = (req, res) => {
User.findAll({  attributes: ['id_user', 'username', 'fullname', 'email', 'phone'], raw: true }).then(sends => {
    res.send(sends);
}).catch(err => {
    res.status(500).send(console.log(err));
});
}