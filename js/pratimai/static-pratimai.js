// Klasę ir bendrus kintamuosius aprašykite čia:
class Item {
  static counter = 0;
  static ID = "";
  static currency = "EUR";
  static EUR_USD = 1.03;

  title;
  price;
  category;

  constructor(title, price, category) {
    Item.counter += 1;
    this.title = title;
    this.price = price;
    this.category = category;
    this.ID =
      this.category.substring(0, 2) +
      "-" +
      this.title.substring(0, 2) +
      "-" +
      Item.counter;
  }

  printItem(currency) {
    if (currency === "EUR") {
      return console.log(this.price, currency);
    } else if (currency === "USD") {
      return console.log((this.price * Item.EUR_USD).toFixed(2), currency);
    }
  }
}

const items = [
  new Item("puodas", 20, "indas"),
  new Item("paltas", 60, "drabužis"),
  new Item("batai", 80, "drabužis"),
  new Item("lėkštė", 10, "indas"),
  new Item("puodelis", 8, "indas"),
];

// Užduočių atlikimo pavyzdžius pateikite konsolės grupėse
console.group(
  "1. Sukurkite klasę Item, kuri turėtų pavadinimą, kainą ir kategoriją. Kainos duomenis pateikite eurais."
);
{
  console.table(items);
}
console.groupEnd();

console.group(
  "2. Naudodami statinę savybę kuriamiem Item objektams, kurkite unikalius identifikatorius - savybes <id>"
);
{
}
console.groupEnd();

console.group(
  "3. Sukurkite statinę savybę - <EUR_USD>, kuriame būtų EUR/USD santykio konstanta"
);
{
}
console.groupEnd();

console.group(
  "4. Sukurkite statinę savybę - <currency>, kuriame būti nustatyta prekių valiuta"
);
{
  items.forEach((item) => item.printItem("EUR"));
}
console.groupEnd();

console.group(
  "5. Sukurkite metodą <printItem>, kuri atspausdintų prekę su nustatyta valiuta <currency>. Pademonstruokite skirtingą printItem veikimą, pakeitus klasės Item valiutą."
);
{
  items.forEach((item) => item.printItem("USD"));
}
console.groupEnd();
