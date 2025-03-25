const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define Mongoose Schema & Model for commissions
const commissionSchema = new mongoose.Schema({
  type: String,
  duration: String,
  description: String,
  budget: Number,
  location: String,
  phone: String,
  email: String,
});

const Commission = mongoose.model("Commission", commissionSchema);

// API Route: Handle form submissions
app.post("/api/commissions", async (req, res) => {
  try {
    const newCommission = new Commission(req.body);
    await newCommission.save();
    res.status(201).json({ message: "Commission request saved successfully!" });
  } catch (error) {
    console.error("Error saving commission:", error);
    res
      .status(500)
      .json({ message: "Server error. Could not save commission." });
  }
});

// Simple test route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
