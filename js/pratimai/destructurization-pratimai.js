const flats = [
  {
    address: "Vilnakiemio g. 7",
    rooms: [
      { title: "virtuvė", area: 12 },
      { title: "svetainė", area: 20 },
      { title: "tualetas", area: 8 },
      { title: "miegamasis", area: 16 },
    ],
    city: "Vilnius",
    price: 120000,
  },
  {
    address: "Ruginių pr. 17",
    rooms: [
      { title: "virtuvė", area: 18 },
      { title: "svetainė", area: 18 },
      { title: "tualetas", area: 8 },
      { title: "miegamasis", area: 12 },
      { title: "miegamasis2", area: 16 },
    ],
    city: "Kaunas",
    price: 120000,
  },
  {
    address: "Valatkų pr. 17",
    rooms: [
      { title: "virtuvė", area: 18 },
      { title: "miegamasis", area: 12 },
      { title: "miegamasis2", area: 16 },
    ],
    city: "Kaunas",
    price: 120000,
  },
  {
    address: "Vareikų pr. 17",
    rooms: [
      { title: "virtuvė", area: 18 },
      { title: "svetainė", area: 18 },
      { title: "miegamasis2", area: 16 },
    ],
    city: "Kaunas",
    price: 90000,
  },
  {
    address: "Majonezo pr. 17",
    rooms: [
      { title: "tualetas", area: 8 },
      { title: "miegamasis", area: 12 },
      { title: "miegamasis2", area: 16 },
    ],
    city: "Kaunas",
    price: 50000,
  },
  {
    address: "Saulės g. 7",
    rooms: [
      { title: "virtuvė", area: 12 },
      { title: "svetainė", area: 20 },
      { title: "tualetas", area: 8 },
    ],
    city: "Klaipėda",
    price: 80000,
  },
];

// ------------------------------ Be anoniminių funkcijų ---------------------
console.group("1. Atspausdinkite kiekvieno buto adresą su miestu");
// '<address>, <city>'
{
  function printAddressAndCity({ address, city }) {
    console.log(`${address}, ${city}`);
  }
  flats.forEach(printAddressAndCity);
}
console.groupEnd();

console.group("2. Sukurkite masyvą iš kiekvieno buto kambarių skaičiaus");
// [5, 18, 4, ...]
{
  function roomCount({ rooms }) {
    return rooms.length;
  }
  const roomsCount = flats.map(roomCount);
  console.log(roomsCount);
}
console.groupEnd();

console.group("3. Suformuokite kiekvieno buto plotų masyvą");
// [5, 18, 4, ...]
{
  function flatArea({ rooms }) {
    function sum(result, { area }) {
      return (result += area);
    }
    return rooms.reduce(sum, 0);
  }
  const flatsArea = flats.map(flatArea);
  console.log(flatsArea);
}
console.groupEnd();

// ------------------------------ Su anoniminėmis funkcijomis ---------------------
console.group("4. Atrinkite 4 kambarių ir dedesnius butus");
// [{...}, {...}]
{
  const largeFlats = flats.filter(function ({ rooms }) {
    return rooms.length >= 4;
  });
  console.log(largeFlats);
}
console.groupEnd();

console.group("5. Apskaičiuokite visų butų bendrą plotą");
{
  let entireFlatsArea = 0;
  flats.forEach(function (everyFlat) {
    entireFlatsArea += everyFlat.rooms.reduce(function (
      entireFlatsArea,
      { area }
    ) {
      return area + entireFlatsArea;
    },
    entireFlatsArea);
  });

  console.log(entireFlatsArea);
}
console.groupEnd();

console.group(
  "6. Atrinkite 3 kambarių butus iš Kauno, kurių kaina mažesnė nei 100 000"
);
{
  const cheapFlatsInKaunas = flats.filter(function ({ city, price, rooms }) {
    return city === "Kaunas" && price <= 100000 && rooms.length === 3;
  });
  console.log(cheapFlatsInKaunas);
}
console.groupEnd();

console.group("7. Permorkuokite butus formatu pateiktu komentaruose");
/*
    Masyvas sudarytas iš
    {
      address: string (`<address>, <city>`),
      city: string,
      price: number (1.1 * <price>).
      roomCount: number,
      squares: number,
      squarePrice: number,
    }
  */
{
  const reformattedFlats = flats.map(function ({ ...props }) {
    entireFlatArea = props.rooms.reduce(function (entireArea, { area }) {
      return entireArea + area;
    }, 0);
    return {
      address: `${props.address}, ${props.city}`,
      city: props.city,
      price: props.price * 1.1,
      roomCount: props.rooms.length,
      squares: entireFlatArea,
      squarePrice: props.price / entireFlatArea,
    };
  });
  console.log(reformattedFlats);
}
console.groupEnd();

// Papildomai
console.group(
  "8. Atrinkite butus, kurie turi nors vieną kambarį, didesnį nei 19 kvadratų"
);
{
  const flatsWithBigRooms = flats.filter(function ({ rooms }) {
    return (
      rooms.filter(function ({ area }) {
        return area > 19;
      }).length > 0
    );
  });
  console.log(flatsWithBigRooms);
}
console.groupEnd();

console.group("9. Apskaičiuokite visų būtų kainos vidurkį,");

console.groupEnd();

console.group("10. Apskaičiuokite visų būtų kainą už kvadratą");
// 20 - 20 000;           40 - 40 000; -> 60 000 / 60 -> 1000
//  1000                     1000                     -> 1000
// 20 - 20 000;           20 - 40 000;                -> 1500
//  1000                     2000                     -> 1500
// 20 - 20 000;           30 - 60 000; -> 80 000/50   -> 1600 // butų kvadrato kaina
//  1000                    2000                      -> 1500 // butų kvadartų kainų vidurkis

console.groupEnd();
