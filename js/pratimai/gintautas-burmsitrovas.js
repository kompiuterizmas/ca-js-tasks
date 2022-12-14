const filmsData = [
  {
    title: "The Matrix",
    roles: [
      { title: "Neo", actor: { name: "Keanu", surname: "reeves" } },
      { title: "Morpheus", actor: { name: "Laurence", surname: "Fishburne" } },
      { title: "Trinity", actor: { name: "Carrie-Anne", surname: "Moss" } },
    ],
    ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
    year: 1999,
  },
  {
    title: "The Matrix Reloaded",
    roles: [
      { title: "Neo", actor: { name: "Keanu", surname: "Reeves" } },
      { title: "Morpheus", actor: { name: "Laurence", surname: "Fishburne" } },
      { title: "Trinity", actor: { name: "Carrie-Anne", surname: "Moss" } },
    ],
    ratings: [7, 7, 8, 9, 10, 10],
    year: 2003,
  },
  {
    title: "The Matrix Revolutions",
    roles: [
      { title: "Neo", actor: { name: "keanu", surname: "Reeves" } },
      { title: "Morpheus", actor: { name: "Laurence", surname: "Fishburne" } },
      { title: "Trinity", actor: { name: "Carrie-Anne", surname: "Moss" } },
    ],
    ratings: [7, 8, 9, 10, 10, 10, 7, 8],
    year: 2003,
  },
  {
    title: "The Shawshank Redemption",
    roles: [
      { title: "Andy Dufresne", actor: { name: "Tim", surname: "Robbins" } },
      {
        title: "Ellis Boyd 'Red' Redding",
        actor: { name: "Morgan", surname: "Freeman" },
      },
    ],
    ratings: [10, 10, 10, 10, 10, 8, 10, 10],
    year: 1994,
  },
  {
    title: "The Godfather",
    roles: [
      {
        title: "Don Vito Corleone",
        actor: { name: "Marlon", surname: "Brando" },
      },
      { title: "Michael Corleone", actor: { name: "Al", surname: "Pacino" } },
      { title: "Tom Hagen", actor: { name: "Robert", surname: "Duvall" } },
    ],
    ratings: [10, 10, 9, 10, 8, 10, 10],
    year: 1972,
  },
  {
    title: "The Dark Knight",
    roles: [
      { title: "Joker", actor: { name: "Heath", surname: "Ledger" } },
      { title: "Bruce Wayne", actor: { name: "Christian", surname: "Bale" } },
    ],
    ratings: [10, 9, 9, 9, 10, 8, 10, 10],
    year: 2008,
  },
];

class Film {
  title;
  roles;
  ratings;
  year;
  constructor({ title, roles, ratings, year }) {
    this.title = title;
    this.roles = roles;
    this.ratings = ratings;
    this.year = year;
  }
  ratingCount() {
    return this.ratings.length;
  }
  rating() {
    const sum = this.ratings.reduce((acc, x) => acc + x, 0);
    return (sum / this.ratingCount()).toFixed(1);
  }
}

class ReworkedFilm {
  name;
  cast;
  rating;
  ratingCount;
  year;
  constructor(name, cast, rating, ratingCount, year) {
    this.name = name;
    this.cast = cast;
    this.rating = rating;
    this.ratingCount = ratingCount;
    this.year = year;
  }
}

const filmsArray = filmsData.map((x) => new Film(x));
let filmsSortedByRating = [];

console.group(
  "1. Sukurkite klas?? <Film>, kuri tur??t?? savybes kaip kiekvienas <filmsData> objektas"
);
{
  console.log(
    new Film({
      title: "The Matrix",
      roles: [
        { title: "Neo", actor: { name: "Keanu", surname: "reeves" } },
        {
          title: "Morpheus",
          actor: { name: "Laurence", surname: "Fishburne" },
        },
        { title: "Trinity", actor: { name: "Carrie-Anne", surname: "Moss" } },
      ],
      ratings: [10, 8, 9, 9, 9, 7, 10, 10, 10],
      year: 1999,
    })
  );
}
console.groupEnd();

console.group(
  "2. Panaudokite <filmsData> duomenis kad sukurti <Film> klas??s objekt?? masyv??"
);
{
  console.log(filmsArray);
}
console.groupEnd();

console.group(
  "3. Sukurkite get`er?? <ratingCount>, kuris gr????int?? filmo ??vertinim?? skai??i??."
);
{
  const filmsRatingCount = filmsArray.map((x) => x.ratingCount());
  console.log(filmsRatingCount);
}
console.groupEnd();

console.group(
  "4. Sukurkite get`er?? <rating>, kuris gr????int?? filmo ??vertinim??, suapvalint?? iki 1 skai??iaus po kablelio"
);
{
  const filmsRating = filmsArray.map((x) => x.ratingCount());
  console.log(filmsRating);
}
console.groupEnd();

console.group(
  "5. I??rikiuokite filmus pagal reiting??, nuo ma??iausio iki did??iausio, nepakei??iant orginali?? duomen??"
);
{
  filmsSortedByRating = [...filmsArray].sort((a, b) => a.rating() - b.rating());
  console.group("original films array:");
  {
    filmsArray.forEach((x) => {
      console.log(x.rating());
    });
  }
  console.groupEnd();
  console.group("sorted films array:");
  {
    filmsSortedByRating.forEach((x) => {
      console.log(x.rating());
    });
  }
  console.groupEnd();
}
console.groupEnd();

console.group(
  '6. Atvaizduokite [5.] punktu i??rikiuot?? film?? atvaizdavim?? lentele(console.table). Lentel?? turi tur??ti 3 stulpelius: "title", "rating" ir  "ratingCount"'
);
{
  // filmsSortedByRating.forEach((x)=>console.table([x.title, x.rating(), x.ratingCount()]));
  console.table(
    filmsSortedByRating.map((x) => [x.title, x.rating(), x.ratingCount()])
  );
}
console.groupEnd();

console.group("7. Suskai??iuokite kiek yra film?? senesni?? nei 2000 metai");
{
  const oldFilms = filmsArray.filter((x) => x.year < 2000);
  console.log(oldFilms.length);
}
console.groupEnd();

console.group('8. Atrinkite visus filmus kurie pavadinime turi ??od?? "Matrix"');
{
  const matrixSeries = filmsArray.filter((x) =>
    x.title.toLowerCase().includes("matrix")
  );
  console.table(matrixSeries);
}
console.groupEnd();

console.group(
  '9. Atrinkite filmus kuriuose vaidino "Keanu Reeves". Atrinkim?? atlikite ignoruojant raid??i?? dyd??i?? nesutapim??'
);
{
  const keanuFilms = filmsArray.filter((x) => {
    result = x.roles.filter(
      (y) =>
        y.actor.name.toLowerCase() === "keanu" &&
        y.actor.surname.toLowerCase() === "reeves"
    );
    return result.length > 0;
  });
  console.table(keanuFilms);
}
console.groupEnd();

console.group(
  "10. Suformuokite nauj?? masyv?? i?? <Film> masyvo duomen??, pagal format?? komentaruose."
);
/*
  Result object
  {
    name - pavadinimas
    cast - string'?? masyvas formatu: `<rol??>: <actor.name> <actor.surname>`
    rating - ??vertinimas
    ratingCount - ??vertinim?? kiekis
    year - metai
  }
  
  pvz1:
  {
    name: "The Matrix",
    cast: (3) ['Neo: Keanu reeves', 'Morpheus: Laurence Fishburne', 'Trinity: Carrie-Anne Moss'],
    rating: 9.1,
    ratingCount: 9,
    year: 1999,
  }
  
  pvz2:
  {
    name: "The Dark Knight",
    cast: (2) ['Joker: Heath Ledger', 'Bruce Wayne: Christian Bale'],
    rating: 9.4,
    ratingCount: 8,
    year: 2008,
  }
  */
{
  const reworkedFilmArray = filmsArray.map((x) => {
    return new ReworkedFilm(
      x.title,
      x.roles.map((y) => `${y.title}: ${y.actor.name} ${y.actor.surname}`),
      x.rating(),
      x.ratingCount(),
      x.year
    );
  });
  console.table(reworkedFilmArray);
}
console.groupEnd();
