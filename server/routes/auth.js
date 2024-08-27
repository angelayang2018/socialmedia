const express = require("express");
const firebase = require("firebase");
const router = express.Router();

router.post("/createUser", async (req, res) => {
  let { email, password } = req.body;
  firebase.auth
    .createUserWithEmailAndPassword(auth, email, password)
    .then((useCredential) => {
      console.log(useCredential);
      res.status(200).send("done");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send(err.message);
    });
});

module.exports = router;
