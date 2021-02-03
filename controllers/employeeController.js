var Employee = require('../models/employee');
var models = require('../models');

// Display author create form on GET.
exports.author_create_get = function(req, res, next) {
        // create author GET controller logic here 
        res.render('forms/author_form', { title: 'Create Author',  layout: 'layouts/detail'});
        console.log(232);
};

// Handle authorr create on POST.
exports.employee_create_post = function(req, res, next) {
     // create authorr POST controller logic here
     
      models.Employee.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            role: req.body.role,
            email: req.body.email
        }).then(function() {
            console.log("Author created successfully");
           // check if there was an error during post creation
            res.redirect('/blog/employees');  //COME BACK HERE LATER
      });
};

// // Display user delete form on GET.
// exports.user_delete_get = function(req, res, next) {
//         // GET logic to delete an user here
//         models.User.destroy({
//             // find the user_id to delete from database
//             where: {
//               id: req.params.user_id
//             }
//           }).then(function() {
//            // If a user gets deleted successfully, we just redirect to users list
//            // no need to render a page
//             //res.redirect('/blog/users');
//             console.log("User deleted successfully");
//           });
//         // renders user delete page
//         res.render('pages/user_delete', { title: 'Delete User',  layout: 'layouts/detail'} );
// };

// Handle user delete on POST.
exports.employee_delete_post = function(req, res, next) {
        
        models.Employee.destroy({
            // find the user_id to delete from database
            where: {
              id: req.params.employee_id
            }
          }).then(function() {
           // If a user gets deleted successfully, we just redirect to users list
           // no need to render a page
            res.redirect('/blog/employees');
            console.log("Author deleted successfully");
          });
        
};

// // Display user update form on GET.
// exports.author_update_get = function(req, res, next) {
//         console.log("ID is " + req.params.author_id);
//         models.Author.findById(
//                 req.params.author_id
//         ).then(function(author) {
//                // renders a post form
//                res.render('forms/author_form', { title: 'Update Author', author: author, layout: 'layouts/detail'});
//                console.log("Author update get successful");
//           });
// };

// Handle post update on POST.
exports.employee_update_post = function(req, res, next) {
        // POST logic to update an user here
        console.log("ID is " + req.params.employee_id);
        models.employee.update(
        // Values to update
            {
                username: req.body.username,
                email: req.body.email,
                role: req.body.role
            },
          { // Clause
                where: 
                {
                    id: req.params.employee_id
                }
            } 
         ).then(function() { 
                res.redirect("/blog/employees");  
                console.log("employee updated successfully");
          });
};

// Display list of all authors.
exports.employee_list = function(req, res, next) {
        // GET controller logic to list all users
        models.Employee.findAll(
        ).then(function(employees) {
        // renders a post list page
        console.log("rendering author list");
        res.render('pages/employee_list', { title: 'Employee List', employees: employees, layout: 'layouts/list'} );
        console.log("Author list renders successfully");
        });
        // renders all users list
        //res.render('pages/user_list', { title: 'User List',  layout: 'layouts/list'} );
};

// Display detail page for a specific user.
exports.employee_detail = function(req, res, next) {
         console.log(req.params.employee_id);
        models.Employee.findById(
                req.params.employee_id
        ).then(function(employee) {
        // renders an inividual post details page
        
        res.render('pages/employee_detail', { title: 'Employee Details', employee: employee, layout: 'layouts/detail'} );
        console.log(employee.first_name);
        });
};

 