async function checkAdmin(req, res, next) {
  if (req.user.role != "Admin") {
    res.status(404).send("Not Authorized");
  } else {
    next();
  }
}

export default checkAdmin;
