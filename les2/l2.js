// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = prompt(`some num`);
// if (x !== 0) {
//     console.log(`correct`)
// }else {
//     console.log(`reject`)
// }
//
// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 44;
if (time >= 0 && time <= 15) {
    console.log(`1`)
}else if (time > 15 && time <= 30 ) {
    console.log(`2`)
}else if (time > 30 && time <= 45 ) {
    console.log(`3`)
}else if (time > 45 && time <= 59 ) {
    console.log(`4`)
}
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
//
let day = 22;
if (day >= 1 && day <= 10) {
    console.log(`1`)
}else if (day > 10 && day <= 20 ) {
    console.log(`2`)
}else if (day > 20 && day <= 31 ) {
    console.log(`3`)
}
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let somDay = 23
switch (somDay) {
    case 1:
        console.log('1');
        break
    case 2:
        console.log('2');
        break
    case 3:
        console.log('3');
        break
    case 4:
        console.log('4');
        break
    case 5:
        console.log('5');
        break
    case 6:
        console.log('6');
        break
    case 7:
        console.log('7');
        break
    default:
            console.log('not a day')
}
//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//
// //         Також потрібно врахувати коли введені рівні числа.
let userNum1 = 2;
let userNum2 = 4;
if (userNum1 > userNum2) {
    console.log(userNum1)
} else if (userNum1 < userNum2) {
    console.log(userNum2)
}else if (userNum1 === userNum2) {
    console.log('same')
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)
let x = 2 || 'default';
console.log(x);