// - Знайти та вивести довижину настипних стрінгових значень
let strArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
for (const string of strArr) {
    console.log(string.length)
}

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
for (const string of strArr) {
    console.log(string.toUpperCase())
}

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
for (const string of strArr) {
    console.log(string.toLowerCase())
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
// let str = ' dirty string   '
// console.log(str.trim())
//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
let str = 'Ревуть воли як ясла повні';
const stringToarray = (str) => str.split(` `);
let arr = stringToarray(str)
console.log(arr)
//
//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrOfNum = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(arrOfNum.map(value => value.toString()));
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
const sortNums = (nums, direction) => {
    switch (direction) {
        case 'ascending':
            console.log(nums.sort((a, b) => a - b));
            break;
        case 'descending':
            console.log(nums.sort((a, b) => b - a));
    }
};
sortNums(nums, 'ascending'); // [3,11,21]
sortNums(nums, 'descending'); // [21,11,3]
//
//
// - є масив
let coursesAndDurationArray = [{title: 'JavaScript Complex', monthDuration: 5}, {
    title: 'Java Complex',
    monthDuration: 6
}, {title: 'Python Complex', monthDuration: 6}, {title: 'QA Complex', monthDuration: 4}, {
    title: 'FullStack',
    monthDuration: 7
}, {title: 'Frontend', monthDuration: 4}];
// -- відсортувати його за спаданням за monthDuration

console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration))
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5))
// описати колоду карт
let deckOfCards = [{
    cardSuit: null, value: 'Joker', color: 'black'
}, {
    cardSuit: null, value: 'Joker', color: 'red'
}, {
    cardSuit: 'spade', value: 'ace', color: 'black'
}, {
    cardSuit: 'clubs', value: 'ace', color: 'black'
}, {
    cardSuit: 'diamond', value: 'ace', color: 'red'
}, {
    cardSuit: 'heart', value: 'ace', color: 'red'
}, {
    cardSuit: 'spade', value: 'king', color: 'black'
}, {
    cardSuit: 'clubs', value: 'king', color: 'black'
}, {
    cardSuit: 'diamond', value: 'king', color: 'red'
}, {
    cardSuit: 'heart', value: 'king', color: 'red'
}, {
    cardSuit: 'spade', value: 'queen', color: 'black'
}, {
    cardSuit: 'clubs', value: 'queen', color: 'black'
}, {
    cardSuit: 'diamond', value: 'queen', color: 'red'
}, {
    cardSuit: 'heart', value: 'queen', color: 'red'
}, {
    cardSuit: 'spade', value: 'jack', color: 'black'
}, {
    cardSuit: 'clubs', value: 'jack', color: 'black'
}, {
    cardSuit: 'diamond', value: 'jack', color: 'red'
}, {
    cardSuit: 'heart', value: 'jack', color: 'red'
}, {
    cardSuit: 'spade', value: '10', color: 'black'
}, {
    cardSuit: 'clubs', value: '10', color: 'black'
}, {
    cardSuit: 'diamond', value: '10', color: 'red'
}, {
    cardSuit: 'heart', value: '10', color: 'red'
}, {
    cardSuit: 'spade', value: '9', color: 'black'
}, {
    cardSuit: 'clubs', value: '9', color: 'black'
}, {
    cardSuit: 'diamond', value: '9', color: 'red'
}, {
    cardSuit: 'heart', value: '9', color: 'red'
}, {
    cardSuit: 'spade', value: '8', color: 'black'
}, {
    cardSuit: 'clubs', value: '8', color: 'black'
}, {
    cardSuit: 'diamond', value: '8', color: 'red'
}, {
    cardSuit: 'heart', value: '8', color: 'red'
}, {
    cardSuit: 'spade', value: '7', color: 'black'
}, {
    cardSuit: 'clubs', value: '7', color: 'black'
}, {
    cardSuit: 'diamond', value: '7', color: 'red'
}, {
    cardSuit: 'heart', value: '7', color: 'red'
}, {
    cardSuit: 'spade', value: '6', color: 'black'
}, {
    cardSuit: 'clubs', value: '6', color: 'black'
}, {
    cardSuit: 'diamond', value: '6', color: 'red'
}, {
    cardSuit: 'heart', value: '6', color: 'red'
}]
// - знайти піковий туз
console.log(deckOfCards.find(value => value.cardSuit === 'clubs' && value.value === `ace`));
// - всі шістки
console.log(deckOfCards.filter(value => value.value === '6'));
// - всі червоні карти
console.log(deckOfCards.filter(value => value.color === 'red'));
// - всі буби
console.log(deckOfCards.filter(value => value.cardSuit === 'diamond'));
// - всі трефи від 9 та більше

console.log(deckOfCards.filter(value => value.cardSuit === 'spade' && value.value > '8' || value.value === '10' && value.cardSuit === 'spade'));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
let sortCards = deckOfCards.reduce((previousValue,currentValue) => {
switch (currentValue.cardSuit) {
    case 'spade':
        previousValue.spades.push(currentValue)
        break;
    case 'diamond':
        previousValue.diamonds.push(currentValue)
        break;
    case 'heart':
        previousValue.hearts.push(currentValue)
        break;
    case 'clubs':
        previousValue.clubs.push(currentValue)

}
return previousValue
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(sortCards)