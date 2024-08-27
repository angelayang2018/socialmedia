const express = require("express");
const admin = require("firebase-admin")
const cors = require("cors");

const serviceAccount = require('./key.json'); // Replace with your actual service account path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const app = express();

app.use(cors())
app.use(express.json()); // To parse JSON bodies

app.listen(8080, () => {
  console.log("server listening on port 8080");
});

app.get("/", (req, res) => {
  res.send("Hello from our server!");
});

app.post('/createUser', (req, res) => {
  let { email, password } = req.body;

  admin.auth()
    .createUser({ email, password })
    .then((userRecord) => {
      console.log(userRecord);
      res.status(200).send("User created successfully!");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send(error.message);
    });
});