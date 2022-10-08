/*
const a = 'Переменная а';
console.log(a);

const age = 10;
const totalPrice = 200.74;
const userName = 'Chelsy';
const message = 'Добро пожаловать!';
const isOpen = true;
const shouldConfirm = false;

console.log('Мой возраст',age);

const type = typeof (age);
console.log(type);


alert('DDDD');
console.log('После');


const shouldRenew = confirm('продолжаем?');
console.log(shouldRenew);

let quantity = prompt('введите');
quantity = Number(quantity);
console.log(quantity);
console.log(typeof quantity);

let elementWidth = '50px';

const result = Number.parseInt(elementWidth);
console.log(result);
console.log(typeof result);

elementWidth = Number.parseInt(elementWidth);
console.log(elementWidth);
console.log(typeof elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight);
console.log(elementHeight);
console.log(typeof elementHeight);

let salary = 1300.16472;
salary = Number(salary.toFixed(2));
console.log(salary);
console.log(typeof salary);



console.log(Number('5'));

const base =2;
const power = 2;

const result = Math.pow(base,power);
console.log(result);

console.log(2**2);



let base = prompt('дай число');
base = Number (base);
console.log(base)

let power = prompt('давай степень');
power = Number (power);
console.log(power);

let result = Math.pow(base,power);
result = Number (result);
console.log('результат ',result);


const max = 80;
const min = 10;

const result =Math.round(Math.random()*(max-min)+min);
console.log(result);


let salary = 1300.123095043;
salary = salary.toFixed(2);
salary = Number(salary);
console.log(salary);



const messag = 'здесь 5 симоволов или 9';
console.log(messag.length + ' знаков');




const FirstName = 'TruNov';
const LastName = 'YurIi';
const FullName = FirstName + ' ' + LastName ;

const room = 716;
const status = 'VIP';

const welcomeMsg = `Гость ${FullName} поселяться в ${status} номер ${room}`;
console.log(welcomeMsg);
console.log(FirstName);

const normalizeName = FirstName.toLowerCase();
console.log(normalizeName);

console.log(FirstName[0] + FirstName.slice(1).toLowerCase());




const blackListWord1 = 'спам';
const blackListWord2 = 'распродажа';

const string1 = 'Привет это не сПам';
const string2 = 'Привет это не распродажа';
const string3 = 'Новости экономики';

console.log(string1.toLowerCase().includes(blackListWord1));



const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

const cart = [54, 28, 105, 70, 92, 17,120, 12, 25, 90];
let total = 0;
for (let i=0; i < cart.length; i +=1) {
    total += cart[i];
}
console.log('Total:',total);

const cart = [54, 28, 105, 70, 92, 17,120, 12, 25, 90];
let total2 = 0;
for (const value of cart) {
    total2 += value;
}
console.log(total2);


const cart = [54, 28, 105, 70, 92, 17,120, 12, 25, 90];

for (let i=0; i < cart.length; i +=1) {
    cart[i] = Math.round(cart[i]*1.2);

}

console.log(cart);


const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;
for (let i=0; i < numbers.length; i +=1) {
console.log(numbers[i]);
if(numbers[i]%2 === 0) {
    console.log('четное')
    total += numbers[i];
}
}
console.log(total);

const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
let total = 0;

for (const number of numbers) {
    console.log(number);
    if(number%2 !== 0) {
        console.log('четное')
        total += number;
    }
    }
    console.log(total)

    const logins = ['fghj', 'dsfdg', 'sdfgstgs', 'sfdg', 'yukkaf1', 'fdgbsf']
    const loginToFind = 'yukkaf1';
    let message = "";
    for(let i=0; i<logins.length; i += 1) {
        const login = logins[i];
        console.log[i];

        if (login === loginToFind) {
            message =  `Пользователь ${loginToFind} найден`;
            break;
        }
    message =  `Пользователь ${loginToFind} не найден`;
    }
    console.log(message);


    const logins = ['fghj', 'dsfdg', 'sdfgstgs', 'sfdg', 'yukkaf1', 'fdgbsf']
    const loginToFind = 'yukkaf1';
    let message = `Пользователь ${loginToFind} не найден`;
    for (const login of logins) {
        console.log(login);
        console.log(login === loginToFind);
        if (login === loginToFind){
        message = `Пользователь ${loginToFind} найден`;
    }
}
console.log(message);

const logins = ['fghj', 'dsfdg', 'sdfgstgs', 'sfdg', 'yukkaf1', 'fdgbsf']
    const loginToFind = 'yukkaf1';

    console.log(logins.includes(loginToFind));

    const logins = ['fghj', 'dsfdg', 'sdfgstgs', 'sfdg', 'yukkaf1', 'fdgbsf']
    const loginToFind = 'yukkaf1';
    
    const message = logins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind} не найден`;

    console.log(message);

    const numbers = [51, 18, 13, 24, 7, 85, 19];
    let smallestNumber = numbers[0];
    for (const number of numbers) {
    if (number < smallestNumber) {
        smallestNumber = number;
    }
    }
    console.log(smallestNumber);

    const friens = ['Mango', 'Poly', 'Kiwi', 'Anjax'];
    let string = '';
    for (const friend of friends) {
        string += friend + ',';
    }
    console.log(string);

    const friends = ['Mango', 'Poly', 'Kiwi', 'Anjax'];
    const string = friends.join(', ')
    console.log(string);

    const title = 'Top 10 benefits of React framework';
    const normalizedTitle = title.toLowerCase();

    const words = normalizedTitle.split(' ');
    console.log(words);

    const slug = words.join('-');
    console.log(slug);
    const slug1 = title.toLowerCase().split(' ').join('_');
    console.log(slug1);*/
     
    // const numbers = [0, 5, 10, ...[1, 2, 3], 4, 5];

    // console.log(numbers);

    // const numbers2 = [...[1, 2, 3], ... [4, 5, 6], ... [7, 8, 9]];
    // console.log(numbers2);

    // const temps = [18, 12, 1, 65, 43, 18, 21];
    // console.log(Math.max(...temps));


    // const lastWeekTemps = [1, 2, 3];
    // const currentTemps = [4, 5, 6];
    // const nextWeekTemps = [7, 8, 9];

    // const allTemps = [...lastWeekTemps, ... currentTemps, ... nextWeekTemps];
    // console.log(allTemps);


    // ====================================
    // SPRET
    // let citiesOfUkraine = ['Kyiv', 'Odessa', 'Donetsk', 'Lugansk'];
    // let citiesOfEU = ['London', 'Paris', 'Milan', 'Berlin'];

    // let cities = citiesOfEU.concat(citiesOfUkraine);

//    let cities = ['NY', 'Harkiv', ...citiesOfUkraine, 'Dnipro', ...citiesOfEU];

//     console.log(cities);

    // REST
    // 'Kyiv' = 'AA';
    // 'Odessa' = 'ВН';
    // 'Donetsk' = 'AA';
    // 'Lugansk' = 'BB';

    // const [AA, BH, AH, BB] = citiesOfUkraine;
    // console.log(AH);

    // const [, , AH,] = citiesOfUkraine;
    // console.log(AH);

    // const [AA, ...others] = citiesOfUkraine;
    // console.log(others);


    // const [AA, ...rest] = citiesOfUkraine;
    // console.log(rest);
//========================
    // let a = 100; 
    // let b = 200;

    // [a,b] = [200,100]

    // console.log(a);
    // console.log(b);

//==========================
// function getSum (a,b, ...rest) {
//     console.log (a, b, rest);
//     console.log(a);
//     console.log(rest);

// }

// getSum(10,5, 55,45, 11, 23, 1000, 'Vova', 'Admin');


//=====================

// const user = {
// name: 'Alex',
// age: 25,
// adres: {
//     city: "Kyiv",
//     zip: 12345,
//     street: "Main",
//     car: {
//         color: "blue",
//         man: "BMW",
//     }
// },
// hobbys: ['wind serfing', "deep diving", "bajo jumping"],
// };

// // console.log(user);

// // const {age} = user;
// // console.log(age);

// // const {name} = user;
// // console.log(name);

// // const {name, age} = user;
// // console.log(name);


// // console.log(user.adres.city);

// // const {adres: {street}} = user;
// // console.log(street);

// // console.log(user.adres.car.color);


// // const {adres: {car: {color},},} = user;

// // console.log (color);


// // // ==============================

// // const {hobbys} = user;
// // console.log(hobbys);

// // const {hobbys: [, deep]} = user;
// // console.log(deep);

// // // ==============================
// // // SPRET FOR OBJECTS

// // let vova = {
// //     name: "Vova", 
// //     age: 25,
// //     active: true,
// //     moderator: "FD",
// //     tarif: 'basic', 
// // };

// // let sara = {
// //     name: "Sara",
// //     age: 18,
// //     active: true,
// //     status: "Frau",
// //     moderator: "FD",
// //     tarif: 'basic',

// // }

// // let bob = {
// //     ... vova,
// //     name: "Bob",
// // };

// // let sveta = {... sara, name: "Sveta", shop: "Silpo"};
// // for(let item in sveta) {
// //     // hasOwenProperty()
// // console.log(item, sveta[item]);
// // };
// // delete sveta.status;
// // console.log(vova);
// // console.log(bob);
// // console.log(sara);
// // console.log(sveta);


// // ====================================

// // const pear = {id: "5", name: "pear", price: 35, qty: 500, category: "fruits"};

// // function addItem (id, name, price, qty, category) {

// //     let arr = [];
// //     let obj = {id, name, price, qty, category};
// //     arr.push(obj);
// //     console.log(arr);

    
// // }

// // addItem(5, pear, 35, 500, fruits);

// //===============================================
// // function addItem (id, name, price, qty, category) {

// //     let arr = [];
// //     let obj = {id, name, price, qty, category};
// //     arr.push(obj);
// //     console.log(arr);

    
// // }

// // addItem(5, pear, 35, 500, fruits);


// // let items = [
// //     {id: "5", name: "pear", price: 35, qty: 500, category: "fruits"},
// //     {id: "5", name: "apples", price: 105, qty: 270, category: "fruits"},
// //     {id: "5", name: "potato", price: 85, qty: 300, category: "vegetables"},
// //     {id: "5", name: "tomatoes", price: 15, qty: 750, category: "fruits"},
// // ];


// // const pear = {id: "5", name: "pear", price: 35, qty: 500, category: "fruits"};

// // const {id, name, price, qty, category} = pear;

// // console.log(name);



// // ====================
// let nums = [1,2,3,4,5];
// nums.push(10);
// console.log(nums);


// function myPusch (mainArr, ...rest) {
//     let arr = []
//     return arr = [...mainArr...rest]


// }

// console.log(myPush(nums, 10,20,30));

// ========================



// const pear = {
//     id: "5", 
//     name: "pear",
//     price: 35,
//     qty: 500, 
//     category: "fruits",
// };

// function myObj(obj) {
//     // console.log(obj);
//     // let newObj = {...obj,
//     // id: Date.now()}
//     // return newObj;
//  return {...obj, id: Date.now()}
// };

// console.log(myObj(pear));

// function myObj({name, price, qty, category}) {
// //     // console.log(obj);
// //     // let newObj = {...obj,
// //     // id: Date.now()}
// return {...{name, price, qty, category}, id: Date.now()};
// //  return {...obj, id: Date.now()}
// };

// console.log(myObj(pear));


//==============================
// function geetUser(fn){
//     console.log("Start SayHallo");
//     fn();
//     console.log("End from sayHallo");
// }

// function sayHallo(){
//     console.log("Hallo from clb");
// }

// geetUser(sayHallo);

//===============================

// let btn = document.querySelector("button");
// btn.addEventListener("click", onClick);

// // function onclick() {
// // console.log("Click on BTN");
// // }

// // ============================
// // function eterateArr(item){
// //     console.log(item);
// // }
// // [1,2,3,4,5].forEach(eterateArr);
// // [1,2,3,4,5].forEach(function(elem){
// //     console.log(elem*10);
// // });

// // ============================
// // Calculator

// const sum = function (a, b) {
//      return a + b;
//  }

//  const sub = function (a, b) {
//     return a - b;
// }

// const div = function (a, b) {
//     return a / b;
// }

// function calc(a, b, clb) {
//    return clb(a, b)
// }

// let res = calc(10,5, function(a,b){
//     return a/b;
// })
// console.log(res);

// console.log(calc(3,10,sum));
// console.log(calc(3,10,div));
// console.log(calc(3,10,sub));

// ================
// console.log("Ferst")
// console.log("Second")
// console.log("Third")

// setTimeout(function(){
//     console.log("From setTimeout 0sec")
// }, 0)

// setTimeout(function(){
//     console.log("From setTimeout 3sec")
// }, 3000)

// console.log("Last");

// =================

// setTimeout(function(){
//     console.log("From setTimeout 3sec")
// }, 3000)

// setInterval(function(){
//     console.log("From setTimeout 3sec")
// }, 3000)


// setTimeout(function(){
// alert("Halo");}, 4000)

// =================

// function calcFunction(n){
//     return function(){
//         console.log(10 * n);
//     }
// }

// const calc = calcFunction(10);
// calc();

// function incrementor(n){
//     return function(i){
//         return function (k) {
//             return n + i + k;
//     }
// }
// }
// // let addOne = incrementor(1)
// // console.log(addOne(1))

// // const addFive = incrementor(5);
// // let res = addFive(0);
// // console.log(res);

// // =========== Carring

// console.log(incrementor(5)(10)(5));

// ====================

// function generatorURL (domain){
//     return function (url) {
//         return `https://www.${url}.${domain}`
//     }
// }

// console.log(generatorURL("doc")("totaldental"));

// =================
// function frameworkManager (){
//     const frameworks = ["Angular", "Vue"];
//     return {
//         schow(){
//             console.log(frameworks);
//         },
//         add(newFrame) {
//             frameworks.push(newFrame);
//         },
//     }
// }

// const manager = frameworkManager();
// console.log(manager);

// manager.schow();
// manager.add("React");
// manager.schow();

// ======================

// const pear = { 
//     name: "pear",
//     price: 35,
//     qty: 500, 
//     category: "fruits",
// };

// function logProduct(product) {
//     console.log("LogProduct callback", product);
// }

// function logTotalPrice(product) {
//     console.log("LogTotalPrice callback", product.price * product.qty);
// }

// // logProduct(pear);
// // logTotalPrice(pear);

// function createProduct (obj, clb) {
//     const product = {...obj, id: "555"};
//     clb(product);
// }


// // createProduct(pear, logProduct);
// createProduct(pear, logTotalPrice);

// ========================

// [1,2,3,4,5].forEach(function(el)){
//     console.log(el*2);
// };
// [1,2,3,4,5].forEach(mult);


// ===================
// function each(arr, clb) {
// let newArr = []

// for (const el of arr) {
//     newArr.push(clb(el))
// }
// return newArr
// }

// let res = each([1,2,3,4,5], function (value){
//     return value * 3;
// })
// console.log(res);

// =================

// let a = 10;
// function info () {
//     console.log(a);
//     function fnB(){
//         console.log(a);
//     }
//     fnB();
// }

// info();

// =====

// let a = 10;
// function info () {
//     let b = 20;
//     console.log(a);
//     console.log(b);
//     }

// let c = 30;

// info();

// ============== стрелочные функции
// No hosting
// No arguments
// No rel


// const sayHallo = () => {
// console.log("Hallo");
// }
// sayHallo();



// const sayName = (userName) => {
// return userName;
// }

// console.log(sayName("Alex"));


// const sayName = (userName) => userName;
    
//     console.log(sayName("Alex"));

// const sum = (a,b) => a+b;
// console.log(sum(4,5));


// шот ретурн не работает при большом теле функции
// const sum = (a,b) => {
//     if (a>b) {
// return a+b;
//     }
    
// // }

// // console.log(sum(8,5));

// // ===============

// const frameworkManager = () => {
//         const frameworks = ["Angular", "Vue"];
//         return {
//             schow(){
//                 console.log(frameworks);
//             },
//             add(newFrame) {
//                 frameworks.push(newFrame);
//             },
//         }
//     }
    
//     const manager = frameworkManager();
//     console.log(manager);
    
//     manager.schow();
//     manager.add("React");
//     manager.schow();

    // ==============

    // const frameworkManager = () => ({ 
    //     title: "Reack",
    //     version: 17,

    // });


    // console.log(frameworkManager());
 
    
// ========== THIS

// FUNCTION

// [].metod(()=>[]);
// // [].metod(function(){});

// function clb(){}
// [].metod(clb);

//========= 99% используем =>
// [].metod((elem,idx,arr)=>{})

// const users = ["Vova", "Sara", "Mike", "Bob"];
// const fruits = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// // users.forEach((elem,idx,arr)=>{
// //     console.log(arr);
// // })

// fruits.forEach((item, idx)=>{
// console.log(`${item}:${idx}`);
// })

// let friends = [
//     {id: "5", name: "pear", price: 35, qty: 500, category: "fruits"},
//     {id: "6", name: "appel", price: 45, qty: 300, category: "fruits"},
//     {id: "7", name: "melon", price: 75, qty: 80, category: "fruits"},

// ];

// friends.forEach(function(friend){
// console.log(friend.name);
// });

// let friends = [
//     {id: "5", name: "pear", price: 35, qty: 500, category: "fruits"},
//     {id: "6", name: "appel", price: 45, qty: 300, category: "fruits"},
//     {id: "7", name: "melon", price: 75, qty: 80, category: "fruits"},

// ];

// ========== BEST PRACTICE
// friends.forEach(({id, name}) => {
// console.log(id, name);
// });

// =============
// friends.forEach((item) => {
//     const {id, name} = item;
//     console.log(id, name);
//     });

// =============
// friends.forEach(({id, name}) => {
//     console.log(id, name);
//     });

// ==================
// // RETURNS NEW ARR

// // [].map(elem,idx,arr)=>{};

// // let numbers = [10,20,30,40,50];
// // const newArr = numbers.map((num,idx,arr)=>{
// //     return num*10;
// // });
// // console.log(newArr);

// // ============
// // arr copy

// let numbers = [10, 20, 30, 40, 50];
// // const newArr = numbers.map((num) => {
// //     return num;
// // })

// // const newArr = numbers.map((num) =>num);
// // console.log(newArr);
// // console.log(newArr == numbers);

// let friends = [
//     {id: "5", name: "pear", price: 35, qty: 500, category: "fruits"},
//     {id: "6", name: "appel", price: 45, qty: 300, category: "fruits"},
//     {id: "7", name: "melon", price: 75, qty: 80, category: "fruits"},

// ];

// // const friendQty = friends.map((friend)=>{
// //     return friend.qty;
// // });
// // console.log(friendQty);

// const friendQty = friends.map(({ qty }) => qty);
// console.log(friendQty);

// const friendsNames =  friends.map(({name}) => name );
// console.log(friendsNames);

// const bonus = friends.map((friend) => {
//     return friend.qty + friend.qty*0.1;});

//     console.log(bonus);

// const bonusUser = "appel";
// const friensArr = friends.map((friend) => {
//     if (bonusUser == friend.name) {
//     { console.log("Yes")};
//     return {
//         ...friend,
//         qty: friend.qty*10,
//     };
// }
// return friend;
// });
// console.log(friensArr);

// const vova = {
//     name: "Vova",
//     age: 25,
// }
// console.log(vova);

// const sara = {
//     ...vova,
//     name:"Sara"
// };

// console.log(sara);

// const friendsBest = friends.map((friend) =>({
//     ...friend,
//     qty: friend.qty + 100,
//     id: friend.id +1,

// }))

// console.log(friendsBest);


// ======================= FILTER ===========

let friends = [
    {id: "5", name: "pear", price: 35, qty: 300, category: "fruits"},
    {id: "5", name: "pear", price: 535, qty: 800, category: "fruits"},
    {id: "6", name: "appel", price: 45, qty: 800, category: "fruits"},
    {id: "7", name: "melon", price: 95, qty: 580, category: "fruits"},
    {id: "8", name: "lime", price: 150, qty: 380, category: "citrus"},
    {id: "9", name: "potato", price: 5, qty: 180, category: "vegetables"}
];

// const done = friends.filter ((friend)=>{
//     return friend.qty;
// });

// console.log(done);

// const notdone = friends.filter ((friend)=>{
//     return !friend.qty;
// });

// console.log(notdone);

// ================ QTY > 100
// const best = friends.filter ((friend)=>{
//     return friend.qty>100;
// });

// console.log(best);

// ======== omly PEAR

// const userToFind = "pear";
// const user = friends.filter((friend)=>{
//     return friend.name == userToFind;
// });

// console.log(user);


// const notuser = friends.filter((friend)=>{
//     return friend.name !== userToFind;
// });

// console.log(notuser);

// ======================= FIND

// const nameFind = "pear";
// const name = friends.find ((friend)=>{
//     return friend.name == nameFind;
// });

// console.log (name);

// const user = friends.every((friend)=>{
//     return friend.qty >= 100;
// });

// console.log(user);

// const user = friends.every((friend)=>{
//     return friend.qty < 100;
// });

// console.log(user);

// =============== SORT
// let fruits = [
// "pear", 
// "pear", 
// "appel", 
// "melon", 
// "lime", 
// "potato"
// ];

// const res = fruits.sort();
// console.log(res);


// const res2 = fruits.sort().reverse();
// console.log(res2);

// ============== REDUCE
// const nums = [10, 20, 30, 40, 50];
// const total = nums.reduce((acc, elem, idx, arr)=> {
//     // console.log(acc);
//     console.log(elem, acc);
//     // console.log(idx);
//     // console.log(arr);

//     return acc + elem;
// }, 0);
// console.log(total);

// const totalPrice = friends.reduce((total, friend)=>{
//     return total + friend.price;
// }, 0)

// console.log(totalPrice);

// const totalQty = friends.reduce((total, friend)=>{
//     return total + friend.price;
// }, 0)

// console.log(totalPrice);

// let cart = [
//     {id: 1, product:"Apple", price: 1200, qty: 2},
//     {id: 2, product:"Samsung", price: 800, price: 800, qty: 1},
//     {id: 2, product:"LG", price: 800, price: 1000, qty: 3},
// ];

// let cartSum = cart.reduce((total, cartItem) =>{
//     return total + cartItem.price;
// }, 0);

// console.log(cartSum);


// const products = cart.map((cartItem)=>{
//     return cartItem.product;
// });

// console.log(products);

// const products = cart.reduce((title, cartItem)=>{
// title.push(cartItem.product);
// return title;
// }, []);

// console.log(products);


// ================= CHAINING
// "".split("").reverse().join("");
// [].map().filter().reduce()

// let fruits = ["melon", "apples", "pears", "bananes"];

// let fruit = "melon";
// const res = fruit.split('').reverse().join("");

// console.log(res);


// const newArr = friends.filter((friend)=>{
//     return friend.qty >500;

// });

// console.log(newArr);

// const newArr = friends
// .filter(({qty})=>qty >500)
// .map(({name, qty})=> {
//     return {
//     name,
//     qty,};
// })
// .reduce((total, {qty}) => {
//     return total + qty;
// }, 0);

// console.log(newArr);

// ====== modul 5 =======

//===== THIS =========

// let vova = {
//     name: "vova",
//     age: 25,
//     status: "Moderator",

//     say() {
//         this.showInfo();
//     },

//     showInfo() {
//         console.log(this.name, this.age, this.status);
//     },
// };

// vova.say();


// ====== THIS IN COLL BACK

// let vova = {
//     name: "vova",
//     age: 25,
//     status: "Moderator",


//     showInfo() {
//     console.log(this.name, this.age, this.status);
//             },

// };


// function greetUser(clb){
    
//     console.log("Вызываю clb из  greetUser ${clb()}")
// };

// vova.showInfo();

// // vova.greetUser();
// // ======= здесь потерялся контекст на vova.greetUser

// // ===== this in arrow function

// const greet = () => {
//     console.log("greet", this)
// };
// greet();
// здесь контекст - ВИНДОВС

// let vova = {
//         name: "vova",
//         age: 25,
//         status: "Moderator",

// showInfo() {

//     // 1й вариант showInfo
//     const greet = () => {
//         console.log("greet", this)
//     };
//     // ЗДЕСЬ КОНТЕКТС ВОВА

//       // 2й вариант showInfo

//     console.log("showInfo", this);
     
//     greet();
// },

// 3й вариант
// showInfo: function (){
//     console.log("showInfo", this);
// },

// потеря контекста
// showInfo: () => {
//     console.log("showInfo", this);
// },
 
// };

// vova.showInfo();


// ========================

// const greet = () => {
//         console.log("greet", this)
//     };
    
//     let vova = {
//             name: "vova",
//             age: 25,
//             status: "Moderator",

//             greet,
// };

// vova.greet();


// =============== THIS ES5
// function User(name, age) {
//     this.name = name;
//     this.age = age;

//     this.schowInfo = function () {
//         console.log(this.name, this.age);
//     };
// }

// const vova = new User("Vova", 25);
// const Sara = new User("Sara", 30);
// vova.schowInfo();
// Sara.schowInfo();

// =============== THIS ES6
// class User {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     showInfo() {
//                 console.log(this.name, this.age);
//             };
// }
        
//         const vova = new User("Vova", 25);
//         const Sara = new User("Sara", 30);
//         vova.showInfo();
//         Sara.showInfo();


// ===========================



// let vova = {
//     name: "Vova",
//     age: 30,
//     status: "Moderator",

//     showInfo() {
//         console.log(this.name, this.age);
//     },

//     };

//     vova.showInfo();

//     let sara = {
//         name: "Sara",
//         age: 25,
//         status: "Admin",

//         showInfo() {
//             console.log(this.name, this.age);
//         },

//         };
    
//     sara.showInfo();


// ============= если внутри Сары нет шоуИнфо
// let vova = {
//     name: "Vova",
//     age: 30,
//     status: "Moderator",

//     showInfo() {
//         console.log(this.name, this.age);
//     },

//     };

//     vova.showInfo();

//     let sara = {
//         name: "Sara",
//         age: 25,
//         status: "Admin",

//         };
    
//     vova.showInfo.call(sara); // вызови мне МЕТОД showInfo обьекта ВОВА  в контекте объекта САРА

// ========================== если шоуИнфо отдельный объект

// let vova = {
//     name: "Vova",
//     age: 30,
//     status: "Moderator",
//     };

//     let sara = {
//         name: "Sara",
//         age: 25,
//         status: "Admin",

//         };
    
//      const info = {
//             showInfo() {
//             console.log(this.name, this.age);
//         },
//      }

//     info.showInfo.call(vova);
//     info.showInfo.call(sara);


// ================== APPLAY

// const arr = [10, 20, 30, 40];

// // const min = Math.min(...arr);
// // то же самое
// const min = Math.min.apply(Math, arr);
// // вызови мне метод min  обьекта Math в контекте массива arr
// console.log(min);

// ================ BIND
// возвращает не вызывает нужно самому вызвать

// let vova = {
//     name: "Vova",
//     age: 30,
//     status: "Moderator",
//     };


//     let sara = {
//         name: "Sara",
//         age: 25,
//         status: "Admin",

//         };

// const info = {
// showInfo() {
// console.log(this.name, this.age, this.status);
//         },
// }

// info.showInfo.bind(vova)();
// info.showInfo.bind(sara)();

// ======================== практика THIS

/**
 * Напишите метод `calcTotalPrice(stoneName)`, который принимает название камня и
 * рассчитывает и возвращает общую стоимость камней с таким именем, ценой и
 * количеством из свойства `stones`.
 */

// const shop = {
//     stones: [
//         {idx: 1, name: "Ruby", price: 100, qty: 10},
//         {idx: 1, name: "Diamond", price: 150, qty: 15},
//         {idx: 1, name: "Saphure", price: 150, qty: 15},
//         {idx: 1, name: "Topaz", price: 100, qty: 5 },
//     ],

//     calcTotalPrice(stoneName) {
//         const jem = this.stones.find(({name}) => 
//         name = stoneName);
       

//         if (!jem) {
//            console.log("Not Fount");
//            return;
//         }
        
//         const {name,price,qty} = jem;
//         return price * qty;
//         // проверить  {
//         //     console.log(stone.name);
//         // })
//     },
// };

// console.log(shop.calcTotalPrice("Diamond"));
// shop.calcTotalPrice({name: "Diamond",  price: 150, qty: 15});

// // ==================== 

// const playlist = {
//     name: "Мой плелйлист",
//     rating: 5, 
//     tracks: ["трек-1", "трек-2", "трек-3"],
//     treckCount: 3,

// };

// const {name, rating, tracks, trecCount} = playlist;

// // console.log(name);

// tracks.push("track-7");

// console.log(tracks[0]);

// =================================
// const playlist = {
//     name: "Мой плелйлист",
//     rating: 5,
//     tracks: ["трек-1", "трек-2", "трек-3"],
//     treckCount: 3,

// };

// const {name, rating: rat = 0, tracks, trecCount} = playlist;

// console.log(rat);

// ================================

// const profile = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Oho Rios, Jamaica",
//     avatar: "monstr",
//     stats: {
//         folowers: 5566,
//         views: 4827,
//         likes: 1388,
//     },
// };

// // const {name, tag, stats} = profile;

// // // console.log(name, stats);

// // const { folowers, views, likes} = stats;

// // console.log (name, views);

// // глубокая деструктуризация
// const {name, tag, stats: { folowers: myfolowers = 5, views, likes}} = profile;
// console.log (name, views);

// ===деструктуризация практич пример

// const authors = {
//     kiwi: 4, 
//     poly: 7, 
//     ajax: 9,
//     mango: 6,

// };

// const entries = Object.entries(authors);

// for ([name, rating] of entries) {
//     console.log(name, rating);
// };

// ===============================

// const profile = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Oho Rios, Jamaica",
//     avatar: "monstr",
//     stats: {
//         folowers: 5566,
//         views: 4827,
//         likes: 1388,
//     },
// };

// const {name, tag, avatar, ... rest} = profile;

// console.log(rest);

// ======================================
// const schowProfileInfo = function (userProfiele) {
// const {name, tag, location, avatar, stats: { folowers, views, likes}
// } = userProfiele;

// console.log(name);
// };

// const schowProfileInfo = function ({name, tag, location, avatar, stats: { folowers, views, likes}
// }) {

// console.log(name);
// };

// const profile = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     location: "Oho Rios, Jamaica",
//     avatar: "monstr",
//     stats: {
//         folowers: 5566,
//         views: 4827,
//         likes: 1388,
//     },
// };

// schowProfileInfo(profile);


// ================================== КОРЗИНА

// const cart = {
//     items: [],
//     getItems (){
//         return this.items;
//     },
//     add(product) {

//         for (const item of this.items) {
//             if (item.name == product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }

//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },

//     remuve(produktName) {
       
//  for (let i = 0; i < this.items.length; i += 1) {
//     const item = this.items[i];
   
//     if(produktName === item.name) {
//         console.log("find product", produktName);

//         this.items.splice(i,1);
//     }
//  }

//     },

//     clear() {
//         this.items = []
//     },

//     countTotalPrice () {
//         console.log(this.items);
//         const {items} = this;
//         let total = 0;

//         for(const {price} of items) {
//             total += price;
//         }
//         return total;
//     },

//     increaseQuatity(produktName) {},
//     deccreasQuatity(produktName) {},
// };

// // console.log(cart.getItems());

// cart.add({name: "apple", price: 50});
// cart.add({name: "lime", price: 80});
// cart.add({name: "lime", price: 80});
// cart.add({name: "banana", price: 100});
// cart.add({name: "melon", price: 250});
// cart.add({name: "melon", price: 250});
// cart.add({name: "melon", price: 250});

// // console.table(cart.getItems());

// // cart.remuve("lime");

// // console.table(cart.getItems());

// // cart.clear();
// // console.table(cart.getItems());

// console.log("Total", cart.countTotalPrice());


// ====================================== modul 3/19
// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
  
//   function getAllPropValues(propName) {
//     // Change code below this line
//     const propValue = [];
//   for (const product of products) {
    
//     const keys = Object.keys(product);
//     for (const key of keys) {
//      if (key === propName) {
//        propValue.push(product[key]);
//      }
//     }
//   }
//     return propValue;
//   };

//   console.log(getAllPropValues("quantity"));

  // ================================================ modul 3/20

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// for (const product of products) {
//   if (product.name === productName) {
//     return product.price*product.quantity
//   }
// }


//   // Пиши код выше этой строки
// };

// console.log(calculateTotalPrice("Grip"));


// ==================== modul 3/24

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
//   ];
  
//   const hexColors = [];
//   const rgbColors = [];
//   // Change code below this line
  
//   for (const color of colors) {
//     const { hex, rgb } = color;
//     hexColors.push(hex);
//     rgbColors.push(rgb);
//   };

//   console.log(hexColors);
//   console.log(rgbColors);

// ================================= банковский счет

// const Transaction = {
//     DEPOSIT: "deposit",
//     WITHDRAW: "withdraw",
// };

// const account = {
//     balance: 0,
//     transactions: [ ],
//     creatTransaction(amount, type, message = "ok") {
//         const transaction = {
//             id: this.transactions.length, // UUID
//             amount,
//             type,
//             date: new Date(),
//             message,
//         }
//     this.transactions.push(transaction);
//     },

//     deposit(amount) {
//         this.balance += amount;
//         this.creatTransaction(amount, Transaction.DEPOSIT);
//     },

//     withdraw(amount) {
//         if (amount > this.balance) {
//             console.log("sorry");
//             this.creatTransaction(amount, Transaction.WITHDRAW, "sory, not");
//             return;
//         }

//         this.balance -= amount;
//         this.creatTransaction(amount, Transaction.WITHDRAW);
//     },

//     getBalance() {
// return this.balance;
//     },

//     getTransactionDetails(id){
//         for (const tr of this.transactions) {
//             if (tr.id === id) {
//             return tr;
//             }
//         }
//         return "Transaction not found";
//     },

//     getTransactionTotal(type) {
//         let summ = 0;
//         for (const tr of this.transactions) {
//             if (tr.type === type) {
//             summ += tr.amount;
//             }
//         }
//         return summ;
//     },
    
// };

// console.log(account.getBalance());
// account.deposit(100);
// account.deposit(100);

// account.withdraw(50);
// account.withdraw(500);
// console.log(account.getBalance());
// console.log(account.transactions);

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(8));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));


//================================ modul 3 / 32

// function addOverNum(number, ...args) {
//     let total = 0;
//     console.log(number);
//     console.log(args);
//     for (const arg of args) {
//       if (arg > number) {
//       total += arg;
//       }
//     }
  
//     return total;
//     // Change code above this line
//   };
  
//   console.log(addOverNum(12, 2, 34,56,7,8,90));

// =================================== modul 3 / 33
// function findMatches(arr1, ...arr2 ) {
//     const matches = []; // Don't change this line
//     for (const i of arr1) {
//         console.log(i);
//       for (const y of arr2) {
//         console.log(y);
//       if (i === y ) {
        
//         matches.push(y);
//       }
//     }
//     // Change code above this line
//     return matches;
//   }
// };

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));


// ========== ьщвгд 3 - 35

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//       // Change code below this line
  
//       const bookIndex = this.books.indexOf(oldName);
//       console.log(bookIndex);
//       this.books.splice(bookIndex, 1, newName) ;
  
//       // Change code above this line
//     }
//   };

//   console.log(bookShelf.updateBook("Haze", "Mosel"));


  // ==================== modul 5 - 41

  const atTheOldToad = {
    potions: [
      { name: "Speed potion", price: 460 },
      { name: "Dragon breath", price: 780 },
      { name: "Stone skin", price: 520 },
    ],
    // Change code below this line
    getPotions() {
      return this.potions;
    },

    addPotion(newPotion) {
        for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        return `ADD Error! Potion ${newPotion} is already in your inventory!`;
        
      }
      else this.potions.push(newPotion);
    
    }
    },

    removePotion(potionName) {
         let itemFound = false;
        for (let i = 0; i < this.potions.length; i += 1) {
            const item = this.potions[i];
           
            if (item.name === potionName) {
                itemFound = true;
                console.log("find product", potionName);
                this.potions.splice(i,1);
            }
<<<<<<< HEAD
        //    else {
            // return `REMOVE Error Potion ${potionName} is not in inventory!`;}
=======
        
>>>>>>> e21220c4c25158f67fa164e6421d439cf2d88be5
          }
        if (!itemFound) {
          return `REMOVE Error Potion ${potionName} is not in inventory!`;}
    },

    removePotion2(potionName) {
      let itemFound = false;
        for (const potion of this.potions) { 
            const indexOfPotion = this.potions.indexOf(potion);
          
            if (potion.name === potionName) {
                console.log("find product", potionName);
                this.potions.splice(indexOfPotion,1);
            }
<<<<<<< HEAD
        //    else  {
            // return `REMOVE Error Potion ${potionName} is not in inventory!`;}
          }
    }
},
=======
            if (!itemFound) {
              return `Potion ${potionName} is not in inventory!`;}
            }
          },

>>>>>>> e21220c4c25158f67fa164e6421d439cf2d88be5

    updatePotionName(oldName, newName) {
        for (let i = 0; i < this.potions.length; i += 1) {
           const item = this.potions[i];
       
           if (item.name === oldName) {
            this.potions.splice(i, 1, newName);
            
           }
           return `Potion ${oldName} is not in inventory!`;
        }
         },

    updatePotionName2 (oldName, newName) {
      // let potionFound = false;
      for (const potion of this.potions) { 
          
        if (potion.name === oldName) {
            potion.name = newName;
            // potionFound = true;
             }
            //  if (!potionFound) {
            //   return`Potion ${oldName} is not in inventory!`;}
           }
          },

    // Change code above this line
  };


//   newPotion1 = {
//     name:"Spice",
//     price: 780,
//   }
  // console.log(atTheOldToad.getPotions());
//   console.log(atTheOldToad.addPotion({
//     name:"Spice",
//     price: 780,
//   }));
// console.log(atTheOldToad.removePotion("Speed"));
// console.log(atTheOldToad.removePotion("Stone skin"));
  // console.log(atTheOldToad.removePotion2("Speed potion"));
// console.log(atTheOldToad.removePotion("Stone skin"));
<<<<<<< HEAD
  console.log(atTheOldToad.removePotion2("Speed potion"));
console.log(atTheOldToad.removePotion2("Stone skin"));
=======
>>>>>>> e21220c4c25158f67fa164e6421d439cf2d88be5
  console.log(atTheOldToad.getPotions());
  console.log(atTheOldToad.updatePotionName2("Stone skin", "Dragon"));
  console.log(atTheOldToad.getPotions());