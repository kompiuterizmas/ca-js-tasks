console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function firstArrayElement(x){
    return x[0];
  }
  console.log(sampleArray);
  console.log(firstArrayElement(sampleArray));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri pašalina pirmą masyvo elementą ir jį grąžina.');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function removeAndReturnFirstArrayElement(x){
    return x.shift();
  }
  console.log(sampleArray);
  console.log(removeAndReturnFirstArrayElement(sampleArray));
  console.log(sampleArray);
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function returnLastArrayElement(x){
    return x[(x.length-1)];
  }
  console.log(sampleArray);
  console.log(returnLastArrayElement(sampleArray));
  console.log(sampleArray);
}
console.groupEnd();

console.groupCollapsed('4. Parašykite funkciją, kuri pašalina paskutinį masyvo elementą ir jį grąžina.');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function returnLastArrayElement(x){
    return x.pop();
  }
  console.log(sampleArray);
  console.log(returnLastArrayElement(sampleArray));
  console.log(sampleArray);
}
console.groupEnd();

console.groupCollapsed('5. Parašykite funkciją, kuri grąžina elementų kiekį masyve');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function countArrayLength(x){
  return x.length;
  }
  console.log(sampleArray);
  console.log('length of sample array:', countArrayLength(sampleArray));
}
console.groupEnd();

console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function indexOfLastArrayElement(x){
    return x.indexOf(x[x.length-1]);
  }
  console.log(sampleArray);
  console.log('last array element index:', indexOfLastArrayElement(sampleArray));
}
console.groupEnd();

console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function printEveryIndex(x){
    x.forEach(e => {
      console.log('index of', e, 'is:', x.indexOf(e));
    });
  }
  console.log(sampleArray);
  printEveryIndex(sampleArray);
}
console.groupEnd();

console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function printEveryValue(x){
    x.forEach(e => {
      console.log('value of', (x.indexOf(e))+1, 'array element is:', x[x.indexOf(e)]);
    });
  }
  console.log(sampleArray);
  printEveryValue(sampleArray);
}
console.groupEnd();

console.groupCollapsed('9. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ... sprendimas ir spausdinimas
  function printEveryIndexAndValue(x){
    x.forEach(e => {
      console.log(`[`+(x.indexOf(e))+`] =>`, x[x.indexOf(e)]);
    });
  }
  console.log(sampleArray);
  printEveryIndexAndValue(sampleArray);
}
console.groupEnd();

console.groupCollapsed('10. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function printEveryIndexAndValueBackwards(x){
    for(let i = x.length-1; i>=0; i-- ){
      console.log(x[i]);
    };
  }
  console.log(sampleArray);
  printEveryIndexAndValueBackwards(sampleArray);
}
console.groupEnd();

console.groupCollapsed('11. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function printEveryArrayIndexInLine(x){
    let result = '';
    for(let i = 0; i<x.length; i++ ){
      result=result.concat(x.indexOf(x[i])+" ");
    };
    console.log(result);
  }
  console.log(sampleArray);
  printEveryArrayIndexInLine(sampleArray);
}
console.groupEnd();

console.groupCollapsed('12. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48');
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function printEveryArrayValueInLine(x){
    let result = '';
    for(let i = 0; i<x.length; i++ ){
      result=result.concat(x[i]+" ");
    };
    console.log(result);
  }
  console.log(sampleArray);
  printEveryArrayValueInLine(sampleArray);
}
console.groupEnd();

console.groupCollapsed('13. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17 [1]=>8 [2]=>88 ..
{
  const sampleArray = ['first array element', 'second array element', 'third array element'];
  // ...sprendimas ir spausdinimas
  function printEveryIndexAndValueInLine(x){
    result = "";
    x.forEach(e => {
      result=result.concat(`[`+(x.indexOf(e))+`]=>`+x[x.indexOf(e)]+" ");
    });
    console.log(result);
  }
  console.log(sampleArray);
  printEveryIndexAndValueInLine(sampleArray);
}
console.groupEnd();
