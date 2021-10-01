/*
JavaScript Programming
Concatenation Exercise 3
Oscar Vazquez
*/

let div = "~~~~~~~~~~~~~"
let birthDate = new Date(1988,03,08);
console.log(birthDate);
console.log(div)
console.log("What is the date 1 billion seconds from my birthday and how old am I" +
            "or will be that year");
let seconds = 1000000000;
let days = (seconds/86400);
console.log(Math.round(days));
console.log(div)
let nextDate = birthDate.getDate() + days;
let newDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDay())
newDate.setDate(nextDate);
console.log(newDate);
let age=newDate.getFullYear()-birthDate.getFullYear();
console.log(`My age of year ${newDate.getFullYear()} was ${age}`);
console.log(div);



console.log("What is the date 1 billion milliseconds from my birthday and how old am I " +
            "or will be that year");
let miliseconds = 1000000000;
let days2 = (miliseconds/86400000);
console.log(Math.round(days2));
console.log(div)
let milinextDate = birthDate.getDate() + days2;
let milinewDate = new Date(birthDate.getFullYear(), birthDate.getMonth(), birthDate.getDay())
milinewDate.setDate(milinextDate);
console.log(milinewDate);
let age2=milinewDate.getFullYear()-birthDate.getFullYear();
console.log(`My age of year ${milinewDate.getFullYear()} was ${age2}`);
console.log(div);
