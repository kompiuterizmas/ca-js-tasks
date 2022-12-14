const tvsData = [
  {
    brand: "Samsung",
    model: "OLED",
    price: 800,
    size: 55,
    features: {
      wifi: true,
      youtube: false,
      netflix: true,
      chromeCast: true,
    },
  },
  {
    brand: "samsung",
    model: "QLED",
    price: 1200,
    size: 45,
    features: {
      wifi: false,
      youtube: true,
      netflix: true,
      chromeCast: false,
    },
  },
  {
    brand: "Samsung",
    model: "Neo QLED",
    price: 2400,
    size: 55,
    features: {
      wifi: false,
      youtube: false,
      netflix: false,
      chromeCast: true,
    },
  },
  {
    brand: "Amazon",
    model: "Fire TV",
    price: 1500,
    size: 55,
    features: {
      wifi: false,
      youtube: true,
      netflix: true,
      chromeCast: true,
    },
  },
  {
    brand: "Amazon",
    model: "Fire TV",
    price: 1800,
    size: 65,
    features: {
      wifi: true,
      youtube: true,
      netflix: true,
      chromeCast: true,
    },
  },
  {
    brand: "TCL",
    model: "4-SERIES",
    price: 350,
    size: 55,
    features: {
      wifi: true,
      youtube: false,
      netflix: false,
      chromeCast: true,
    },
  },
  {
    brand: "TCL",
    model: "5-SERIES",
    price: 600,
    size: 50,
    features: {
      wifi: false,
      youtube: false,
      netflix: true,
      chromeCast: false,
    },
  },
  {
    brand: "TCL",
    model: "6-SERIES",
    price: 1200,
    size: 65,
    features: {
      wifi: false,
      youtube: false,
      netflix: true,
      chromeCast: true,
    },
  },
];

//   common variables
class TV {
  brand;
  model;
  price;
  size;
  features;
  constructor({brand, model, price, size, features = {}}) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    this.size = size;
    this.features = features;
  }
  get title() {
    return `${this.brand} ${this.model} - ${this.size}`
  }
  get sizeInCM(){
    return (this.size * 2.54).toFixed(0);
  }
  get featuresList(){
    let result = [];
    for(const [key, value] of Object.entries(this.features)){
        if(value){result.push(key)}
    }
    return result.join(', ');
  }
}

let tvsArray;
// helpers: 
const groupBy = (arrayOfObjects, propName) => {
    const returnValue = arrayOfObjects.reduce((acc, obj, i) => {
      const key = obj[propName];
      const curGroup = acc[key] ?? [];
      const next = { ...acc, [key]: [...curGroup, obj] };
      return next;
    }, {});
    return returnValue;
  }

console.group(
  "1. Sukurkite klasę <TV>, kuri turėtų savybes pagal <tvsData> duomenis objektų ir jas priskirkite"
);
{
  console.log("TV class sample:", new TV("Samsung","OLED",800,55,{
    wifi: true,
    youtube: false,
    netflix: true,
    chromeCast: true,
  }));
}
console.groupEnd();

console.group(
  "2. Panaudokite duomenis <tvsData>, kad sukurti TV klasės objektus."
);
{
    tvsArray = tvsData.map(element => new TV(element));
    console.log(tvsArray);
}
console.groupEnd();

console.group(
  "3. Sukurkite get'erį <title> kuris grąžintų televizoriaus markę, modelį ir dydį. Formatas komentaruose."
);
/*
    <brand> <model> - <size>
  
    pvz: 
    Samsung OLED - 55
  */
    tvsArray.forEach(el => console.log(el.title));
{
}
console.groupEnd();

console.group(
  "4. Sukurkite get'erį <sizeInCM> kuris grąžintų televizoriaus dydį centimetrais, suapvalintą iki vienetų"
);
{
    tvsArray.forEach(el => console.log(el.sizeInCM));
}
console.groupEnd();

console.group(
  '5. Sukurkite get\'erį <featuresList> atspausdintų visas televizoriaus galimybes(features) atskirtas ", ". Jeigu <features> objekto savybė yra false, ji neturi būti spausdinama.'
);
{
    tvsArray.forEach(el => console.log(el.featuresList));
}
console.groupEnd();

console.group(
  '6. Atrinkite visus televizorius, kurie turi "chromeCast" galimybę'
);
{
    const tvWithChromecast = tvsArray.filter(tv => tv.features.chromeCast);
    console.log(tvWithChromecast);
}
console.groupEnd();

console.group("7. Suskaičiuokite 55 colių televizorių vidutinę kainą");
{
    const tvOf55Screen = tvsArray.filter(tv => tv.size === 55);
    const sumOfAll55TVsPrice = tvOf55Screen.reduce((sum, {price})=>sum+price, 0);
    avgPriceFor55Screen = sumOfAll55TVsPrice/tvOf55Screen.length;
    console.log(avgPriceFor55Screen);
}
console.groupEnd();

console.group(
  "8. Išrikiuokite televizorius pagal kainą, nepažeisdami pradinių duomenų"
);
{
    const sortedTVsByPrice = groupBy(tvsArray, 'price');
    console.log(sortedTVsByPrice);
}
console.groupEnd();

console.group("9. Sugrupuokite televizorius pagal markę.");
{
  /*
    {
      amazon: [TV, TV],
      samsung: [TV, TV, TV],
      tcl: [TV, TV, TV],
    }
    */
    const sortedTVsByBrand = groupBy(tvsArray, 'brand');
    console.log(sortedTVsByBrand);
}
console.groupEnd();

console.group(
  "10. Suformuokite objektų masyvą pagal formatą pateiktą komentaruose, naudojant TV objektų masyvą"
);
{
  /*
    Result object
    {
      name,
      size,
      features,
    }
  
    pvz1:
    {
      name: "Samsung OLED",
      size: "140cm",
      features: "wifi, netflix, chromeCast",
    }
  
    pvz2:
    {
      name: "TCL 5-SERIES",
      size: "127cm",
      features: "netflix",
    }
    */
    const newTVsArray = tvsArray.map((tv) => ({
        name: `${tv.brand} ${tv.model}`,
        size: tv.sizeInCM,
        features: tv.featuresList,
      }));
      console.table(newTVsArray);

}
console.groupEnd();
