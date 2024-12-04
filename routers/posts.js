const express = require(`express`);
const postsController = require(`../controllers/postsController`);
const router = express.Router();

// Index
router.get(`/`, postsController.index);

// Show
router.get(`/:id`, postsController.show);

// Create
router.post("", postsController.create);

// Update 
router.put(`/:id`, postsController.update );

// Delete
router.delete(`/:id`, postsController.destroy);

module.exports = router;