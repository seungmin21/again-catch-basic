class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let dog = new Dog("buddy", 4);
console.log(dog) // Dog { name: 'buddy', age: 4 }
console.log(dog.name) // buddy

