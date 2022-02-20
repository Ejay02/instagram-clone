const model = require("./model");
const jwt = require("jsonwebtoken");
const config = require("../../config");

module.exports = {
  login: (req, res) => {
    model.findOne({ email: req.body.email }, (err, user) => {
      if (err) throw err;

      user.comparePassword(req.body.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          let token = jwt.sign({id: user._id}, config.secret, { expiresIn: 86400 });
          res.status(200).send({ msg: "Login Successful", token });
        } else {
          res.status(400).send({ msg: "Password mismatch ⛔🚫🧙🏽" });
        }
      });
    });
  },
  register: (req, res) => {
    let newUser = new model({
      forename: req.body.forename,
      surname: req.body.surname,
      email: req.body.email,
      password: req.body.password,
      // account: req.body.account,
    });

    newUser
      .save()
      .then((result) => {
        console.log(result);
        res
          .status(200)
          .send({ msg: "Register Succesful", user_id: result._id });
      })
      .catch((err) => {
        console.error(err);
        res.status(400).send({ msg: "Registration Unsuccesful 🧙🏽‍♂️" });
      });
  },
};
