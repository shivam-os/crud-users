module.exports = (err, req, res, next) => {
  console.log(err);
  return res
    .status(500)
    .json({ msg: "Something has went wrong. Please try again later!" });
};
