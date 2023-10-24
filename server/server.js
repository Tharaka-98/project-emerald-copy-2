const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const multer = require('multer');
const nodemailer = require('nodemailer');
require('dotenv').config();

const { UserModel, ContactModel, QuoteModel, AdModel } = require("./models/Employee");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
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

 // Set up storage for multer
const storage = multer.memoryStorage();
const upload = multer({ storage: storage }); 

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'polgasa1dmx@gmail.com',
    pass: 'smwj xsgp ceka ixbu',
  }
})

const secretKey = "your-secret-key";

// Registration endpoint
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send('User registered successfully', email, hashedPassword);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

// API Routes
app.post("/login", async (req, res) => {
  const { identifier, password } = req.body;
  console.log(identifier, password);
  try {
    // Find the user by email
    const user = await UserModel.findOne({ email: identifier }); // Add .exec() to return a promise

    if (user) {
      const isPasswordMatch = await bcrypt.compare(password, user.password);

      if (isPasswordMatch) {
        const token = jwt.sign({ userId: user._id, email: user.email }, secretKey ,{ expiresIn: "1h" }
        );
        res.json({ message: "Success", token });
      } else {
        res.status(401).json({ message: "The passwords do not match" });
      }
    } else {
      res.status(401).json("No record exists for this email");
    }
  } catch (err) {
    res.status(500).json({ error: "Error during login", details: err.message });
  }
});

// Dashboard endpoint (protected)
app.get('/dashboard', authenticateUser, (req, res) => {
  res.status(200).send('Welcome to the dashboard');
});

// Middleware to verify JWT
function authenticateUser(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).send('Access denied. No token provided');
  }

  jwt.verify(token, 'your-secret-key', (err, decoded) => {
    if (err) {
      return res.status(401).send('Access denied. Invalid token');
    }

    req.user = decoded;
    next();
  });
}

// API Routes
app.post("/api/contact", async (req, res) => {
  const formData = req.body;
  console.log("Form Data:", formData);

  // Check if required fields are present and not empty
  if (!formData.name || !formData.email || !formData.message) {
    return res
      .status(400)
      .json({ message: "Name, email, and message are required" });
  }

  try {
    const newContact = new ContactModel(formData);
    await newContact.save();
    console.log("Contact saved successfully:", newContact);
    res.json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error("Error saving contact:", err);
    res.status(500).json({ message: "Error saving contact" });
  }
});

app.post('/api/submit-quote', async (req, res) => {
  const { name, email, phone, details, services } = req.body;

  try {
    const quote = await QuoteModel.create({
      name,
      email,
      phone,
      details,
      services,
    });

    // Optionally, you can send a success response back to the frontend
    res.status(201).json({ message: 'Quote submitted successfully', quote });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to submit the quote', error: error.message });
  }
});

// create a single advertisement
app.post('/api/createAd', upload.single('image'), async (req, res) => {
  try {
    const { title, subtitle, phone, details } = req.body;
    console.log(title, subtitle, phone, details);
    const image = {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    };

    if (!title || !subtitle || !phone|| !details || !image) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const advertisement = await AdModel.create({
      title,
      subtitle,
      phone,
      details,
      image,
      isActive: true,
    });

    res.status(201).json({ message: 'Advertisement created successfully', advertisement });

  } catch (error) {
    console.error(error);
    res.status(400).json({ error: 'Error message here' , error});

  }
});

// Get a single advertisement by ID
app.get('/api/advertisements/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Use mongoose.Types.ObjectId to convert the string ID to ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    const advertisement = await AdModel.findById(objectId);
    if (advertisement) {
      res.json(advertisement);
    } else {
      res.status(404).json({ message: 'Advertisement not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving advertisement' });
  }
});

// Update the active status of an advertisement
app.patch('/api/advertisements/:id/activate', async (req, res) => {
  const id = req.params.id;
  const isActive = req.body.isActive;

  try {
    // Use mongoose.Types.ObjectId to convert the string ID to ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    const advertisement = await AdModel.findByIdAndUpdate(objectId, { isActive }, { new: true });
    if (advertisement) {
      res.json({ message: 'Advertisement updated successfully' });
    } else {
      res.status(404).json({ message: 'Advertisement not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating advertisement' });
  }
});

// Delete an advertisement by ID
app.delete('/api/deleteAd/:id', async (req, res) => {
  const id = req.params.id;

  try {
    // Use mongoose.Types.ObjectId to convert the string ID to ObjectId
    const objectId = new mongoose.Types.ObjectId(id);

    const advertisement = await AdModel.findByIdAndDelete(objectId);
    if (advertisement) {
      res.json({ message: 'Advertisement deleted successfully' });
    } else {
      res.status(404).json({ message: 'Advertisement not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting advertisement' });
  }
});

// Send email route
app.post('/api/sendMail', async (req, res) => {
  const {subject, recipient, message} = req.body;
  console.log(req.body)
  try {
    // Email data sending logic using Nodemailer
    const mailOptions = {
      from: 'polgasa1dmx@gmail.com',
      to: recipient,
      subject: subject,
      text: message,
    }

    // Send the email
    transporter.sendMail(mailOptions, (error, result) => {
      if (error) {
        console.error("Error sending email: ",error);
        res.status(500).json({error: 'Email sending failed'});
      } else {
        console.log("Email sent successfully", result.response);
        res.status(200).json({message: 'Email sent successfully'});
      }
    })
  } 
  catch (error) {
    console.error("Error sending email: ",error);
    res.status(500).json({ error: 'Email sending failed'})
  }
})

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
