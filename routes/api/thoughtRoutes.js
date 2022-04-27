const router = require('express').Router();
const {
  getThoughts,
  getSingleStudent,
  createStudent,
  deleteStudent,
  addAssignment,
  removeAssignment,
} = require('../../controllers/studentController');

// /api/thoughts
router.route('/').get(getAllUsers).get(getThoughts).post(getUsers);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleUser).get(getSingleThought);

// /api/thoughts/:thoughtId/assignments
router.route('/:thoughtId/assignments').post(addThought);

// /api/thoughts/:thoughtId/assignments/:assignmentId
router.route('/:thoughtId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;