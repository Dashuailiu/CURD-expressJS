var express = require('express');
// var fs = require('fs');

var st = require('./student');

//* create a 'router' container
var router = express.Router();

//* mount all the paths
router
  .get('/', function(req, res) {
    res.redirect('/students');
  })
  .get('/students', function(req, res) {
    //TODO page for listing all the students
    st.getAllStudents(function(err, data) {
      if (err) {
        return res.status(500).send('Server Error.');
      }
      res.render('index.html', {
        students: data
      });
    });
    // fs.readFile('./db.json', function(err, data) {
    //   if (err) {
    //     return res.status(500).send('Server Error.');
    //   }
    //   res.render('index.html', {
    //     students: JSON.parse(data).students
    //   });
    // });
  })
  .get('/student', function(req, res) {
    //TODO page for adding a new student
    res.render('student.html', {
      student: Object()
    });
  })
  .post('/student', function(req, res) {
    //TODO action for adding a new student
    st.addStudent(req.body, function(err) {
      if (err) {
        return res.status(500).send('Server Error.');
      }
      res.redirect('/students');
    });
  })
  .get('/student/:id', function(req, res) {
    //TODO page for editing a student
    st.getStudent(parseInt(req.params.id), function(err, data) {
      if (err) {
        return res.status(500).send('Server Error.');
      }
      res.render('student.html', {
        student: data
      });
    });
  })
  .post('/student/:id', function(req, res) {
    //TODO action for editing a student
    st.updateStudent(parseInt(req.params.id), req.body, function(err) {
      if (err) {
        return res.status(500).send('Server Error.');
      }
      res.redirect('/students');
    });
  })
  .delete('/student/:id', function(req, res) {
    //TODO action for deleting a student
    st.deleteStudent(parseInt(req.params.id), function(err) {
      if (err) {
        return res.status(500).send('Server Error.');
      }
      res.redirect('/students');
    });
  })
  .get('*', function(req, res) {
    res.render('404.html');
  });

//* export the 'router'
module.exports = router;
