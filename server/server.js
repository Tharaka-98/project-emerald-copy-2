const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const { UserModel, ContactModel, QuoteModel } = require("./models/Employees");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/Emerald", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

const secretKey = "your-secret-key";

app.post("/login", async (req, res) => {
  const { identifier, password } = req.body;

  try {
    const user = await UserModel.findOne({ email: identifier });
    if (user) {
      if (user) {
        if (isPasswordMatch) {
          const token = jwt.sign(
            { useId: user._id, email: user.identifier },
            secretKey,
            { expiresIn: "1h" }
          );

          res.json({ message: "Success", token });
        } else {
          res.status(401).json({ message: "The passwords do not match" });
        }
      }
    } else {
      res.status(401).json("No record exists for this email");
    }
  } catch (err) {
    res.status(500).json({ error: "Error during login", details: err.message });
  }
});
