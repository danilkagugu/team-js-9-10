// ! Масиви цикли for і for of
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// styles.push("Рок-н-рол");
// // styles[1] = "Класика";
// const index = styles.indexOf("Блюз");
// styles[index] = "Класика";

// console.log(styles.shift());

// styles.unshift('Реп', 'Реггі');
// console.log(styles.includes("Класика"));
// const numbers = [1, 2, 3, 4];
// const newArray = styles.concat(numbers);
// console.log(newArray);

//TODO:=========task-02=================
//Перетворити рядок, що містить слова, розділені комами, в масив слів і вивести кожне слово в окремому рядку.
// const str = 'JavaScript, HTML, CSS, React';
// const strArray = str.split(', ');
// // console.log(strArray);

// for (const word of strArray) {
//     console.log(word);
// }

//TODO:=========task-03=================
// Знайти кількість слів у рядку, використовуючи методи масивів та цикл for...of.
// const message = "JavaScript is a popular programming language.";
// const newArray = message.split(" ").length;
// let total = 0;
// for (const sum of newArray) {
//   total += 1;
// }
// console.log(newArray);

//TODO:=========task-04=================
// Об'єднати масив слів в рядок, розділений комами та пробілами.
// const words = ["JavaScript", "HTML", "CSS", "React"];
// const str = words.join(", ");
// console.log(str);

//TODO:=========task-05=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

// const stringArray = ["JavaScript", "HTML", "CSS", "React"];
// const substring = "S";
// const newArray = [];
// for (const word of stringArray) {
//   if (word.indexOf(substring) !== -1) {
//     newArray.push(word);
//   }
// }
// const joinedArray = newArray.join(", ");

// console.log(
//   `Масив елементів, що містять підстроку ${substring} : ${joinedArray}`
// );

//TODO:=========task-06=================
// Перевірити, чи містить масив заданий елемент. Якщо містить, видалити його, якщо ні - додати в кінець масиву.
// const array = ["JavaScript", "HTML", "CSS", "SS"];
// const elem = "Git";
// const index = array.indexOf(elem);
// index === -1 ? array.push(elem) : array.splice(index, 1);
// console.log(array);

//TODO:============task-07==============
// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа
// function min(a, b) {
//   if (typeof a !== "number" || typeof b !== "number") {
//     return "It's not a number";
//   }
//   return Math.min(a, b);
// }
// console.log(min("fd", 8));

//TODO:=============task-08=================
// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив

// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// function sumAdjacentNumbers(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length - 1; i += 1) {
//     newArr.push(arr[i] + arr[i + 1]);
//   }
//   return newArr;
// }

// const result = sumAdjacentNumbers(someArr);
// console.log(result); // [33, 45, 39, 17, 25, 27, 29]

//TODO:=========task-09=================
//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа. Array.from()

// function calculateAverage(...args) {
//     let sum = 0;
//     let count = 0;
//     for (const arg of args) {
//         if (typeof arg === "number") {
//             sum += arg; 
//             count += 1;
//         }    
//     }
//     return sum / count;
// }
// console.log(calculateAverage(10, 10, 20, 200, true));

//TODO:=============task-10=================
// Написати функцію, яка приймає рядок і повертає кількість голосних літер у цьому рядку. `Містить ${count} голосних`

// const str = "This Is a new line";
// const vowels = ["a", "e", "i", "o", "u"];

// function countVowels(string) {
//     let count = 0;
//     for (const letter of string.toLowerCase()) {
//         // console.log(letter);
//         count += vowels.includes(letter) ? 1 : 0;
//     }
//     return `Містить ${count} голосних`;
// }


// console.log(countVowels(str));

//TODO:=========task-11=================
// Знайти перший парний елемент масиву, який більший за 10, використовуючи цикл з оператором break та continue.
// const numbers = [5, 11, 21, 8, 7, 15, 11, 11];

// console.log(getOddNumbers(numbers));

//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

//TODO:============task-02==============================================
// Створіть об'єкт "прямокутник" з властивостями "довжина" та "ширина". Напишіть метод "calculateArea", який буде обчислювати площу прямокутника на основі його довжини та ширини.

// console.log(square.calculateArea());

//TODO:============task-03==============================================
// Створіть об'єкт "магазин" зі списком товарів. Напишіть метод "hasProduct", який буде перевіряти, чи є певний товар в наявності на складі магазину.

// console.log(store.hasProduct('apple'));

//TODO:============task-04==============================================
// 4. Створіть об'єкт "кошик" зі списком товарів та їх цін. Напишіть метод "calculateTotal", який буде обчислювати загальну суму товарів у кошику.

// console.log(cart.calculateTotal());

//! Перебір об'єктів: for...in і методи Object.keys|values|entries
//TODO:============task-05======================================================
// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// console.log(getBool(obj, 'car')); // true

//TODO:============task-06======================================================
// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// console.log(sum);

//TODO:============task-07======================================================
// Напишіть функцію, яка приймає як параметр об'єкт
// та формує об'єкти у новому масиві у форматі [key, value]

// const user = {
//   name: 'John',
//   surName: 'Stones',
//   age: 20,
//   hobby: 'tenis',
//   haveCar: true,
//   merried: false,
// };

// changeObject(user);

//TODO:============task-08======================================================
// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// console.log(multiplyNumeric(menu));

// після виклику функції
// menu = {
//   width: 400,
//   height: 600,
//   title: 'My menu',
// };

//TODO:==========task-09=============
// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}

// console.logs(updateObject({ a: 1, b: 2, c: 3 }, 'b', 'a')); // {c: 3}

//! Робота з масивом об'єктів
//TODO:============task-10==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 4.5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 4.8 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
// ];

// console.log(findTopStudent(students));

//TODO:============task-11==================================================
// Створіть масив об'єктів "книг" з властивостями "назва", "автор" та "рік видання". Напишіть функцію "findBooksByAuthor",
//яка буде повертати масив книг відповідного автора.

// const books = [
//   { title: 'Війна і мир', author: 'Лев Толстой', year: 1869 },
//   {
//     title: 'Преступление и наказание',
//     author: 'Федор Достоевский',
//     year: 1866,
//   },
//   {
//     title: 'Гаррі Поттер і філософський камінь',
//     author: 'Джоан Роулінг',
//     year: 1997,
//   },
//   { title: 'Мастер и Маргарита', author: 'Михаил Булгаков', year: 1967 },
//   { title: '1984', author: 'Джордж Оруелл', year: 1949 },
// ];

// const arr = findBooksByAuthor(books, 'Джоан Роулінг');
// console.log(arr);

//TODO:============task-12=========================
// Припустимо, є два масиви об'єктів:
// Необхідно створити новий масив об'єктів, що буде містити всі об'єкти з обох масивів, але без дублів.
// Тобто об'єкти з однаковим значенням ключа "id" повинні бути об'єднані в один об'єкт.

// const arr1 = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Mary' },
//   { id: 3, name: 'Bob' },
// ];
// const arr2 = [
//   { id: 2, name: 'Mary' },
//   { id: 4, name: 'Jane' },
//   { id: 5, name: 'Tom' },
// ];

// console.log(uniq(arr1, arr2));
