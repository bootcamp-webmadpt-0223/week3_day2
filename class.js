class Person {
  constructor(name, age, hobbies, favoriteColor = "black") {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.favoriteColor = favoriteColor;
  }

  grow(addToAge) {
    this.age += addToAge;
  }

  changeFavoriteColor(newColor) {
    this.favoriteColor += newColor;
  }

  addProperty(name, value) {
    this[name] = value;
  }
}

let person1 = new Person("Pepe", 25, ["coding", "dance", "beer"]);
let person2 = new Person("Jon", 25, ["coding", "dance", "beer"]);

person2.changeFavoriteColor("red");
person2.addProperty("address", "Calle Ironhack");
