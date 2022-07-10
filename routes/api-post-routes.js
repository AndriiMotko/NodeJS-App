const express = require('express');
const {
  getPost, 
  deletePost,
  editPost,
  getPosts,
  addPost
} = require('../controllers/api-post-controller');

const router = express.Router();

// Get All Posts
router.get('/api/posts', getPosts);
// Add New Posts
router.post('/api/add-post', addPost);
// Get Post by ID
router.get('/api/posts/:id', getPost);
// Delete Post by ID
router.delete('/api/posts/:id', deletePost);
// Update Post by ID
router.put('/api/edit/:id', editPost);



module.exports = router;