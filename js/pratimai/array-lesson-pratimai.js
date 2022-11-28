const numbersData = [2, 4, -7, 2, 5, 6, 1, 2, 8, 4, -9, 2, 2, 4, 5, 1, 2];
//                   0  1   2  3  4  5  6  7  8  9  10 11 12 13 14 15 16

// !!! Visas funkcijas atlikite kopijuodami orginalų masyvą, tam kad nepažeisti duomenų !!!
// !!! įterpadmi duomenis, atkreipkite dėmesį, jog keičiasi masyvo elementų ideksacija !!!

console.group("1. suraskite dvejetą ir po jo įterpkite 777");
{
  const numbers2 = [...numbersData];

  numbers2.splice(numbers2.indexOf(2) + 1, 0, 777);

  console.log(numbers2);
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group("2. suraskite antrą dvejetą ir prieš jį įterpkite 777");
{
  const numbers = numbersData.slice();

  numbers.splice(numbers.indexOf(2, numbers.indexOf(2) + 1), 0, 777);

  console.log(numbers);
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group("3. suraskite paskutinį dvejetą ir po jo įterpkite 777");
{
  const numbers = numbersData.slice();

  numbers.splice(numbers.lastIndexOf(2) + 1, 0, 777);

  console.log(numbers);
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group("4. suraskite prieš paskutinį dvejetą ir prieš jį įterpkite 777");
{
  const numbers = numbersData.slice();

  numbers.splice(numbers.lastIndexOf(2, numbers.lastIndexOf(2) - 1), 0, 777);

  console.log(numbers);
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group("5. Sukurkite funkciją, kuri po kiekvieno dvejeto įdėtų 777");
{
  const numbers = numbersData.slice();

  const indexOfRequestedValue = (value, previousIndex, array) =>
    array.lastIndexOf(value, previousIndex);

  let iterator = numbers.length;
  while (iterator > 0) {
    let index = indexOfRequestedValue(2, iterator - 1, numbers);
    if (index < 0) {
      break;
    }
    numbers.splice(index + 1, 0, 777);
    iterator = index;
  }
  console.log(numbers);
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group("6. Sukurkite funkciją, kuri prieš kiekvieną dvejetą įdėtų 777");
{
  const numbers = numbersData.slice();
  const indexOfRequestedValue = (value, previousIndex, array) =>
    array.lastIndexOf(value, previousIndex);

  let iterator = numbers.length;
  while (iterator > 0) {
    let index = indexOfRequestedValue(2, iterator - 1, numbers);
    if (index < 0) {
      break;
    }
    numbers.splice(index, 0, 777);
    iterator = index;
  }
  console.log(numbers);
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group(
  "7. Sukurkite funkciją, kuri po kiekvieno nurodyto elemento įdėtų 777"
);
{
  const numbers = numbersData.slice();

  const indexOfRequestedValue = (value, previousIndex, array) =>
    array.lastIndexOf(value, previousIndex);

  const insert777AfterX = (x) => {
    let iterator = numbers.length;
    while (iterator > 0) {
      let index = indexOfRequestedValue(x, iterator - 1, numbers);
      if (index < 0) {
        break;
      }
      numbers.splice(index + 1, 0, 777);
      iterator = index;
    }
    return numbers;
  };

  console.log(insert777AfterX(4));
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group(
  "8. Sukurkite funkciją, kuri prieš kiekvieną nurodytą elementą įdėtų 777"
);
{
  const numbers = numbersData.slice();

  const indexOfRequestedValue = (value, previousIndex, array) =>
    array.lastIndexOf(value, previousIndex);

  const insert777BeforeX = (x) => {
    let iterator = numbers.length;
    while (iterator > 0) {
      let index = indexOfRequestedValue(x, iterator - 1, numbers);
      if (index < 0) {
        break;
      }
      numbers.splice(index, 0, 777);
      iterator = index;
    }
    return numbers;
  };

  console.log(insert777BeforeX(4));
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group(
  "9. Sukurkite funkciją, kuri po kiekvieno nurodyto elemento įdėtų naują nurodytą elementą"
);
{
  const numbers = numbersData.slice();

  const indexOfRequestedValue = (value, previousIndex, array) =>
    array.lastIndexOf(value, previousIndex);

  const insertYAfterX = (x, y) => {
    let iterator = numbers.length;
    while (iterator > 0) {
      let index = indexOfRequestedValue(x, iterator - 1, numbers);
      if (index < 0) {
        break;
      }
      numbers.splice(index + 1, 0, y);
      iterator = index;
    }
    return numbers;
  };

  console.log(insertYAfterX(4, 999));
  // function
  // while
  // Array.prototype.lastIndexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group(
  "10. Sukurkite funkciją, kuri prieš kiekvieną nurodytą elementą įdėtų naują nurodytą elementą"
);
{
  const numbers = numbersData.slice();

  const indexOfRequestedValue = (value, previousIndex, array) =>
    array.lastIndexOf(value, previousIndex);

  const insertYBeforeX = (x, y) => {
    let iterator = numbers.length;
    while (iterator > 0) {
      let index = indexOfRequestedValue(x, iterator - 1, numbers);
      if (index < 0) {
        break;
      }
      numbers.splice(index, 0, y);
      iterator = index;
    }
    return numbers;
  };

  console.log(insertYBeforeX(4, 999));
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();

console.group(
  "11. Sukurkite funkciją, kuri pasirinktinai prieš arba po kiekvieno nurodyto elemento įdėtų naują nurodytą elementą"
);
{
  const numbers = numbersData.slice();

  const indexOfRequestedValue = (value, previousIndex, array) =>
    array.lastIndexOf(value, previousIndex);

  const insertYBeforeOrAfterX = (x, y, placement) => {
    let iterator = numbers.length;
    while (iterator > 0) {
      let index = indexOfRequestedValue(x, iterator - 1, numbers);
      if (index < 0) {
        break;
      }
      if (placement === "<") {
        numbers.splice(index, 0, y);
      } else if (placement === ">") {
        numbers.splice(index + 1, 0, y);
      } else {
        return "wrong third parameter";
      }
      iterator = index;
    }
    return numbers;
  };

  console.log(insertYBeforeOrAfterX(2, 888, "<"));
  // function
  // while
  // Array.prototype.indexOf
  // Array.prototype.splice
}
console.groupEnd();
