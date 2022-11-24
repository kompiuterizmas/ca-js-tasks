const people = [
    {
      name: 'Jonas',
      surname: 'Jonaitis',
      sex: 'male',
      age: 26,
      income: 1200,
      married: false,
      hasCar: false
    },
    {
      name: 'Severija',
      surname: 'Piktutytė',
      sex: 'female',
      age: 26,
      income: 1300,
      married: false,
      hasCar: true
    },
    {
      name: 'Valdas',
      surname: 'Vilktorinas',
      sex: 'male',
      age: 16,
      income: 0,
      married: false,
      hasCar: false
    },
    {
      name: 'Virginijus',
      surname: 'Uostauskas',
      sex: 'male',
      age: 32,
      income: 2400,
      married: true,
      hasCar: true
    },
    {
      name: 'Samanta',
      surname: 'Uostauskienė',
      sex: 'female',
      age: 28,
      income: 1200,
      married: true,
      hasCar: true
    },
    {
      name: 'Janina',
      surname: 'Stalautinskienė',
      sex: 'female',
      age: 72,
      income: 364,
      married: false,
      hasCar: false
    }
  ];
  const numbers = [1, 15, 9, -9, -8, -7, 2, 8, 51, 6, 5];
  
  console.group('1. Atrinkti neigiamus skaičius');
  {
  function negativeNumberCheck(number){
    return number < 0;
  }
  const negativeNumbers = numbers.filter(negativeNumberCheck);
  console.table(negativeNumbers);
  }
  console.groupEnd();
  
  console.group('2. Atrinkti nelyginius skaičius');
  {
    function oddNumberCheck(number){
        return number%2 === 1 || number%2 === -1;
      }
      const oddNumbers = numbers.filter(oddNumberCheck);
      console.table(oddNumbers);
  }
  console.groupEnd();
  
  console.group('3. Atrinkti žmones kurių vardas ilgesnis nei 6 raidės');
  {
  function longNamesCheck(person){
    return person.name.length > 6;
  }
  const longNames = people.filter(longNamesCheck);
  console.table(longNames);
  }
  console.groupEnd();
  
  console.group('4. Atrinkti žmones kurie turi mašiną');
  {
    function carCheck(person){
        return person.hasCar === true;
      }
      const peopleWithCar = people.filter(carCheck);
      console.table(peopleWithCar);
  }
  console.groupEnd();
  