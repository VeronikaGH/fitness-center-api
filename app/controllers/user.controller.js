exports.Welcome = (req, res) => {
  res.status(200).send("Welcome");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

