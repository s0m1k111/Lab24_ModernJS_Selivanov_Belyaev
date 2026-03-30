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

/*console.log("Деструктуризация продукта");

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
*/

/*console.log("Spread для массивов");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];
console.log("Объединённый массив:", combined);

const copy = [...arr1];
console.log("Копия массива:", copy);

const extended = [0, ...arr1, 7, 8];
console.log("Расширенный массив:", extended);
*/

/*console.log("Spread для объектов");

const person = {
  name: "Иван",
  age: 30,
};

const address = {
  city: "Санкт-Петербург",
  street: "Невский проспект",
};

const fullInfo = { ...person, ...address };
console.log("Полная информация:", fullInfo);

const personCopy = { ...person };
console.log("Копия объекта:", personCopy);

const updated = { ...person, age: 31, occupation: "Developer" };
console.log("Обновлённый объект:", updated);
*/

/*console.log("Rest оператор");

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Сумма 1,2,3:", sum(1, 2, 3));
console.log("Сумма 1,2,3,4,5:", sum(1, 2, 3, 4, 5));

const numbers = [10, 20, 30, 40, 50];
const [first, second, ...rest] = numbers;
console.log("Первое число:", first);
console.log("Второе число:", second);
console.log("Остальные числа:", rest);
*/

/*console.log("Практика: spread");

const nums1 = [3, 7, 1];
const nums2 = [10, 4, 8];

const allNums = [...nums1, ...nums2];
console.log("Объединённый массив:", allNums);

function findMax(...numbers) {
  if (numbers.length === 0) {
    return undefined;
  }

  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    if (current > max) {
      max = current;
    }
  }

  return max;
}

console.log("Максимум из массива:", findMax(...allNums));
console.log("Максимум из арг:", findMax(5, 12, 9, 1));

const objA = {
  id: 1,
  title: "Товар",
};

const objB = {
  price: 1500,
  currency: "РУБЛИКИ",
};

const merged = {
  ...objA,
  ...objB,
};

console.log("Объединённый объект:", merged);
*/

/*import sayHello, { greet, add, multiply as umnozhit, PI } from "./utils.js";
import * as Utils from "./utils.js";

console.log("Модули");

console.log(sayHello());
console.log(greet("Алексей"));
console.log("5 + 3 =", add(5, 3));
console.log("Значение PI:", PI);

console.log("4 * 7 =", umnozhit(4, 7));

console.log(Utils.greet("Мария"));
console.log("Умножение:", Utils.multiply(3, 9));
*/

import { square, cube, E } from "./math.js";

console.log("\n=== Практика: модули (math) ===");
console.log("square(4) =", square(4));
console.log("cube(3) =", cube(3));
console.log("E =", E);
