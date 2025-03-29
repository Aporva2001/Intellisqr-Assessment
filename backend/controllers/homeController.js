exports.getHomeController = (req, res, next) => {
    console.log("Authenticated User:", req.user);
    res.json({ msg: "User authenticated", user: req.user });
};
