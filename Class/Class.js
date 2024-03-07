class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  dogSound() {
    console.log(this.name, "sound is barks");
  }
}

let dog = new Dog("buddy", 4);
console.log(dog); // Dog { name: 'buddy', age: 4 }
console.log(dog.name); // buddy

class Cat extends Dog {
  catSound() {
    console.log(this.name, "sound is purr");
  }
}

let cat = new Cat("Tom", 2);
console.log(cat); // Cat { name: 'Tom', age: 2}
console.log(cat.name); // Tom
cat.catSound();
cat.dogSound();