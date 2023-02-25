let person = {
  name: "Pepe",
  age: 25,
  hobbies: ["coding", "dance", "beer"],
  grow(addToAge) {
    this.age += addToAge;
  },
  learnNewHobby(hobby) {
    this.hobbies.push(hobby);
  },
  displayInfo() {
    console.log(`My name is ${this.name} and i'm ${this.age} old`);
    console.log(`My hobbies are ${this.hobbies}`);
    console.log(this);
  },
};

person.displayInfo();

person.grow(1);
person.learnNewHobby("party");

person.displayInfo();
