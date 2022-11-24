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
console.groupCollapsed("1. Atspausdinkite visus žmones eilutėmis");
{
  // ...sprendimas ir spausdinimas
  function printLine(person) {
    console.log(
      `${person.name} ${person.surname} - ${person.sex}, ${person.age}, ${person.income}, ${person.married}, ${person.hasCar}`
    );
  }
  people.forEach(printLine);
}
console.groupEnd();

console.groupCollapsed(
  "2. Atpausdinkite visus žmonių vardus ir pavardes, atskirtus brūkšneliu"
);
{
  // ...sprendimas ir spausdinimas
  let allPersons = "";
  function printPersons(person, index, arr) {
    allPersons = allPersons + `${person.name} ${person.surname}`;
    if (index < arr.length - 1) {
      allPersons = allPersons + " - ";
    }
  }
  people.forEach(printPersons);
  console.log(allPersons);
}
console.groupEnd();

console.groupCollapsed(
  "3. Atspausdinkite visų žmonių vardus ir pavardes bei santuokos statusą"
);
{
  // ...sprendimas ir spausdinimas
  function printPersonMaritalStatus(person) {
    let married = "not married";
    if (person.married) {
      married = "married";
    }
    console.log(`${person.name} ${person.surname} - ${married}`);
  }
  people.forEach(printPersonMaritalStatus);
}
console.groupEnd();

console.groupCollapsed(
  "4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą"
);
{
  // ...sprendimas ir spausdinimas
  function sexAndIncome(obj) {
    return {
      sex: obj.sex,
      income: obj.income,
    };
  }

  const sexAndIncomeArray = people.map(sexAndIncome);
  console.table(sexAndIncomeArray);
}
console.groupEnd();

console.groupCollapsed(
  "5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą"
);
{
  // ...sprendimas ir spausdinimas
  function nameSurnameAndSex(obj) {
    return {
      name: obj.name,
      surname: obj.surname,
      sex: obj.sex,
    };
  }

  const nameSurnameAndSexArray = people.map(nameSurnameAndSex);
  console.table(nameSurnameAndSexArray);
}
console.groupEnd();

console.groupCollapsed("6. Atspausdinkite visus vyrus");
{
  // ...sprendimas ir spausdinimas
  function filterMales(obj) {
    return obj.sex === "male";
  }
  const males = people.filter(filterMales);
  console.table(males);
}
console.groupEnd();

console.groupCollapsed("7. Atspausdinkite visas moteris");
{
  // ...sprendimas ir spausdinimas
  function filterFemales(obj) {
    return obj.sex === "female";
  }
  const females = people.filter(filterFemales);
  console.table(females);
}
console.groupEnd();

console.groupCollapsed(
  "8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas"
);
{
  // ...sprendimas ir spausdinimas
  function filterWithCar(obj) {
    return obj.hasCar;
  }
  const withCar = people.filter(filterWithCar);
  function printNameAndSurname(obj){
    console.log(`${obj.name} ${obj.surname}`)
  }
  withCar.forEach(printNameAndSurname);
}
console.groupEnd();

console.groupCollapsed("9. Atspausdinkite žmones kurie yra susituokę");
{
  // ...sprendimas ir spausdinimas
  function filterMarried(obj) {
    return obj.married;
  }
  const marriedPersons = people.filter(filterMarried);
  console.table(marriedPersons);
}
console.groupEnd();

console.groupCollapsed(
  "10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį"
);
{
  // ...sprendimas ir spausdinimas
  let drivingPeople = {
    drivingMales: 0,
    drivingFemales: 0,
  };
  function malesAndFemalesWithCar(obj) {
    if (obj.hasCar && obj.sex === "male") {
      drivingPeople.drivingMales += 1;
    }
    if (obj.hasCar && obj.sex === "female") {
      drivingPeople.drivingFemales += 1;
    }
  }
  people.forEach(malesAndFemalesWithCar);
  console.table(drivingPeople);
}
console.groupEnd();

console.groupCollapsed(
  '11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"'
);
{
  // ...sprendimas ir spausdinimas
  function transformIncomeToSalary({income, ...props}) {
    return {
      salary: income,
      ...props,
    };
  }
  const transformedToSalary = people.map(transformIncomeToSalary);
  console.table(transformedToSalary);
}
console.groupEnd();

console.groupCollapsed(
  "12. Suformuokite žmonių masyvą iš objektų, kuriuose nebūtų lyties, vardo ir pavardės"
);
{
  // ...sprendimas ir spausdinimas
  function peopleDataLimited({age, income, married, hasCar}){
    return {
      age,
      income,
      married,
      hasCar
    }
  }
  const peopleDataLimitedArray = people.map(peopleDataLimited);
  console.table(peopleDataLimitedArray);
}
console.groupEnd();

console.groupCollapsed(
  '13. Suformuokite žmonių masyvą  iš objektų, kuriuose "name" ir "surname" savybės, būtų pakeistos "fullname" savybe'
);
{
  // ...sprendimas ir spausdinimas
  function transformToFullName({name, surname, ...props}) {
    return {
      fullname: `${name} ${surname}`,
      ...props,
    };
  }
  const transformedToFullName = people.map(transformToFullName);
  console.table(transformedToFullName)
}
console.groupEnd();
