// const axios = require("axios");
// const jwt = require("jsonwebtoken");
// const { User } = require("./models");
// const { JWT_SECRET_KEY = "Rahasia" } = process.env;

// function createToken(user) {
//   const payload = {
//     id: user.id,
//     name: user.name,
//     email: user.email,
//   };

//   return jwt.sign(payload, JWT_SECRET_KEY);
// }

// async function handleGoogleLoginOrRegister(req, res) {
//   const { accessToken } = req.body;
//   const options = { headers: { Authorization: `Bearer ${accessToken}` } };

//   try {
//     const response = await axios.get(
//       "https://www.googleapis.com/oauth2/v2/userinfo",
//       options
//     );
//     const { id, email, name } = response.data;

//     let user = await User.findOne({ where: { googleId: id } });
//     if (!user) user = await User.create({ email, name });

//     const accessToken = createToken(user);

//     res.status(201).json({ accessToken });
//   } catch (err) {
//     res.status(401).json({ error: { name: err.name, message: err.message } });
//   }
// }

// module.exports = handleGoogleLoginOrRegister;

const axios = require("axios");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { OAuth2Client } = require("google-auth-library")
const { JWT_SECRET_KEY = "Rahasia" } = process.env;
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID)

function createToken(user) {
  const payload = {
    id: user.id,
    name: user.name,
    email: user.email,
  };
  return jwt.sign(payload, JWT_SECRET_KEY);
}

async function handleGoogleLoginOrRegister(req, res) {
  const { token } = req.body;
  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID
    })
    const { email, name } = ticket.getPayload();
    console.log(ticket.getPayload())
    let user = await User.findOne({ where: { email: email } });
    if (!user) user = await User.create({ email, name });
    const accessToken = createToken(user);
    res.status(201).json({ accessToken });
  } catch (err) {
    res.status(401).json({ error: { name: err.name, message: err.message } });
  }
}
module.exports = handleGoogleLoginOrRegister;