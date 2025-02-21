const name = "vinod kumar";
const repoCOunt = 50

// console.log (name + repoCOunt + ' ' + "value")

// console.log(`My name is ${name} and my repo count ${repoCOunt}`);

const gameName = new String('VinodKumar Vishswakarma')
// go to brasuer
// console.log(gameName);

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.toLocaleLowerCase());
// console.log(gameName);

// console.log(gameName.trimStart());
// console.log(gameName.trimEnd());

// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('V'));

// console.log(gameName.substring(0, 3));

const newSrting = gameName.substring(1, 4)

// console.log(newSrting);

const anotherString = gameName.slice(-4, 2)
// console.log(anotherString);



let newStrings = new String("Himanshu")

let anotherNewString = newStrings.slice(-6 , 8)
console.log(anotherNewString);

const url = "https://themeforest.net/item/forcast%20magazine%20wordpress%20theme"

console.log(url.replace('%20', '-'));
console.log(url.replaceAll('%20', '-'));
console.log(url.includes('item'));


