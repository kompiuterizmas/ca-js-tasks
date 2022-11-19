console.groupCollapsed("1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7");
{
  // funkcijos deklaracija
  function sortDrinkByPrice(drinks) {
    drinksSorted = drinks.slice(0);
    return drinksSorted.sort((a, b) => a.price - b.price);
  }
  // bandomieji kintamieji
  const drinks1 = [
    { name: "lemonade", price: 90 },
    { name: "lime", price: 432 },
    { name: "peach", price: 23 },
  ];
  const drinks2 = [
    { name: "water", price: 120 },
    { name: "lime", price: 80 },
    { name: "peach", price: 90 },
  ];
  // funkcijos iškvietimai ir saugojimai į rezultatus
  const drinks1sorted = sortDrinkByPrice(drinks1);
  const drinks2sorted = sortDrinkByPrice(drinks2);
  // rezultatų spausdinimas
  console.log("sorted drinks1", drinks1sorted);
  console.log("sorted drinks2", drinks2sorted);
}
console.groupEnd();

console.groupCollapsed("2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau");
{
  // funkcijos deklaracija
  function addName(obj, name, value) {
    obj[name] = value;
    return obj;
  }
  // bandomieji kintamieji
  let sampleObj = {};
  const sampleName1 = "Brutus";
  const sampleName2 = "piano";
  const sampleName3 = "stereo";
  const sampleName4 = "Caligula";
  const sampleValue1 = 300;
  const sampleValue2 = 400;
  const sampleValue3 = 500;
  const sampleValue4 = 550;
  // funkcijos iškvietimai ir saugojimai į rezultatus
  sampleObj = addName(sampleObj, sampleName1, sampleValue1);
  console.log(sampleObj);
  sampleObj = addName(sampleObj, sampleName2, sampleValue2);
  console.log(sampleObj);
  sampleObj = addName(sampleObj, sampleName3, sampleValue3);
  console.log(sampleObj);
  sampleObj = addName(sampleObj, sampleName4, sampleValue4);
  console.log(sampleObj);
  // rezultatų spausdinimas
}
console.groupEnd();

console.groupCollapsed("3 - https://edabit.com/challenge/48EJWLhF224na8po3");
{
  // funkcijos deklaracija
  function generation(x, y) {
    const males = {
      "-3": "great grandfather",
      "-2": "grandfather",
      "-1": "father",
      0: "me!",
      1: "son",
      2: "grandson",
      3: "grand grandson",
    };
    const females = {
      "-3": "great grandmother",
      "-2": "grandmother",
      "-1": "mother",
      0: "me!",
      1: "daughter",
      2: "granddaughter",
      3: "great granddaughter",
    };
    switch (y) {
      case "f":
        return females[x];
        break;
      case "m":
        return males[x];
        break;
    }
  }
  // bandomieji kintamieji
  // funkcijos iškvietimai ir saugojimai į rezultatus
  const sampleReaquest1 = generation(2, "f");
  const sampleReaquest2 = generation(-3, "m");
  const sampleReaquest3 = generation(1, "f");
  // rezultatų spausdinimas
  console.log(sampleReaquest1);
  console.log(sampleReaquest2);
  console.log(sampleReaquest3);
}
console.groupEnd();

console.groupCollapsed("4 - https://edabit.com/challenge/i6YqzHcSiPiEQKjeX");
{
  // funkcijos deklaracija
  function maximumScore(tileHand) {
    let result = 0;
    for (let i = 0; i < tileHand.length; i += 1) {
      result += tileHand[i]["score"];
    }
    return result;
  }

  // bandomieji kintamieji
  const testArr1 = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 },
  ];
  const testArr2 = [
    { tile: "B", score: 2 },
    { tile: "V", score: 4 },
    { tile: "F", score: 4 },
    { tile: "U", score: 1 },
    { tile: "D", score: 2 },
    { tile: "O", score: 1 },
    { tile: "U", score: 1 },
  ];
  // funkcijos iškvietimai ir saugojimai į rezultatus
  const testResult1 = maximumScore(testArr1);
  const testResult2 = maximumScore(testArr2);
  // rezultatų spausdinimas
  console.log(testResult1);
  console.log(testResult2);
}
console.groupEnd();

console.groupCollapsed("5 - https://edabit.com/challenge/8s2jy9hR2TAeQinKD");
{
  // funkcijos deklaracija
  function calculateDifference(obj, limit) {
    let result = 0;
    for (const [key, value] of Object.entries(obj)) {
      result += value;
    }
    return result - limit;
  }
  // bandomieji kintamieji
  const sampleObject1 = { "baseball bat": 20 };
  const sampleLimit1 = 15;
  const sampleObject2 = { scate: 10, painting: 20 };
  const sampleLimit2 = 19;
  const sampleObject3 = { scate: 200, painting: 200, shoes: 1 };
  const sampleLimit3 = 400;
  // funkcijos iškvietimai ir saugojimai į rezultatus
  const sampleResult1 = calculateDifference(sampleObject1, sampleLimit1);
  const sampleResult2 = calculateDifference(sampleObject2, sampleLimit2);
  const sampleResult3 = calculateDifference(sampleObject3, sampleLimit3);
  // rezultatų spausdinimas
  console.log(sampleResult1);
  console.log(sampleResult2);
  console.log(sampleResult3);
}
console.groupEnd();

console.groupCollapsed("6 - https://edabit.com/challenge/pPNAs5PvB3WvnDwDM");
{
  // funkcijos deklaracija
  function toArray(obj) {
    let result = [];
    for (const [key, value] of Object.entries(obj)) {
      const innerArray = new Array(key, value);
      result.push(innerArray);
    }
    return result;
  }
  // bandomieji kintamieji
  const testObj1 = { a: 1, b: 2 };
  const testObj2 = { shrimp: 15, tots: 12 };
  const testObj3 = {};
  // funkcijos iškvietimai ir saugojimai į rezultatus
  const testResult1 = toArray(testObj1);
  const testResult2 = toArray(testObj2);
  const testResult3 = toArray(testObj3);
  // rezultatų spausdinimas
  console.log(testResult1);
  console.log(testResult2);
  console.log(testResult3);
}
console.groupEnd();

console.groupCollapsed("7 - https://edabit.com/challenge/QXWM2oo7rQNiyDsip");
{
  // funkcijos deklaracija
  function inkLevels(inks) {
    let result = Object.values(inks)[0];
    for (let i = 0; i < Object.keys(inks).length; i += 1) {
      const currentValue = Object.values(inks)[i];
      if (currentValue < result) {
        result = currentValue;
      }
    }
    return result;
  }
  // bandomieji kintamieji
  const deviceInkLevels1 = { cyan: 23, magenta: 12, yellow: 10 };
  const deviceInkLevels2 = { cyan: 432, magenta: 543, yellow: 777 };
  const deviceInkLevels3 = { cyan: 700, magenta: 700, yellow: 0 };
  // funkcijos iškvietimai ir saugojimai į rezultatus
  const lowestInkLevel1 = inkLevels(deviceInkLevels1);
  const lowestInkLevel2 = inkLevels(deviceInkLevels2);
  const lowestInkLevel3 = inkLevels(deviceInkLevels3);
  // rezultatų spausdinimas
  console.log(lowestInkLevel1);
  console.log(lowestInkLevel2);
  console.log(lowestInkLevel3);
}
console.groupEnd();

console.groupCollapsed("8 - https://edabit.com/challenge/pLNavsePxJ87t9Nak");
{
  // funkcijos deklaracija
  function calculateLosses(obj) {
    let result = 0;
    for (let i = 0; i < Object.keys(obj).length; i += 1) {
      const currentValue = Object.values(obj)[i];
      result += currentValue;
      console.log("inner",result);
    }
    if (result > 0) {
      return result;
    } else {
      return "Lucky you!";
    }
  }
  // bandomieji kintamieji
  const stolenItems1 = { tv: 30, skate: 20, stereo: 50 };
  const stolenItems2 = { painting: 20000 };
  const stolenItems3 = {};
  // funkcijos iškvietimai ir saugojimai į rezultatus
  const losses1 = calculateLosses(stolenItems1);
  const losses2 = calculateLosses(stolenItems2);
  const losses3 = calculateLosses(stolenItems3);
  // rezultatų spausdinimas
  console.log(losses1);
  console.log(losses2);
  console.log(losses3);
}
console.groupEnd();
