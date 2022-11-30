console.group(
  "1. Sukurkite funkciją, kuri priima spalvą ir grąžina funkciją, kuri spausdins tekstą išorinei funkcijai perduota spalva"
);
{
  const createColorfulPrintingFunction = (color) => {
    // ... grąžinti funkciją, kuri priimtų tekstą ir atspausdintų jį spalva <color>
    return (text) => {
      console.log(`%c${text}`, `color:${color}`);
    };
  };

  const printRed = createColorfulPrintingFunction("red");
  const printBlue = createColorfulPrintingFunction("blue");

  printRed("tekstas"); // konsolėje matosi: 'tekstas'  raudona spalva
  printBlue("tekstas"); // konsolėje matosi: 'tekstas' mėlyna spalva
}
console.groupEnd();

console.group(
  "2. Sukurkite funkciją, kuri priima simbolių masyvą ir grąžina funkciją, kuri tikrins ar tekste yra išorinės funkcijos kvietimo metu perduotų simbolių"
);
{
  const array = [1, 2, 5, 6, "a", "h", "o"];

  const findSymbolInArray = (array) => {
    const x =(symbol) => {
      return array.includes(symbol);
    }
    return x;
  };

  const arrayCheck = findSymbolInArray(array);

  console.log(arrayCheck("a"));
  console.log(arrayCheck("c"));
  console.log(arrayCheck(3));
  console.log(arrayCheck(6));
}
console.groupEnd();

console.group(
  "3. Sukurkite funkciją, kuri priima funkciją priimančią 2 parametrus ir grąžiną perduotą funkciją iškviečiamą su dviem invokacijom"
);
{
  // funkcija priimanti 2 parametrus
  const add = (a, b) => a + b;
  const multiply = (a, b) => a * b;

  const convertBinaryFunctionToUnaryInvocationQueue = (binaryFunction) => {
    return (a) => {
      return (b) => {
        return binaryFunction(a, b);
      };
    };
  };
  //   const convertBinaryFunctionToUnaryInvocationQueue = (binaryFunction) => (a) => (b) => binaryFunction(a, b);

  const addUnaryQueue = convertBinaryFunctionToUnaryInvocationQueue(add);
  const multiplyUnaryQueue =
    convertBinaryFunctionToUnaryInvocationQueue(multiply);
  console.log(addUnaryQueue(7)(6)); // 13
  console.log(multiplyUnaryQueue(7)(6)); // 42
}
console.groupEnd();
console.group(
  "4. Sukurkite funkciją kuri gražina funkciją atspausdinančią tekstą apgaubus šauktukais"
);
/*
  const printWithBangs = createPrintWithBangs();
  printWithBangs('tekstas') -> !tekstas!
  printWithBangs('labas') -> !labas!
*/
{
  const envelopString = (string) => console.log(`!${string}!`);

  const callEnvelopString = (a) => {
    return a;
  };

  const envelopText = callEnvelopString(envelopString);

  envelopText("bandymas");
}
console.groupEnd();

console.group(
  "5. Sukurkite funkciją kuri grąžina funkciją atspausdinančią tekstą apgaubus išorinės funkcijos parametru"
);
/*
  const printWithBangs = createPrintBetween('!');
  const printWithDashes = createPrintBetween('---');
  printWithBangs('tekstas') -> !tekstas!
  printWithDashes('tekstas') -> ---tekstas---
*/
{
  const envelopString = (a, b) => console.log(`${a}${b}${a}`);

  const callEnvelopString = (string) => {
    const symbol = "+";
    return envelopString(symbol, string);
  };
  callEnvelopString("bandymas");
}
console.groupEnd();
// A, B, C, D - salygoje naudojami pavadinimai
console.group(
  "6. Sukurkite funkciją<A> kuri priima funkciją<B> ir parametrą<D>, ir grąžina funkciją<C>. \nFunkcija<B> tai vieną parametrą priimanti funkciją, kuri grąžina parametro transformaciją. \n Funkcija<C> turi grąžinti Funkcijos<B> rezultatą apgaubiant jį parametru<D>"
);
/*
  funkciją<B>:
  const double = (a) => typeof a === 'number' ? a * 2 : a + a;

  funkciją<A>:               ↙ funkciją<B>   
  const createWrapper = (functionB, parameterD) => {
                                        ↖ parametras<D>
    
    Čia turite grąžinti funkciją<C> 
  }

  const doubleWithBangs = createWrapper(double, '!')
  doubleWithBangs('labas') -> !labaslabas!
  doubleWithBangs(8) -> !16!
*/
{
  const double = (a) => (typeof a === "number" ? a * 2 : a + a);

  const createWrapper = (functionB, parameterD) => {
    return function (input) {
      return `${parameterD}${functionB(input)}${parameterD}`;
    };
  };

  const doubleWithBangs = createWrapper(double, "!");

  console.log(doubleWithBangs("labas"));
  console.log(doubleWithBangs(8));
}
console.groupEnd();
