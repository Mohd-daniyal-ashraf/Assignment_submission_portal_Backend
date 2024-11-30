const Assignment = require("../models/Assignment");
const User = require("../models/User");

// Upload Assignment
const uploadAssignment = async (req, res) => {
  const { task, adminId } = req.body;
  const userId = req.user.id;

  try {
    const assignment = new Assignment({ userId, task, adminId });
    await assignment.save();
    res.status(201).json({ message: "Assignment uploaded successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get Assignments
const getAssignments = async (req, res) => {
  const role = req.user.role;
  const userId = req.user.id;

  try {
    if (role === "admin") {
      const assignments = await Assignment.find({ adminId: userId }).populate(
        "userId",
        "name"
      );
      res.json(assignments);
    } else {
      res.status(403).json({ error: "Unauthorized" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Accept Assignment
const acceptAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, {
      status: "accepted",
    });
    res.json({ message: "Assignment accepted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Reject Assignment
const rejectAssignment = async (req, res) => {
  try {
    const assignment = await Assignment.findByIdAndUpdate(req.params.id, {
      status: "rejected",
    });
    res.json({ message: "Assignment rejected" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  uploadAssignment,
  getAssignments,
  acceptAssignment,
  rejectAssignment,
};
