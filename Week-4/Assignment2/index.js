/* 
    Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:[teacher's name]is now teaching[subject]
*/

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getDetails = function getDetails() {
  console.log(`
        Name: ${this.name}
        age: ${this.age}
    `);
};

function Teacher(name, age) {
  Person.call(this, name, age);
}

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

Teacher.prototype.teach = function teach(subject) {
  console.log(`${this.name} is now teaching ${subject}`);
};

const teacher = new Teacher("John Doe", 24);

teacher.getDetails();
teacher.teach("Physics");
