//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.
// const string = "Abcde";
// if (string[0].toLowerCase() === "a") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// function checkString(str) {
//   return str.toLowerCase().startsWith("a");
// }
// console.log(checkString(string));

//TODO: 2 ===================================
// У змінній min лежить число від 0 до 60. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту). Виведіть значення у консоль, або alert

// const min = 62;

// if (min > 0 && min <= 15) {
//     console.log("first part");
// } else if(min > 15 && min <= 30) {
//     console.log("second part");
// } else if(min > 30 && min <=45) {
//     console.log("third part");
// } else if (min > 45 && min <= 60) {
//   console.log("four part");
// } else {
//     console.log("part not found");
// }


//TODO: 3 ===================================
// Напиши скрипт, який отримує мінімальне та максимальне значення від користувача через prompt. Зроби перевірку, що користувач передає саме числа, якщо користувач водить не числа виведіть в консоль 'Будь ласка, введіть числа.' Також додайте перевірку, щоб користувач не зміг ввести мінімальне число > за максимальне, якщо це сталось виведи у косоль повідомлення 'Мінімальне значення повинно бути менше максимального.'. У падку правильного ввода данних виведи у консоль рядок  "Випадкове число в діапазоні від мінімального до максимального : ("рандомне число")"

// Генерація випадкового числа
// const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

// const min = parseInt(prompt('Введіть мінімальне значення:'));
// const max = parseInt(prompt('Введіть максимальне значення:'));

//* Тернарний оператор

//TODO: 4 ===================================
// Перевірити, чи є введене користувачем число парним чи непарним, і вивести відповідне повідомлення. Використай promt і виведи повідомлення в alert. (використати тернарний оператор)

//TODO: 5 ===================================
// Перепишіть if..else на тернарний оператор, за допомогою декількох операторів '?'.

// const login = 'Директор';
// let message = '';

// if (login === 'Співробітник') {
//   message = 'Привіт';
// } else if (login == 'Директор') {
//   message = 'Вітаю';
// } else if (login == '') {
//   message = 'Немає логіну';
// } else {
//   message = '';
// }

// console.log(message);

//* Цикл while and do while
//TODO: 6 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

//TODO: 7 ===================================
//  Дано число n = 1000.
//  Ділить його на 2 стільки разів, поки результат поділу не стане менше 50.
//  Яке число вийде?
//  Порахуйте кількість ітерацій, необхідних для цього, та запишіть його в змінну num.

// console.log(`Кількість ітерацій: ${num}. Чило після ділення: ${n}`);

//TODO: 8 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// alert(`Загальна сума введених чисел дорівнює ${total}.`);

// TODO: 9 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

//* Цикл for і директива continue
//TODO: 10 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// console.log(`Сума усіх парних: ${total}`);

//TODO: 11 ===================================
//  Виведіть методом console.log() зірочки від 1 до 7 штук у вигляді трикутника таким чино
// *
// **
// ***
// ****
// *******

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

//* Конструкція switch
//TODO: 13 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

//TODO: 14 ===================================
// Напишіть if..else, що відповідає наступному switch:

// const browser = 'Opera';

// switch (browser) {
//   case 'Edge':
//     console.log("You've got the Edge!");
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     console.log('Okay we support these browsers too');
//     break;

//   default:
//     console.log('We hope that this page looks ok!');
// }
