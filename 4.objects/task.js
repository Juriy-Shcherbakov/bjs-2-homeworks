function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

const student1 = new Student('Tom', 'male', '23');    
const student2 = new Student('Alex', 'male', '24'); 
const student3 = new Student('Oleg', 'male', '25'); 

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [];
  } 
  this.marks.push(mark);
}

Student.prototype.addMarks = function (...marksArr) {
  if (this.marks === undefined) { 
    this.marks = [];
  } 
  marksArr.forEach(marksArr => this.marks.push(marksArr));
} 

Student.prototype.getAverage = function () {
let average = 0;
  if (!(this.marks === undefined)) {
    this.marks.forEach((marks) => average += marks);
    return average / this.marks.length; 
  }
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}