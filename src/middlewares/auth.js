const adminAuth = (req, res, next) => {
  console.log("Admin auth is getting checked !!");
  const token = "xyz";
  const isAuthorizedToken = token === "xyz";
  if (!isAuthorizedToken) {
    res.status(401).send("Unauthorized request.");
  } else {
    next();
  }
};

const userAuth = (req, res) => {
  const user = "Sunitha";
  if (user !== "Sunitha") {
    res.status(401).send("Unauthorized request.");
  } else {
    res.send("User Data sent.");
  }
};

module.exports = {
  adminAuth,
  userAuth,
};
