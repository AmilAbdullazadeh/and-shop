const { verify, decode } = require("jsonwebtoken");

const CheckAdminToken = (req, res, next) => {
    let token = req.get("authorization");

    if (token) {
        token = token.slice(7);
        verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.json({
                  status: 0,
                  message: "Invalid Token...",
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.json({
          status: 0,
          message: "Access Denied! Unauthorized User",
        });
    }
}

const baseHelper = {
    CheckAdminToken
}

module.exports = baseHelper;