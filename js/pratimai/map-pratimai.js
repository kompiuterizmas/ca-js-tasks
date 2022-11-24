const people = [
  {
    name: "Jonas",
    surname: "Jonaitis",
    sex: "male",
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: "Severija",
    surname: "Piktutytė",
    sex: "female",
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: "Valdas",
    surname: "Vilktorinas",
    sex: "male",
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: "Virginijus",
    surname: "Uostauskas",
    sex: "male",
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: "Samanta",
    surname: "Uostauskienė",
    sex: "female",
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: "Janina",
    surname: "Stalautinskienė",
    sex: "female",
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];

console.group(
  "1. Sukurkite funkciją kuri performuotų asmens objektą į vardo ir pavardės string`ą. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją."
);
// jūsų kodas ir rezultato pateikimas
function nameSurnameToString(obj) {
  return obj.name + " " + obj.surname;
}
let stringifiedArray = people.map(nameSurnameToString);
console.table(stringifiedArray);
console.groupEnd();
console.log("---");

console.group(
  "2. Sukurkite funkciją kuri performuotų asmens objektą į amžių. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją."
);
// jūsų kodas ir rezultato pateikimas
function returnAge(obj){
    return obj.age;
}
let extractedAge = people.map(returnAge);
console.table(extractedAge);
console.groupEnd();
console.log("---");

console.group(
  "3. Sukurkite funkciją kuri padalintų skaičių iš 4. Panaudokite Array.prototype.map, kad sukurti naują masyvą panaudojant šią funkciją."
);
// jūsų kodas ir rezultato pateikimas
function divideByFour(number){
    return number / 4;
}
let numbersDivideByFour = numbers.map(divideByFour);
console.table(numbersDivideByFour);
console.groupEnd();
console.log("---");