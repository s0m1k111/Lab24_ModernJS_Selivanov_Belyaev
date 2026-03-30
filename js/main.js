/*console.log("\n=== Деструктуризация массивов ===");

const colors = ["red", "green", "blue"];

const color1 = colors[0];
const color2 = colors[1];
console.log(color1, color2);

const [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor, secondColor, thirdColor);

const [primary, , tertiary] = colors;
console.log(primary, tertiary);

const [c1, c2, c3, c4 = "yellow"] = colors;
console.log(c4);

console.log("Деструктуризация объектов");

const user = {
  name: "Алиса",
  age: 25,
  city: "Москва",
};

const userName = user.name;
const userAge = user.age;
console.log(userName, userAge);

const { name, age, city } = user;
console.log(name, age, city);

const { name: fullName, age: years } = user;
console.log(fullName, years);

const { name: personName, country = "Россия" } = user;
console.log(personName, country);
*/

/*console.log("Деструктуризация в параметрах");

const user = {
  name: "Алиса",
  age: 25,
  city: "Москва",
};

function printUserOld(user) {
  console.log(`Имя: ${user.name}`);
  console.log(`Возраст: ${user.age}`);
  console.log(`Город: ${user.city}`);
}

function printUser({ name, age, city }) {
  console.log(`Имя: ${name}`);
  console.log(`Возраст: ${age}`);
  console.log(`Город: ${city}`);
}

printUserOld(user);
console.log();
printUser(user);
*/

console.log("Деструктуризация продукта");

const product = {
  name: "ПК",
  price: 525252,
  category: "Электроника",
  inStock: true,
};

const { name: productName, price, category, inStock } = product;

function printProduct({ name, price, category, inStock }) {
  console.log(`Товар: ${name}`);
  console.log(`Категория: ${category}`);
  console.log(`Цена: ${price} ₽`);
  if (inStock) {
    console.log(`да`);
  } else {
    console.log(`нет`);
  }
}

printProduct(product);
