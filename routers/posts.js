const express = require(`express`);
const postsController = require(`../controllers/postsController`);
const checkPostExists = require(`../middlewares/checkPostExists`);
const router = express.Router();

// Index
router.get(`/`, postsController.index);

// Show
router.get(`/:id`, checkPostExists, postsController.show); //registro il middleware per singola rotta (ad esempio quelle che hanno "/:id")

// Create
router.post("", postsController.store);

// Update 
router.put(`/:id`, checkPostExists, postsController.update );

// Delete
router.delete(`/:id`, checkPostExists, postsController.destroy);

module.exports = router;