// ------------------------------------ 1 Dalis ------------------------------------
console.group(`1. Sukurti objektų(žmonių) masyvą su 8 elementais, kuriame būtų:
  - name
  - surname
  - age
  - height
  - weight
  - sex
`);

class Person {
  name;
  surname;
  age;
  height;
  weight;
  sex;
  constructor(name, surname, age, height, weight, sex) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.height = height;
    this.weight = weight;
    this.sex = sex;
  }
  get fullname() {
    return `${this.name} ${this.surname}`;
  }
  get bmi() {
    return (this.weight / ((this.height / 100) * (this.height / 100))).toFixed(
      1
    );
  }
  get toString() {
    return `${this.fullname}: height - ${this.height}; weight - ${this.weight}; age - ${this.age}; BMI - ${this.bmi}`;
  }
}

const persons = [
  new Person("name1", "lastname1", 20, 160, 70, "male"),
  new Person("name2fgb", "lastname2", 25, 170, 100, "male"),
  new Person("name3fr", "lastname3", 30, 190, 80, "male"),
  new Person("name4f", "lastname4", 15, 150, 80, "female"),
  new Person("name5drgb", "lastname5", 40, 165, 90, "female"),
  new Person("name6c", "lastname6", 45, 175, 55, "male"),
  new Person("name7cser", "lastname7", 50, 195, 85, "male"),
  new Person("name8frf", "lastname8", 65, 155, 80, "female"),
];

console.groupEnd();

console.group(`
2. Panaudojant array.forEach:
  - Atspausdinti kiekvieną elementą
  - Atspausdinti kiekvieno elemento pilną vardą
  - Atspausdinti kiekvieno elemento kūno masės indeksą
`);
persons.forEach((person) => console.log(person));
persons.forEach((person) => console.log(person.fullname));
persons.forEach((person) => console.log(person.bmi));

console.groupEnd();

console.group(`
3. Panaudojant array.filter atrinkti į naują masyvą ir po to atspausdinti žmones:
  - kurių vardas ilgesnis nei 6 simboliai
  - kurių svoris didesnis nei 80kg
  - kurie aukštesni nei 185cm
  `);

const shortNamePersons = persons.filter((x) => x.name.length > 6);
const heavyPersons = persons.filter((x) => x.weight > 80);
const tallPersons = persons.filter((x) => x.height > 185);

console.log("shortNamePersons:");
console.table(shortNamePersons);
console.log("heavyPersons:");
console.table(heavyPersons);
console.log("tallPersons:");
console.table(tallPersons);

console.groupEnd();

console.group(`
  4. Panaudojant array.map atrinkti į naują masyvą ir po to atspausdinti
  - ūgius
  - svorius
  - ūgius, svorius ir amžius : [{height, weight, age}, ...]
  - KMI indeksus
  - KMI indeksus ir amžius
  `);

class MappedPerson {
  fullname;
  height;
  weight;
  data;
  BMI;
  constructor(fullname, height, weight, age, data, BMI) {
    this.fullname = fullname;
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.data = data;
    this.BMI = BMI;
  }
}

const mappedPersons = persons.map(
  (x) =>
    new MappedPerson(
      x.fullname,
      x.height,
      x.weight,
      x.age,
      `${x.height}, ${x.weight}, ${x.age}`,
      x.bmi
    )
);
mappedPersons.forEach((x) => console.log(x.height));
mappedPersons.forEach((x) => console.log(x.weight));
mappedPersons.forEach((x) => console.log(x.data));
mappedPersons.forEach((x) => console.log(x.BMI));
mappedPersons.forEach((x) => console.log(`${x.BMI}, ${x.age}`));

console.groupEnd();

console.group(`
  5. Panaudojant array.reduce suskaičiuoti ir po to atspausdinti
  - svorių vidurkį
  - ūgio vidurkį
  `);
const avgWeight =
  persons.reduce((acc, person) => acc + person.weight, 0) / persons.length;
const avgHeight =
  persons.reduce((acc, person) => acc + person.height, 0) / persons.length;
console.log(avgWeight);
console.log(avgHeight);

console.groupEnd();

//   ------------------------------------ 2 Dalis ------------------------------------
console.group(`

0. Pasinaudojant 1 dalies elementų masyvu, sukurti Person prototipų(Class) masyvą:
    Person klasėje:    
    - sukurti vidinį metodą: getBMI();     // suskaičiuoja kūno masės indeksą
    - sukurti vidinį metodą: toString();   // atspausdina žmogų su esamom savybėm
    `);

persons.forEach((x) => console.log(x.bmi));
persons.forEach((x) => console.log(x.toString));
console.groupEnd();

console.group(`
    1. Atrinkti moteris, kuriuos jaunesnės nei 20 metų ir svoris didesnis nei 70kg 
    `);
const youngHeavyFemales = persons.filter(
  (x) => x.sex === "female" && x.age < 20 && x.weight > 70
);
console.table(youngHeavyFemales);

console.groupEnd();

console.group(`
    2. Atrinkti vyrus, kurie vyresni nei 25 metai ir KMI mažesnis nei 18,5
`);
const thinMens = persons.filter(
  (x) => x.sex === "male" && x.age > 25 && x.bmi < 18.5
);
console.table(thinMens);

console.groupEnd();

console.group(`
3. Atrinkti vaikus, su antsvoriu (KMI > 30)
`);
const heavyKids = persons.filter((x) => x.age < 18 && x.bmi > 30);
console.table(heavyKids);

console.groupEnd();

console.group(`
4. Atrinkti pensininkus, su antsvoriu (KMI > 30)
`);

const heavyOldPeaple = persons.filter((x) => x.age > 60 && x.bmi > 30);
console.table(heavyOldPeaple);

console.groupEnd();

console.group(`
5. Atrinkti visus, kieno KMI nepatenka į rėžius [18.5; 25]
`);
const thinAndHeavyPeaple = persons.filter((x) => x.bmi > 25 || x.bmi < 18.5);
console.table(thinAndHeavyPeaple);

console.groupEnd();

// ------------------------------------ 3 Dalis -------------------------------------
// Peržiūrėti video:
// https://www.youtube.com/watch?v=JaMCxVWtW58

// Geras Žaidimas pasitreniravimui:
//   https://www.typing.com/student/game/tommyq

// Rekomenduoju pasikartoti greitasias komandas
