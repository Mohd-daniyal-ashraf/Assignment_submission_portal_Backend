const express = require("express");
const {
  uploadAssignment,
  getAssignments,
  acceptAssignment,
  rejectAssignment,
  allAdmins,
} = require("../controllers/assignmentController");
const { verifyToken } = require("../middlewares/authMiddleware");
const router2 = express.Router();

// User routes
router2.post("/upload", verifyToken, uploadAssignment);
router2.post("/admins", verifyToken, allAdmins);

router2.get("/assignments", verifyToken, getAssignments);

// Admin routes
router2.post("/assignments/:id/accept", verifyToken, acceptAssignment);
router2.post("/assignments/:id/reject", verifyToken, rejectAssignment);

module.exports = router2;
