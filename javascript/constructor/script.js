function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.eyes = '';

const person = new Person('John', 20);
person.eyes = 'green';
