class Person {
  constructor(name, age, hobbies, color) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.favoriteColor = color;
  }

  grow(addToAge) {
    this.age += addToAge;
  }

  changeFavoriteColor(newColor) {
    this.favoriteColor += newColor;
  }

  displayInfo() {
    console.log(`My name is ${this.name} and i'm ${this.age} old`);
    console.log(`My hobbies are ${this.hobbies}`);
  }
}

class Player extends Person {
  constructor(name, age, hobbies, color) {
    super(name, age, hobbies, color);
    this.coins = 100;
  }

  spendCoins(coinsToSpend) {
    this.coins -= coinsToSpend;
  }

  displayInfo() {
    super.displayInfo();
    console.log(`I've ${this.coins} coins`);
  }
}

class Witch extends Player {
  constructor() {
    super();
  }

  makeSpell() {}
}

let person1 = new Person("Pepe", 25, ["dance"]);
let person2 = new Person("Pepe", 25, ["dance"]);

let player1 = new Player(person1.name, 25, [], "red");

let witch1 = new Witch();

player1.displayInfo();

player1.spendCoins(20);

player1.displayInfo();

person1.displayInfo();
