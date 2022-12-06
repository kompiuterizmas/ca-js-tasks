class Rectangle {
    x;
    y;
  
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    get perimeter (){
        return 2*this.x + 2*this.y;
    }
    get area (){
        return this.x * this.y;
    }
  }
  class Circle {
    r;
  
    constructor(r) {
      this.r = r;
    }
    get perimeter (){
        return 2*Math.PI*this.r;
    }
    get area (){
        return Math.PI*(this.r**2);
    }
  }
  
  const shapes = [
    new Rectangle(5, 10),
    new Rectangle(7, 7),
    new Circle(5),
    new Circle(7),
    new Circle(9),
  ];
  
  console.group('1. Sukurkite figūroms perimetro apskaičiavimo funkciją ir panaudokite ją polimorfiškai');
  {
    shapes.forEach(element => {
        console.log(element.perimeter);
    });
  }
  console.groupEnd();
  
  console.group('2. Sukurkite figūroms ploto apskaičiavimo funkciją ir panaudokite ją polimorfiškai');
  {
    shapes.forEach(element => {
        console.log(element.area);
    });
  }
  console.groupEnd();
  
  
  