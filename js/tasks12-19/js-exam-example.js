console.group(`
1. Sukurkite klasę Car, kuri turėtų savybes ir priskirtų jas naudojant konstruktorių:
  brand,
  model,
  year,
  color,
  fuelTypes: [] 
  price // eurais
  `);
class Car {
  brand;
  model;
  year;
  color;
  fuelTypes;
  price; // eurais
  constructor(brand, model, year, color, fuelTypes, price) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.fuelTypes = fuelTypes;
    this.price = price;
  }
  getFuelTypes() {
    return this.fuelTypes.join("/");
  }
}

console.groupEnd();

console.group(`2. Sukurkite masyvą sudarytą iš 8 Car klasės mašinų
`);

const cars = [
  new Car("Honda", "CR-V", 2020, "Pink", ["diesel"], 2000),
  new Car("Ford", "Aerostar", 2013, "Mauv", ["electric"], 12000),
  new Car("Subaru", "Legacy", 2009, "Fuscia", ["petrol", "electric"], 5000),
  new Car("Toyota", "Tacoma", 2002, "Yellow", ["diesel"], 6000),
  new Car("Mitsubishi", "Galant", 2008, "Mauv", ["electric"], 15000),
  new Car("Ford", "Escape", 2017, "Blue", ["petrol"], 4000),
  new Car("Audi", "Q5", 2015, "Yellow", ["petrol", "electric"], 20000),
  new Car("Lexus", "GX", 2021, "Turquoise", ["petrol"], 100000),
];

console.table(cars);
console.groupEnd();
console.group(`3. Klasėje Car sukurkite metodą getFuelType, kuris grąžintų mašinos kurų tipus (fuelTypes)
   kaip 'string'ą atskirtą '/'.
   `);

cars.forEach((x) => console.log(x.getFuelTypes()));
console.groupEnd();

console.group(`4. Atspausdinkite kiekvieno automobilio pavadinimą ir 3 punktu sukurto metodo rezultatą, pvz:
  Tayota Corola - dysel/electric
  Nisan Bajam - petrol/gas
  Kanagi BaBa - uranus
            ...
            `);

cars.forEach((x) => console.log(`${x.brand} ${x.brand} - ${x.getFuelTypes()}`));
console.groupEnd();
console.group(`5. Atrinkite tik elektrinius automobilius
`);
const electricCars = cars.filter((x) => x.fuelTypes.includes("electric"));
console.table(electricCars);
console.groupEnd();
console.group(`6. Atrinkite tik benzininius automobilius, naujesnius nei 2016 metai
`);
const petrolCarsNewerThen2016 = cars.filter(
  (x) => x.fuelTypes.includes("petrol") && x.year > 2016
);
console.table(petrolCarsNewerThen2016);
console.groupEnd();
console.group(`7. Atrinkite audi tipo automobilius nuo 2012 iki 2016, kurie nėra dyzeliniai  
`);
const filteredCars = cars.filter(
  (x) =>
    x.brand.toLowerCase() === "audi" &&
    !x.fuelTypes.includes("diesel") &&
    x.year > 2012 &&
    x.year < 2016
);
console.table(filteredCars);

console.groupEnd();
console.group(`8. Suskaičiuokite 5 punkte gautų automobilių kainos vidurkį
`);
const avgPriceOfElectricCars =
electricCars.reduce((acc, { price }) => acc + price, 0) / electricCars.length;
console.log(avgPriceOfElectricCars);
console.groupEnd();
console.group(`9. Suskaičiuokite 6 punkte gautų automobilių bendrą vertę
`);
const petrolCarsNewerThen2016PriceSum = petrolCarsNewerThen2016.reduce(
  (acc, { price }) => acc + price,
  0
);
console.log(petrolCarsNewerThen2016PriceSum);
console.groupEnd();
console.group(`10. Panaudokite pradinį Car objektų masyvą performuoti duomenis į tokių objektų masyvą:
  * brand,
  * model,
  * price, // kaina doleriais [Number]
  * fuelType // kuro tipas kaip string'as. galite naudoti 3 punktu sukurtą metodą
`);
class CarsForDollars {
    brand;
    model;
    fuelTypes;
    price; // dollars
    constructor(brand, model, fuelTypes, price) {
        this.brand = brand;
        this.model = model;
        this.fuelTypes = fuelTypes;
        this.price = this.setPrice(price);
      }
      setPrice(price) {
        return price*1.05;
      }
}
const reformattedCars = cars.map((x)=>new CarsForDollars(x.brand, x.model, x.getFuelTypes(), x.price));
console.table(reformattedCars);
console.groupEnd();
