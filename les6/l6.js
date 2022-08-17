// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function CreateUser(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
 let usersArr = [];
   let user1 = new CreateUser(1,'Alex','Wer','asd@wer.qw',155235);
   let user2 = new CreateUser(2,'Awex','Wfd','brfgb@wer.qw',25135);
   let user3 = new CreateUser(3,'Aqwe','Das','asdzbfd@wer.qw',251123);
   let user4 = new CreateUser(4,'dqwex','CAS','zdfzd@wer.qw',989787);
   let user5 = new CreateUser(5,'csex','FVSAee','abdzbzdsd@wer.qw',25123533);
   let user6 = new CreateUser(6,'ewx','Acrv','zdf@wer.qw',765756);
   let user7 = new CreateUser(7,'fvrex','GBVf','bfd@wer.qw',342534);
   let user8 = new CreateUser(8,'xcx','Sgre','zrer@wer.qw',885454554);
   let user9 = new CreateUser(9,'xzx','SWwfr','hty@wer.qw',8976967);
   let user10 = new CreateUser(10,'Qqqx','CVee','hntt@wer.qw',9785643);
 usersArr.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user10);
console.log(usersArr)
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let evenUsers = usersArr.filter(user => user.id%2 === 0);
console.log(evenUsers)
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUsersArr = evenUsers.sort((a,b) => a.id - b.id);
console.log(sortUsersArr)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
let clientArr = [];
let client1 = new Client(1,'Alex','Wer','asd@wer.qw',155235,[123,54234,235,23]);
let client2 = new Client(2,'Awex','Wfd','brfgb@wer.qw',25135,[123,54234123,54234123,54234]);
let client3 = new Client(3,'Aqwe','Das','asdzbfd@wer.qw',251123,[123,54234]);
let client4 = new Client(4,'dqwex','CAS','zdfzd@wer.qw',989787,[123,54234123,54234123,54234123,54234123,54234]);
let client5 = new Client(5,'csex','FVSAee','abdzbzdsd@wer.qw',25123533,[123,54234123,54234]);
let client6 = new Client(6,'ewx','Acrv','zdf@wer.qw',765756,[123,54234123,54234123,54234123,54234123,54234123,54234123,54234]);
let client7 = new Client(7,'fvrex','GBVf','bfd@wer.qw',342534,[123,54234]);
let client8 = new Client(8,'xcx','Sgre','zrer@wer.qw',885454554,[2]);
let client9 = new Client(9,'xzx','SWwfr','hty@wer.qw',8976967,[]);
let client10 = new Client(10,'Qqqx','CVee','hntt@wer.qw',9785643,[123,54234123,54234]);
clientArr.push( client1,client2,client3,client4,client5,client6,client7,client8,client9,client10);
console.log(clientArr)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
let sortOrder = clientArr.sort((a, b) => a.order.length -b.order.length);
console.log(sortOrder)
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, producer,year, maxSpeed,engine){
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engine = engine;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.inf0 = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
//
// let car = new Car('Kia','Korea',2000,200,2.6);
//
// console.log(car);
// car.drive();
// car.inf0();
// car.increaseMaxSpeed(50);
// car.addDriver({name: "Vasya", age: 22});
// console.log(car);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// class Car{
//     constructor(model, producer,year, maxSpeed,engine) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     inf0(){
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed = this.maxSpeed + newSpeed;//  this.maxSpeed += newSpeed
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
//
// }
//
// let car = new Car('Kia','Korea',2000,200,2.6);
//
// let objDriver = {
//     name : 'Petro',
//     age: 44
// }
//
// console.log(car);
// car.drive();
// car.inf0();
// car.increaseMaxSpeed(100);
// car.addDriver(objDriver);
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella{

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella1 = new Cinderella('Alina',22,35);
let cinderella2 = new Cinderella('Alina',22,36);
let cinderella3 = new Cinderella('Alina',22,37);
let cinderella4 = new Cinderella('Alina',22,38);
let cinderella5 = new Cinderella('Alina',22,34);

let array = [cinderella1,cinderella2,cinderella3,cinderella4,cinderella5];

class Prince extends Cinderella{
    constructor(name, age, findFootSize) {
        super(name,age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Vasya', 22, 37);

let find = (array, prince) => {
    for (const item of array) {
        if (prince.findFootSize === item.footSize) {
            return `My Cinderella is ${item.name}`
        }
    }
}
console.log(find(array, prince));

let cinderella = array.find(value => prince.findFootSize === value.footSize);
console.log(cinderella);
