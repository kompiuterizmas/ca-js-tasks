// 1. Sukurti klasę Automobilis
//   - sukurti konstruktorių, su 3 argumentais:
//     - marke, modelis, kaina

class Car {
  brand;
  model;
  price;

  constructor(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
}

//   - konstruktoriuje aprašyti, jog perduotus argumentus išsaugotume formuojame objekte savybėmis:
//     - this.brand
//     - this.model
//     - this.price

// 2. Sukurkite 3 skirtingus objektus pagal klasę Automobilis kintamuosiuose:

const car1 = new Car("Audi", 100, 7000);
const car2 = new Car("BMW", 200, 6000);
const car3 = new Car("Opel", 300, 5000);

// 3. Atsispausdinkite car1, car2 ir car3 kintamuosius. Peržiūrėkite juos konsolėje, panagrinėkite kas yra tie objektai

console.log("car1:", car1);
console.log("car2:", car2);
console.log("car3:", car3);

// 4. Atspausdinkite visų kintamųjų (kurie rodo į klasės objektus):
//   modelius:
console.log("car1.model:", car1.model);
console.log("car2.model:", car2.model);
console.log("car3.model:", car3.model);
//  markes:
console.log("car1.brand:", car1.brand);
console.log("car2.brand:", car2.brand);
console.log("car3.brand:", car3.brand);
// kainas:
console.log("car1.price:", car1.price);
console.log("car2.price:", car2.price);
console.log("car3.price:", car3.price);

// 5. Padidinkite Automobilis objektų kainas šimtu.
car1.price = car1.price + 100;
car2.price = car2.price + 100;
car3.price = car3.price + 100;

// 6. Po padidinimo, vėl atsispausdinkite objektus ir pažiūrėkite pakitusias Automobilis objektų savybes.

console.log("car1:", car1);
console.log("car2:", car2);
console.log("car3:", car3);
