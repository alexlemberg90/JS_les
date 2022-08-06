// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function squad(a,b) {
//  let s = a*b
//     console.log(s)
// }
// squad(12,11);
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleArea(r) {
    return 3.14*r*r
}

console.log(circleArea(7))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function area(h,r) {
return  2 * 3.14 * r * (r +h)
}
console.log(area(12,23))
// - створити функцію яка приймає масив та виводить кожен його елемент
function print(arr) {
    for (const element of arr) {
        console.log(element)
    }
}
print([1,23,4523,12,`qwsdq`])
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function pCreator(someText) {
    document.write(`<p>${someText}</p>`)
}

pCreator(`stop`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function ulCreator(someText) {
    document.write(`<ul>`)
    document.write(`<li>${someText}</li>`)
    document.write(`<li>${someText}</li>`)
    document.write(`<li>${someText}</li>`)
    document.write(`</ul>`)
}

ulCreator(`someText`)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liCreator(someText, numOfLi) {
    document.write(`<ul>`)
    for (let i = 0; i < numOfLi; i++) {
        document.write(`<li>${someText}</li>`)
    }
    document.write(`</ul>`)
}

liCreator(`text`, 1)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function ulBuilder(someArr) {

    document.write(`<ol>`)
    for (const elem of someArr) {
        document.write(`<li>${elem}</li>`)
    }
    document.write(`</ol>`)
}

ulBuilder([123, 'asdqq', 33, 3123, 'wers', true, false])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

function docWrighter(arrOfObj) {
    for (const obj of arrOfObj) {
        document.write(`
<h1>id - ${obj.id}</h1>
<h3>name - ${obj.name}</h3>
<h3>age - ${obj.age}</h3>
<hr>
`)
    }
}

docWrighter(users)

// - створити функцію яка повертає найменьше число з масиву
function f(nums) {
    let smNum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num <= smNum) {
            smNum = num;
        }
    }
    return smNum
}

console.log(f([13, 24, 567, 7, 32211, 235, 13131]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function sumOfNum(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        sum += num
    }
    return sum
}

console.log(sumOfNum([10, 30, 20, 40]))