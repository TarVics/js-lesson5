// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// - створити функцію яка приймає масив та виводить кожен його елемент
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//*********************************************************************
const styleBoolean = 'color: mediumpurple;';
const styleHeader = 'border-left: 4px solid green; padding-left: 10px; display: block; white-space: pre-wrap;';
const styleNone = 'color: none;';
const styleNumber = 'color: forestgreen;';
const styleString = 'color: cornflowerblue;';

const headerBegin = `<p style="${styleHeader}; margin-left: 4px;">`, headerEnd = '</p>';
const htmlBoolean = `<span style="${styleBoolean}">`;
const htmlNumber = `<span style="${styleNumber}">`;
const htmlString = `<span style="${styleString}">`;
const htmlEnd = '</span>';
const htmlEOL = '</span><br>';

/**
 * Друкує у консоль заголовок
 * @param {string} text
 */
function logHeader(text) {
    console.log('%c%s', styleHeader, text);
}

/**
 * Друкує у документ заголовок
 * @param text
 */
function logHtmlHeader(text) {
    document.write(headerBegin, text, headerEnd);
}

//*********************************************************************
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
logHeader(`- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б`);

/**
 * обчислює та повертає площу прямокутника зі сторонами а і б
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function squareBox(a, b) {
    return a * b;
}

console.log('Площа прямокутника %c%s%c * %c%s%c = %c%s',
    styleNumber, 3, styleNone,
    styleNumber, 4, styleNone,
    styleNumber, squareBox(3, 4));

//*********************************************************************
// - створити функцію яка обчислює та повертає площу кола з радіусом r
logHeader(`- створити функцію яка обчислює та повертає площу кола з радіусом r`);

/**
 * обчислює та повертає площу кола з радіусом r
 * @param {number} r
 * @returns {number}
 */
function squareCircle(r) {
    return Math.PI * r ** 2;
}

console.log('Площа кола при r = %c%s%c, S = %c%s',
    styleNumber, 3, styleNone,
    styleNumber, Math.round(squareCircle(3) * 100) / 100/* Два знаки після коми */);

//*********************************************************************
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
logHeader(`- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r`);

/**
 * обчислює та повертає площу циліндру висотою h, та радіутом r
 * @param {number} h
 * @param {number} r
 * @returns {number}
 */
function squareCylinder(h, r) {
    return 2 * Math.PI * r * (h + r);
}

console.log('Площа циліндра при h = %c%s%c, r = %c%s%c, S = %c%s',
    styleNumber, 3, styleNone,
    styleNumber, 2, styleNone,
    styleNumber, Math.round(squareCylinder(3, 2) * 100) / 100/* Два знаки після коми */);

//*********************************************************************
// - створити функцію яка приймає масив та виводить кожен його елемент
logHeader(`- створити функцію яка приймає масив та виводить кожен його елемент`);

/**
 * приймає масив та виводить кожен його елемент
 * @param {array} array
 */
function logArray(array) {
    for (const value of array) {
        console.log(value);
    }
}

const logarr = [1, 2, 3, 4, 5];
console.log('Маємо масив %o', logarr);
logArray(logarr);

//*********************************************************************
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
logHtmlHeader(`- створити функцію яка створює параграф з текстом. Текст задати через аргумент`);

/**
 * створює параграф з текстом. Текст задється через аргумент text
 * @param {string} text
 */
function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

let textArg = 'функція яка створює параграф з текстом';
document.write('text = ', htmlString, `"${textArg}"`, htmlEOL);
createParagraph(textArg);

//*********************************************************************
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
logHtmlHeader(`- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий`);

/**
 * створює ul з трьома елементами li. Текст li задається через аргумент text всім однаковий
 * @param {string} text
 */
function createUl(text) {
    document.write(`<ul><li>${text}</li><li>${text}</li><li>${text}</li></ul>`);
}

let ulArg = 'створюємо ul з трьома елементами li';
document.write('text = ', htmlString, `"${ulArg}"`, htmlEOL);
createUl(ulArg)

//*********************************************************************
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
logHtmlHeader(`- створити функцію яка створює ul. Текст li задати через аргумент всім однаковий.
  Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)`);

/**
 * створює ul з елементами li. Текст li задати через аргумент всім однаковий.
 * Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
 * @param {string} text
 * @param {number} count
 */
function createUlWithCount(text, count) {
    document.write('<ul>');
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}

let ulTextArg = 'створює ul з елементами li. Кількість li визначається другим аргументом';
let ulCountArg = 5;
document.write('text = ', htmlString, `"${ulTextArg}"`, htmlEOL);
document.write('count = ', htmlNumber, `${ulCountArg}`, htmlEOL);
createUlWithCount(ulTextArg, ulCountArg);

//*********************************************************************
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
logHtmlHeader(`- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список`);

/**
 * приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
 * @param {array} items
 */
function createUlWithArray(items) {
    document.write('<ul>');
    for (const item of items) {
        switch (typeof item) {
            case 'boolean':
                document.write('<li>', htmlBoolean, item, htmlEnd, '</li>');
                break;
            case 'string':
                document.write('<li>', htmlString, '"', item, '"', htmlEnd, '</li>');
                break;
            case 'number':
                document.write('<li>', htmlNumber, `${item}`, htmlEnd, '</li>');
                break;
            default:
                document.write(`<li>${item}</li>`);
        }
    }
    document.write('</ul>');
}

const ulArray = [1, 2, 3, '4', '5', '6', false, true];
createUlWithArray(ulArray);

//*********************************************************************
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блок.
logHtmlHeader(`- створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
  Для кожного об'єкту окремий блок.`);

/**
 * Приймає масив об' єктів з наступними полями id, name, age, та виводить їх в документ.
 * Для кожного об'єкту окремий блок.
 * @param {object[]} users Масив об'єктів типу {id: 1, name: 'vasya', age: 31, status: false}
 */
function writeUsers(users) {
    document.write('<div class="users-box">');
    for (const user of users) {
        document.write(`<div class="user-block">
        <p>ID - ${user.id}</p>
        <p>Name - ${user.name}</p>
        <p>Age - ${user.age}</p></div>`);
    }
    document.write('</div>');
}

writeUsers([
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false},
    {id: 5, name: 'max', age: 30, status: true},
    {id: 6, name: 'anya', age: 31, status: false},
    {id: 7, name: 'oleg', age: 28, status: false},
    {id: 8, name: 'andrey', age: 29, status: true},
    {id: 9, name: 'masha', age: 30, status: true},
    {id: 10, name: 'olya', age: 31, status: false},
    {id: 11, name: 'max', age: 31, status: true},
    {id: 12, name: 'andrey', age: 24, status: true}
]);

//*********************************************************************
// - створити функцію яка повертає найменьше число з масиву
logHeader(`- створити функцію яка повертає найменьше число з масиву`);

/**
 * повертає найменьше число з масиву
 * @param {number[]} numbers
 * @returns {number|null}
 * number - якщо <b>numbers</b> - непорожній;<br>
 * null - якщо <b>numbers</b> - порожній
 **/
function leastNumber(numbers) {
    if (!numbers.length)
        return null;

    let res = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < res) {
            res = numbers[i];
        }
    }
    return res;
}

let numbers = [1, 3, 23, 134, 3, 0, -34, 15];
console.log('Маємо масив: %o', numbers);
console.log('Найменше число: %c%s', styleNumber, leastNumber(numbers));

//*********************************************************************
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад [1,2,10]->13

logHeader(`- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
  Приклад [1,2,10]->13`);

/**
 * приймає масив чисел, сумує значення елементів масиву та повертає його.
 * Приклад [1,2,10]->13
 * @param {number[]} numbers
 * @returns {number|null}
 *  number - якщо <b>numbers</b> - непорожній;<br>
 *  null - якщо <b>numbers</b> - порожній
 */
function sumNumbers(numbers) {
    if (!numbers.length)
        return null;

    let res = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        res += numbers[i];
    }
    return res;
}

let sumNums = [1, 2, 10];
console.log('Маємо масив: %o', sumNums);
console.log('Сума значень елементів масиву рівна: %c%s', styleNumber, sumNumbers(sumNums));
