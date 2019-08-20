// Base class
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

// Create 2 new objects
const doug = new Person({
  name: 'Doug',
  age: 32,
  location: 'New York',
});

const susie = new Person({
  name: 'Susie',
  age: 53,
  location: 'Atlanta',
});

// Test class works by logging 2 objects and their methods
console.log(doug);
console.log(doug.speak());
console.log(susie);
console.log(susie.speak());


class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  static demo(subject) {
    console.log(`Today we are learning about ${subject}`);
  }

  static grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`);
  }

  // Instructor gives a random grade between 65 and 100
  static giveGrade() {
    return Math.floor((Math.random() * 65) + 35);
  }
}

// Create 2 new objects
const george = new Instructor({
  name: 'George',
  age: 23,
  location: 'Anaheim',
  specialty: 'React',
  favLanguage: 'JS',
  catchPhrase: 'ayyyyy',
});

const alexis = new Instructor({
  name: 'Alexis',
  age: 29,
  location: 'St. George',
  specialty: 'Postgresql',
  favLanguage: 'Python',
  catchPhrase: 'Mmmm pasta',
});

// Test class works by logging 2 objects and their methods
console.log(george);
Instructor.demo('Linux');
Instructor.grade(susie, 'Databases');

console.log(alexis);
Instructor.demo('Assembly');
Instructor.grade(doug, 'CSS');


class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
    this.grade = attrs.grade;
    this.status = attrs.status;
  }

  listsSubjects() {
    this.favSubjects.forEach((subject) => console.log(subject));
  }

  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`);
  }

  // A new grade is calculated by logging a new grade, then averaging it with the current grade.
  calculateGrade(newGrade) {
    console.log(`Scout received a ${newGrade} on her latest test`);
    this.grade = Math.floor((this.grade + newGrade) / 2);
  }

  // Student will graduate as soon as their grade rises above 70 and the school loop will end
  graduate() {
    if (this.grade > 70) {
      console.log(`${this.name}, you are ready to graduate!`);
      this.status = 'Graduated';
    } else {
      console.log(`Your grade is ${this.grade}. You'll need to keep studying :(`);
    }
  }
}

// Create 2 new objects
const liz = new Student({
  name: 'Liz',
  age: 26,
  location: 'Yucaipa',
  previousBackground: 'Marketing',
  className: 'WebPT9',
  favSubjects: [
    'History',
    'Psychology',
    'Political Science',
  ],
  grade: 97,
  status: 'In school',
});

const scout = new Student({
  name: 'Scout',
  age: 2,
  location: 'Cherry Valley',
  previousBackground: 'Dog',
  className: 'IOS3',
  favSubjects: [
    'Treats',
    'Naptime',
    'Machine Learning',
  ],
  grade: 62,
  status: 'In school',
});

// Test class works by logging 2 objects and their methods
console.log(liz);
liz.listsSubjects();
liz.PRAssignment('Advanced CSS');
liz.sprintChallenge('Javascript XXI');

console.log(scout);
scout.listsSubjects();
scout.PRAssignment('Linear Algebra');
scout.sprintChallenge('Basic HTML');

/*
 School Loop
 While Scout is still in school, she will receive new grades. Once her grade average exceeds 70,
 she can graduate
 */
while (scout.status !== 'Graduated') {
  // Scout's grade is calculated after receiving a new grade
  scout.calculateGrade(Instructor.giveGrade());
  /*
   Scout's score is checked. If it's high enough, her status changes to 'Graduated' and she leaves
   school.
   */
  scout.graduate();
}


class ProjectManager extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`);
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

// Create 2 new objects
const dory = new ProjectManager({
  name: 'Dory',
  age: 37,
  location: 'Omaha',
  specialty: 'Redux',
  favLanguage: 'C#',
  catchPhrase: 'Pour one out for me',
  gradClassName: 'Web12',
  favInstructor: 'Pace Ellsworth',
});

const johnny = new ProjectManager({
  name: 'Johnny',
  age: 21,
  location: 'San Jose',
  specialty: 'OOP',
  favLanguage: 'Perl',
  catchPhrase: 'Not a fan',
  gradClassName: 'Web3',
  favInstructor: 'Tuna the Cat',
});

// Test class works by logging 2 objects and their methods
console.log(dory);
dory.standUp('WebPT9');
dory.debugsCode(liz, 'HTML');

console.log(johnny);
johnny.standUp('Web4');
johnny.debugsCode(scout, 'JS III');
