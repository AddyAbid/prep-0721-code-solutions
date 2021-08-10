var person = {
  firstName: 'Adnan',
  lastName: 'Abid',
  hobby: 'Billiards'
};
console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log('My name is:' + ' ' + fullName);

person.job = 'Student';
console.log('My Job is:' + ' ' + person.job);

person.previousJob = 'Loan Officer';
console.log('My previous job was:' + ' ' + person.previousJob);

console.log(person);
