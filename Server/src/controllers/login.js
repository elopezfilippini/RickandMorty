// const express = require('express');
// const users = require("../utils/users.js");

// const login = function (req, res) {
//     const email = req.query.email;
//     const { password } = req.query;

//     // Buscar el usuario en la lista de usuarios
//     const user = users.find(u => u.email === email && u.password === password);

//     if (user) {
//         return res.status(200).json({ access: true });
//     } else {
//         return res.status(401).json({ access: false });
//     }
// };

// module.exports = login


const users = require("../utils/users.js");

module.exports = (req, res) => {
  //* req.query = { email: "mail@.com", password:"1234" }
  const { email, password } = req.query;
  let access = false;

  users.forEach((user) => {
    if(user.email === email && user.password === password) access = true;
    // console.log(typeof user.email)
  });
  // console.log(access);
  //* users.some(callback);
  return res.json({ access });
};