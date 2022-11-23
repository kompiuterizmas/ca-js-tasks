// ----------------------Užduotys--------------------------
const numbers3 = [
  1, 2, -2, 6, -5, 9, 1.02, 45, -69, 77, -12, 2, 8, -2, -4, 59, 7, -3,
];

console.group("1. Padauginti masyvo narius iš 2 ir išsaugoti naujame masyve");
console.log("---");
{
  // ... code
  function mulArrBy2(el) {
    return el + el;
  }
  let newNumbers = numbers3.map(mulArrBy2);
  console.log({
    numbers3,
    result: newNumbers,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("2. Pakelti masyvo narius kvadratu ir išsaugoti naujame masyve");
console.log("---");
{
  // ... code
  function powerArrBy2(el) {
    return el * el;
  }
  let newNumbers = numbers3.map(powerArrBy2);
  console.log({
    numbers3,
    result: newNumbers,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group(
  "3. Padauginti masyvo narius iš jų index'o (vietos masyve) ir išsaugoti naujame masyve"
);
console.log("---");
{
  // ... code
  function mulArrElementsByIndex(el, index) {
    return el * index;
  }
  let newNumbers = numbers3.map(mulArrElementsByIndex);
  console.log({
    numbers3,
    result: newNumbers,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("4. Atrinkti tiktai teigimų elementų masyvą");
console.log("---");
{
  function filterPositives(arr) {
    // Jūsų kodas
    return arr.filter((e) => e > 0);
  }
  console.log({
    numbers3,
    result: filterPositives(numbers3),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("5. Atrinkti tiktai neigiamų elementų masyvą");
console.log("---");
{
  function filterNegatives(arr) {
    // Jūsų kodas
    return arr.filter((e) => e < 0);
  }
  console.log({
    numbers3,
    result: filterNegatives(numbers3),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("6. Atrinkti tiktai lyginių skaičių masyvą");
console.log("---");
{
  function filterEquals(arr) {
    // Jūsų kodas
    return arr.filter((e) => e % 2 === 0);
  }
  console.log({
    numbers3,
    result: filterEquals(numbers3),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("7. Atrinkti tiktai nelyginių skaičių masyvą");
console.log("---");
{
  function filterOdds(arr) {
    // Jūsų kodas
    return arr.filter((e) => e % 2 === 1 || e % 2 === -1);
  }
  console.log({
    numbers3,
    result: filterOdds(numbers3),
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group(
  "8. Visas neigiamas vertes masyve padaryti teigiamomis ir išsaugoti į naują masyvą"
);
console.log("---");
{
  function arrAbsoluteValues(number) {
    // ... code
    return Math.abs(number);
  }
  const newNumbers = numbers3.map(arrAbsoluteValues);
  console.log({
    numbers3,
    result: newNumbers,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group(
  "9. Pakelti visas masyvo reikšmes laipsniu 'index' ir išsaugoti naujame masyve"
);
console.log("---");
{
  function powArrElementsByIndex(number, i) {
    // Jūsų kodas
    return number ** i;
  }
  const numbersPoweredByIndex = numbers3.map(powArrElementsByIndex);
  console.log({
    numbers3,
    result: numbersPoweredByIndex,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group("10. Atrinkti tik natūralių skaičių masyvą");
console.log("---");
{
  function filterNaturals(number) {
    // Jūsų kodas
    return number % 1 === 0 && number > 0;
  }
  const naturalNumbers = numbers3.filter(filterNaturals);
  console.log({
    numbers3,
    result: naturalNumbers,
  });
}
console.log("---");
console.groupEnd();
console.log();

console.group(
  "11. Suapvalinti visas masyvo reikšmes iki sveikų skaičių ir išsaugoti naujame masyve"
);
console.log("---");
{
  function absArrElements(number) {
    // Jūsų kodas
    return Math.round(number);

    // remainder = number%1;
    // wholeNumber = number - remainder;
    // if(remainder === 0){
    //   return number;
    // }else if(remainder <= 0.5 && remainder >= -0.5){
    //   return wholeNumber;
    // }else if(remainder > 0.5){
    //   return wholeNumber + 1;
    // }else{
    //   return wholeNumber - 1;
    // }
  }
  const wholeNumbers = numbers3.map(absArrElements);
  console.log({
    numbers3,
    result: wholeNumbers,
  });
}
console.log("---");
console.groupEnd();

console.group("12. Atrinkti kas antrą elementą");
console.log("---");
{
  function filterEverySecond(arr) {
    //  Jūsų kodas
    // regular iteration is the best approach
    let result = [];
    for (i = 1; i < arr.length; i += 2) {
      result.push(arr[i]);
    }
    return result;
  }
  console.log({
    numbers3,
    result: filterEverySecond(numbers3),
  });
}
console.log("---");
console.groupEnd();

console.group("13. Atrinkti kas penktą elementą");
console.log("---");
{
  function filterEveryFifth(arr) {
    //  Jūsų kodas
    // regular iteration is the best approach
    let result = [];
    for (i = 4; i < arr.length; i += 5) {
      result.push(arr[i]);
    }
    return result;
  }
  console.log({
    numbers3,
    result: filterEveryFifth(numbers3),
  });
}
console.log("---");
console.groupEnd();

console.group(
  "14. Sukurti funkciją, kuri ima masyvą ir atspausdina kiekvieną jo reikšmę atskirai: [0] => 64. (nieko negrąžina)"
);
console.log("---");
{
  function printArr(number, index) {
    // ... code
    console.log(`[${index}] => ${number}`);
  }
  numbers3.forEach(printArr);
}
console.log("---");
console.groupEnd();

console.group(
  "15. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų sumą"
);
console.log("---");
{
  // Jūsų kodas
  const sumOfNumbers = numbers3.reduce((sum, el) => sum + el);
  console.log({
    numbers3,
    result: sumOfNumbers,
  });
}
console.log("---");
console.groupEnd();

console.group(
  "16. Sukurti funkciją, kuri ima masyvą ir grąžina visų elementų vidurkį"
);
console.log("---");
{
  // Jūsų kodas
  const avgNumber = numbers3.reduce((sum, el) => sum + el / numbers3.length);
  console.log({
    numbers3,
    result: avgNumber,
  });
}
console.log("---");
console.groupEnd();

console.group(
  "17. Sukurti funkciją, kuri ima masyvą ir grąžina didžiausią skaičių masyve."
);
console.log("---");
{
  function arrMax(arr) {
    //  Jūsų kodas
    return Math.max(...arr);
  }
  console.log({
    numbers3,
    result: arrMax(numbers3)
  });
}
console.log("---");
console.groupEnd();

console.group(
  "18. Sukurti funkciją, kuri ima masyvą ir grąžina mažiausią skaičių masyve."
);
console.log("---");
{
  function arrMin(arr) {
    //  Jūsų kodas
    return Math.min(...arr);
  }

  console.log({
    numbers3,
    result: arrMin(numbers3)
  });
}
console.log("---");
console.groupEnd();
