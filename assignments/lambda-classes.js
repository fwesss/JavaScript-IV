// CODE here for your Lambda Classes
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
}

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
}

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
});

console.log(liz);
liz.listsSubjects();
liz.PRAssignment('Advanced CSS');
liz.sprintChallenge('Javascript XXI');

console.log(scout);
scout.listsSubjects();
scout.PRAssignment('Linear Algebra');
scout.sprintChallenge('Basic HTML');

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

console.log(dory);
dory.standUp('WebPT9');
dory.debugsCode(liz, 'HTML');

console.log(johnny);
johnny.standUp('Web4');
johnny.debugsCode(scout, 'JS III');
