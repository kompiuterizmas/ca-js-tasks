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

// Kiekvienai užduočiai padeklaruokite funkciją, kurią panaudosite kviestami metodą Array.prototype.forEach

console.group("1. Atspausdinkite kiekvieno buto adresą su miestu");
{
  function printAddressAndCity(flat) {
    console.log(flat.address + ", " + flat.city + ";");
  }
  flats.forEach(printAddressAndCity);
}
console.groupEnd();

console.group("2. Atspausdinkite kiekvieno buto kambarių skaičių");
{
  function printCountRooms(flat) {
    console.log("kambarių skaičius: " + flat.rooms.length);
  }
  flats.forEach(printCountRooms);
}
console.groupEnd();

console.group("3. Atspausdinkite kiekvieno buto bendrą plotą");
{
  function printAreaTotal(flat) {
    result = 0;
    function sumAreas(room) {
      result += room.area;
    }
    flat.rooms.forEach(sumAreas);
    console.log("bendras plotas: " + result);
  }
  flats.forEach(printAreaTotal);
}
console.groupEnd();

console.group(
  "4. Atspausdinkite kiekvieno buto eilutes, kuriose kableliais atskirti kambarių pavadinimai"
);
{
  function printAllRooms(flat) {
    result = "";
    function iterateRooms(room) {
      result += room.title + ", ";
    }
    flat.rooms.forEach(iterateRooms);
    result = result.slice(0, -2);
    console.log(result);
  }
  flats.forEach(printAllRooms);
}
console.groupEnd();

console.group("5. Atspausdinkite kiekvieno buto kvadrato kainą");
{
  function countSquarePrice(flat) {
    totalArea = 0;
    function sumAreas(room) {
        totalArea += room.area;
    }
    flat.rooms.forEach(sumAreas)
    console.log(flat.address+', kvadratinio metro kaina:', flat.price/totalArea);
  }
  flats.forEach(countSquarePrice);
}
console.groupEnd();

console.group(
  '6. Atspausdinkite kiekvieno buto kvadrato kainą ir adresą formatu "<address>, <city>: <kvadrato kaina>"'
);
{
    function countSquarePrice(flat) {
        totalArea = 0;
        function sumAreas(room) {
            totalArea += room.area;
        }
        flat.rooms.forEach(sumAreas)
        console.log(flat.address+', '+flat.city+': kvadratinio metro kaina: '+flat.price/totalArea);
      }
      flats.forEach(countSquarePrice);
}
console.groupEnd();
