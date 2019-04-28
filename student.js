/**
 * * Services for student management
 */
var fs = require('fs');

var dbPath = './db.json';

/**
 * * Retrieving all the students
 */
exports.getAllStudents = function(callback) {
  fs.readFile(dbPath, function(err, data) {
    if (err) {
      return callback(err);
    }
    callback(null, JSON.parse(data).students);
  });
};

/**
 * * Adding a new student
 */
exports.addStudent = function(student, callback) {
  fs.readFile(dbPath, function(err, data) {
    if (err) {
      return callback(err);
    }
    //* add a new student
    var students = JSON.parse(data).students;
    student.id = students[students.length - 1].id + 1;
    students.push(student);

    //* save data
    var fileData = JSON.stringify({
      students: students
    });
    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
/**
 * * get a student by Id
 * @param studentId id
 * @param callback function
 */
exports.getStudent = function(studentId, callback) {
  fs.readFile(dbPath, function(err, data) {
    if (err) {
      return callback(err);
    }

    var student = JSON.parse(data).students.find(function(item) {
      return item.id === studentId;
    });
    callback(null, student);
  });
};

/**
 * * Updating a new student
 * @param studentId
 * @param student no id inside this object
 */
exports.updateStudent = function(studentId, student, callback) {
  student.id = studentId;
  fs.readFile(dbPath, function(err, data) {
    if (err) {
      return callback(err);
    }
    //* find the student
    var students = JSON.parse(data).students;
    var index = students.findIndex(function(item) {
      return item.id === studentId;
    });

    students[index] = student;
    //* save updated data
    var fileData = JSON.stringify({
      students: students
    });
    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
/**
 * * Deleting a new student
 */
exports.deleteStudent = function(studentId, callback) {
  fs.readFile(dbPath, function(err, data) {
    if (err) {
      return callback(err);
    }

    var students = JSON.parse(data).students;
    var index = students.findIndex(function(item) {
      return item.id === studentId;
    });
    students.splice(index, 1);

    var fileData = JSON.stringify({
      students: students
    });

    fs.writeFile(dbPath, fileData, function(err) {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  });
};
