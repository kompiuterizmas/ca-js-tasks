console.group(
  "11. Sukurkite funkciją, kuri grąžina <true>, jeigu žodyje yra lyginis skaičius simbolių"
);
{
  function isEvenNumberOfLetters(str) {
    // code ...
    return str.length % 2 === 0;
  }
  console.log("---");
  console.log({
    labas: isEvenNumberOfLetters("labas"),
    kempės: isEvenNumberOfLetters("kempės"),
    123123: isEvenNumberOfLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("12. Sukurkite funkciją, kuri grąžina balsių kiekį žodyje");
{
  const checkVowels = (x) => {
    const y = x.toLowerCase();
    return (
      y === "a" ||
      y === "ą" ||
      y === "e" ||
      y === "ę" ||
      y === "ė" ||
      y === "i" ||
      y === "į" ||
      y === "y" ||
      y === "u" ||
      y === "ū" ||
      y === "ų" ||
      y === 'o'
    );
  };
  function getNumberOfVowels(str) {
    // code ...
    const allLettersArray = str.split("");
    const allVowels = allLettersArray.filter(checkVowels);
    return allVowels.length;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfVowels('aaaaa'),
    'sasasasa': getNumberOfVowels('sasasasa'),
    'aeyuioąčė': getNumberOfVowels('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group("13. Sukurkite funkciją, kuri grąžina priebalsių kiekį žodyje");
{
  const checkConsonants = (x) => {
    const y = x.toLowerCase();
    return (
      y === "b" ||
      y === "c" ||
      y === "č" ||
      y === "d" ||
      y === "f" ||
      y === 'g' ||
      y === 'h' ||
      y === "j" ||
      y === "k" ||
      y === "l" ||
      y === "m" ||
      y === "n" ||
      y === "p" ||
      y === 'r' ||
      y === 's' ||
      y === 'š' ||
      y === 't' ||
      y === 'v' ||
      y === 'z' ||
      y === 'ž'
    );
  };
  function getNumberOfConsonants(str) {
    // code ...
    const allLettersArray = str.split("");
    const allConsonants = allLettersArray.filter(checkConsonants);
    return allConsonants.length;
  }
  console.log('---');
  console.log({
    'aaaaa': getNumberOfConsonants('aaaaa'),
    'sasasasa': getNumberOfConsonants('sasasasa'),
    'aeyuioąčė': getNumberOfConsonants('aeyuioąčė'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "14. Sukurkite funkciją, kuri grąžina <true>, jeigu NĖRA skaičių"
);
{
  const checkDigits = (x) => {
    return (
      x == 1 ||
      x == 2 ||
      x == 3 ||
      x == 4 ||
      x == 5 ||
      x == 6 ||
      x == 7 ||
      x == 8 ||
      x == 9 ||
      x == 0
    );
  };
  function isOnlyLetters(str) {
    // ... code
    const allLettersArray = str.split("");
    const allDigits = allLettersArray.filter(checkDigits);
    return allDigits.length === 0;
  }

  console.log("---");
  console.log({
    labas: isOnlyLetters("labas"),
    kempės: isOnlyLetters("kempės"),
    123123: isOnlyLetters("123123"),
  });
  console.log("---");
}
console.groupEnd();
console.log();

console.group("15. Sukurkite funkciją, kuri grąžina 'a' raidžių kiekį žodyje");
{
  const countA = (x) => {
    const y = x.toLowerCase();
    return (
      y === "a" ||
      y === "ą"
    );
  };
  function letterACount(str) {
    // code ...
    const allLettersArray = str.split("");
    const allA = allLettersArray.filter(countA);
    return allA.length;
  }
  console.log('---');
  console.log({
    'labas': letterACount('labas'),
    'kempės': letterACount('kempės'),
    '123123': letterACount('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "16. Sukurkite funkciją, kuri grąžina bet kokios raidės kiekį žodyje"
);
{
  function letterCount(str, searchLetter) {
    // code ...
    const allLettersArray = str.split("");
    const specificLetterCount = allLettersArray.filter((x)=>x.includes(searchLetter));
    return specificLetterCount.length;
  }
  console.log('---');
  console.log({
    'labas, a': letterCount('labas', 'a'),
    'kempės, k': letterCount('kempės', 'k'),
    '123123, z': letterCount('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "17. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) 'a' raidės vietą žodyje"
);
{
  function lastIndexOfLetterA(str) {
    // code ...
    const allLettersArray = str.split("");
    const findFirstLetterA = allLettersArray.indexOf('a');
    if(findFirstLetterA < 0){return "no such letter in text"}
    return findFirstLetterA;
  }
  console.log('---');
  console.log({
    'labas': lastIndexOfLetterA('labas'),
    'kempės': lastIndexOfLetterA('kempės'),
    '123123': lastIndexOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "18. Sukurkite funkciją, kuri grąžina pirmos (nuo kairės pusės) vartotojo perduotos raidės vietą žodyje"
);
{
  function lastIndexOfLetter(str, searchLetter) {
    // code ...
    const allLettersArray = str.split("");
    const findFirstLetterX = allLettersArray.indexOf(searchLetter);
    if(findFirstLetterX < 0){return "no such letter in text"}
    return findFirstLetterX;
  }
  console.log('---');
  console.log({
    'labas, a': lastIndexOfLetter('labas', 'a'),
    'kempės, k': lastIndexOfLetter('kempės', 'k'),
    '123123, z': lastIndexOfLetter('123123', 'z'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "19. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais 'a' raidės pasikartojimais žodyje"
);
{
  function indexesOfLetterA(str) {
    // code ...
    const allLettersArray = str.split("");
    let arrayOfAIndexes = [];
    for(i = 0; i<=allLettersArray.length; i+=1){
      if(allLettersArray[i]==='a'||allLettersArray[i]==='A'||allLettersArray[i]==='ą'||allLettersArray[i]==='Ą'){
        arrayOfAIndexes.push(i);
      }
    }
    return arrayOfAIndexes;
  }
  console.log('---');
  console.log({
    'labas': indexesOfLetterA('labas'),
    'kempės': indexesOfLetterA('kempės'),
    '123123': indexesOfLetterA('123123'),
  })
  console.log('---');
}
console.groupEnd();
console.log();

console.group(
  "20. Sukurkite funkciją, kuri grąžina indeksų masyvą su visais vartotojo įvestos raidės pasikartojimais žodyje"
);
{
  function indexesOfLetter(str, searchLetter) {
    // code ...
    const allLettersArray = str.split("");
    let arrayOfProvidedLetterIndexes = [];
    for(i = 0; i<=allLettersArray.length; i+=1){
      if(allLettersArray[i]===searchLetter){
        arrayOfProvidedLetterIndexes.push(i);
      }
    }
    return arrayOfProvidedLetterIndexes;
  }
  console.log('---');
  console.log({
    'labas, a': indexesOfLetter('labas', 'a'),
    'kempės, m': indexesOfLetter('kempės', 'm'),
    '123123, 2': indexesOfLetter('123123', '2'),
  })
  console.log('---');
}
console.groupEnd();
