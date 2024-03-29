var express = require('express');
var router = express.Router();


// Require our controllers.
var employee_controller = require('../controllers/employeeController');
var post_controller = require('../controllers/postController'); 
var category_controller = require('../controllers/categoryController');
var comment_controller = require('../controllers/commentController');
var user_controller = require('../controllers/userController');


/// POST ROUTES ///

// GET request for creating a Post. NOTE This must come before routes that display Post (uses id).
router.get('/post/create', post_controller.post_create_get);

// POST request for creating Post.
router.post('/post/create', post_controller.post_create_post);

// GET request to delete Post.
router.get('/post/:post_id/delete', post_controller.post_delete_get);

// POST request to delete Post.
router.post('/post/:post_id/delete', post_controller.post_delete_post);

// GET request to update Post.
router.get('/post/:post_id/update', post_controller.post_update_get);

// POST request to update Post.
router.post('/post/:post_id/update', post_controller.post_update_post);

// GET request for one Post.
router.get('/post/:post_id', post_controller.post_detail);

// GET request for list of all Post.
router.get('/posts', post_controller.post_list);

/// employee ROUTES ///

// // GET request for creating Author. NOTE This must come before route for id (i.e. display author).
// router.get('/author/create', author_controller.author_create_get);

// POST request for creating employee.
router.post('/employee/create', employee_controller.employee_create_post);

// // POST request to delete employee.
 router.get('/employee/:employee_id/delete', employee_controller.employee_delete_get);


// // // GET request to update Author.
//  router.get('/author/:author_id/update', author_controller.author_update_get);

// // POST request to update Author.
 router.post('/employee/:employee_id/update', employee_controller.employee_update_post);

 // GET request for one Author.
 router.get('/employee/:employee_id', employee_controller.employee_detail);

 // GET request for list of all Authors.
router.get('/employees', employee_controller.employee_list);

/// USER ROUTES ///

// GET request for creating User. NOTE This must come before route for id (i.e. display user).
router.get('/user/create', user_controller.user_create_get);

// POST request for creating User.
router.post('/user/create', user_controller.user_create_post);

// GET request to delete User.
router.get('/user/:user_id/delete', user_controller.user_delete_get);

// POST request to delete User
//router.post('/user/:user_id/delete', user_controller.user_delete_post);

// GET request to update User.
router.get('/user/:user_id/update', user_controller.user_update_get);

// POST request to update User.
router.post('/user/:user_id/update', user_controller.user_update_post);

// GET request for one User.
router.get('/user/:user_id', user_controller.user_detail);

// GET request for list of all Users.
router.get('/users', user_controller.user_list);


/// Category ROUTES ///

// GET request for creating a Category. NOTE This must come before route that displays Category (uses id).
router.get('/category/create', category_controller.category_create_get);

// // POST request for creating Category.
 router.post('/category/create', category_controller.category_create_post);

// // GET request to delete Category.
 router.get('/category/:category_id/delete', category_controller.category_delete_get);

// // POST request to delete Category.
// router.post('/category/:category_id/delete', category_controller.category_delete_post);

// // GET request to update Category.
 router.get('/category/:category_id/update', category_controller.category_update_get);

// // POST request to update Category.
 router.post('/category/:category_id/update', category_controller.category_update_post);

// // GET request for one Category.
 router.get('/category/:category_id', category_controller.category_detail);

// // GET request for list of all Categories.
 router.get('/categories', category_controller.category_list);


/// COMMENT ROUTES ///

// GET request for creating Comment. NOTE This must come before route for id (i.e. display comment).
router.get('/comment/create', comment_controller.comment_create_get);

// // POST request for creating Comment.
 router.post('/comment/create', comment_controller.comment_create_post);

// // GET request to delete Comment.
 router.get('/comment/:comment_id/delete', comment_controller.comment_delete_get);

// // POST request to delete Comment
// router.post('/comment/:comment_id/delete', comment_controller.comment_delete_post);

// // GET request to update Comment.
router.get('/comment/:comment_id/update', comment_controller.comment_update_get);

// // POST request to update Comment.
router.post('/comment/:comment_id/update', comment_controller.comment_update_post);

// // GET request for one Comment.
 router.get('/comment/:comment_id', comment_controller.comment_detail);

// // GET request for list of all Comments.
 router.get('/comments', comment_controller.comment_list);

// GET blog home page.
router.get('/', post_controller.index); 

// export all the router created
module.exports = router;
