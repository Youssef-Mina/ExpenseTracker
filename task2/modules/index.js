const students=require("../data/students");
const addStudent = require("./addStudent");
const calcAverage = require("./calcAverage");
const filterStudents = require("./filterStudent");
const listStudent = require("./listStudent");

addStudent("John", 60 , 70);
listStudent();
calcAverage("Mina");
filterStudents();