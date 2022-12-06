//  Klasės čia
class Page {
  content;
  constructor(content) {
    this.content = content;
  }
}

class Document {
  title;
  dateCreated;
  author;
  pages;
  currentPage;
  constructor(title, dateCreated, author, pages) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.author = author;
    this.pages = pages;
    this.currentPage = 1;
  }
  printCover() {
    console.log(`${this.title}, kurį parašė ${this.author}, ${this.dateCreated.substring(0,4)} metais, ${this.dateCreated.substring(5,7)} mėnesio ${this.dateCreated.substring(8,10)} dieną`);
  }
  nextPage() {
    if (this.currentPage < this.pages.length) {
      this.currentPage += 1;
    }
  }
  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage -= 1;
    }
  }
  printPage(pageNo) {
    if (pageNo) {
      this.currentPage = pageNo;
    }
    console.log(this.pages[this.currentPage - 1]);
  }
  printBook() {
    this.printCover()
    console.groupCollapsed('expand console to view pages');
    {
      for (let i = 0; i < this.pages.length; i+=1) {
        this.printPage(i+1);
      }
    }
    console.groupEnd();
  }
}

const testDocument = new Document('kazkoks dokumentas', '2000-11-11', 'biurokratas', [
  'pirmas puslapis su tekstu',
  'antras puslapis su tekstu',
  'trečias puslapis su tekstu',
  'ketvirtas puslapis su tekstu',
  'penktas puslapis su tekstu',
  'šeštas puslapis su tekstu',
  'septintas puslapis su tekstu',
]);

// Pavyzdžius pateikite čia
console.group("0. Sukurkite klasę Page, kuri turėtų savybes: content");
{
  const testContent = new Page('yukfhvbhjklbjk');
  console.log(testContent);
}
console.groupEnd();

console.group(
  "1. Sukurkite klasę Document, kuri turėtų savybes: title, dateCreated, author, pages, currentPage"
);
// Kiekvienas puslapis turi būti Page klasės objektas susijęs su klase Document kompozicijos ryšiu. Document.pages -> Array<Page> [Page, Page, Page]
// Konstruktoriaus metu sukurkite visus knygos duomenis.
console.log(testDocument);
{
}
console.groupEnd();

console.group(
  "2. Klasėje Document sukurkite metodą <printCover>, kuris atspausdintų savybes <title, dateCreated, author> konsolėje"
);
{
  testDocument.printCover();
}
console.groupEnd();

console.group(
  "3. Sukurkite metodus, <nextPage> ir <prevPage> kurie pakeistų esamą puslapį <currentPage>"
);
// Įvertinkite pradinius ir paskutinius puslapius. Paskutinio puslapio atveju, vykdant nextPage, nieko nedaryti. Analogiškai su prevPage ir pirmu puslapiu
{
  for (let i = 0; i < 10; i++) {
    console.log('nextPage puslapis prieš komandą:', testDocument.currentPage);
    testDocument.nextPage();
    // console.log('nextPage puslapis po komandos:', testDocument.currentPage);
  }
  for (let i = 0; i < 4; i++) {
    console.log('prevPage puslapis prieš komandą:', testDocument.currentPage);
    testDocument.prevPage();
    // console.log('prevPage puslapis po komandos:', testDocument.currentPage);
  }
}
console.groupEnd();

console.group(
  "4. Sukurkite metodą <printPage> kuris atspausdintų esamą puslapį"
);
{
  testDocument.printPage();
}
console.groupEnd();

console.group(
  "5. Sukurkite metodą <printBook> kuris atspausdintų visus puslapius Ir pavadinimą"
);
{
  testDocument.printBook();
}
console.groupEnd();

console.group(
  "6. Sukurkite 3 klases, kurios paveldėtų klasę Document ir turėtų savo savybes, pvz.: Book, NewsPaper ir t.t."
);
{
  //  Sukūrus klases, pademonstruokite tėvinės klasės metodų veikimą
}
console.groupEnd();

console.group(
  "7. Kiekvienoje klasėje aprašykite po vieną metodą ir vieną papildomą savybę"
);
{
  // Pademonstruokite specifinius vaikinų klasių metodus ir savybes
}
console.groupEnd();

// Norint gauti darbą pabaigus kursus:
// Inkapsuliuoti savybes title, dateCreated, author, pages, currentPage naudojant # private modifier
