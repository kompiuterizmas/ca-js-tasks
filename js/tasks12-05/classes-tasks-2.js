console.groupCollapsed("1. - https://edabit.com/challenge/ZngT4zDckDugt2JGY");
console.log(
  `%c task description:
Create a class that takes the following four arguments for a particular football player:

    name
    age
    height
    weight

Also, create three functions for the class that returns the following strings:

    getAge() returns "name is age age"
    getHeight() returns "name is heightcm"
    getWeight() returns "name weighs weightkg"`,
  `color:blue`
);
{
  // ... code
  class Player {
    constructor(name, age, height, weight) {
      (this.name = name),
        (this.age = age),
        (this.height = height),
        (this.weight = weight);
    }

    getAge() {
      // complete function
      return this.name + " is age " + this.age;
    }

    getHeight() {
      // complete function
      return this.name + " is " + this.height + "cm";
    }

    getWeight() {
      // complete function
      return this.name + " weighs " + this.weight + "kg";
    }
  }
  player1 = new Player("Patrick Mahomes", 24, 188, 104);
  player2 = new Player("Jimmy Garoppolo", 28, 188, 102);
  player3 = new Player("Julio Jones", 31, 191, 100);

  console.log(player1.getAge()); //'Patrick Mahomes is age 24'
  console.log(player1.getHeight()); // 'Patrick Mahomes is 188cm'
  console.log(player1.getWeight()); // 'Patrick Mahomes weighs 104kg'
  console.log(player2.getAge()); //'Jimmy Garoppolo is age 28'
  console.log(player2.getHeight()); // 'Jimmy Garoppolo is 188cm'
  console.log(player2.getWeight()); // 'Jimmy Garoppolo weighs 102kg'
  console.log(player3.getAge()); //'Julio Jones is age 31'
  console.log(player3.getHeight()); // 'Julio Jones is 191cm'
  console.log(player3.getWeight()); // 'Julio Jones weighs 100kg'
}
console.groupEnd();

console.groupCollapsed("2. - https://edabit.com/challenge/yxKoCKemzacK6PECM");
console.log(
  `%c task description:
    Create functions for the Calculator class that can do the following:

    Add two numbers.
    Subtract two numbers.
    Multiply two numbers.
    Divide two numbers.
    `,
  `color:blue`
);
{
  // ... code
  class Calculator {
    // Write functions to add(), subtract(), multiply() and divide()
    add(a, b) {
      return a + b;
    }
    subtract(a, b) {
      return a - b;
    }
    multiply(a, b) {
      return a * b;
    }
    divide(a, b) {
      return a / b;
    }
  }
  var calculator = new Calculator();
  console.log('request: "5 + 5 = 10" result --- ' + calculator.add(5, 5)); //10, "5 + 5 = 10"
  console.log('request: "20 + 5 = 25" result --- ' + calculator.add(20, 5)); //25, "20 + 5 = 25"
  console.log(
    'request: "30 - 5 = 25" result --- ' + calculator.subtract(30, 5)
  ); //25, "30 - 5 = 25"
  console.log(
    'request: "100 - 5 = 95" result --- ' + calculator.subtract(100, 5)
  ); //95, "100 - 5 = 95"
  console.log('request: "5 * 5 = 25" result --- ' + calculator.multiply(5, 5)); //25, "5 * 5 = 25"
  console.log(
    'request: "100 * 5 = 500" result --- ' + calculator.multiply(100, 5)
  ); //500, "100 * 5 = 500"
  console.log('request: "10 / 5 = 2" result --- ' + calculator.divide(10, 5)); //2, "10 / 5 = 2"
  console.log(
    'request: "100 / 5 = 20" result --- ' + calculator.divide(100, 5)
  ); //20, "100 / 5 = 20"
}
console.groupEnd();

console.groupCollapsed("3. - https://edabit.com/challenge/kGLhgwGaLJsCMS7wS");
console.log(
  `%c task description:
    Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

    Form the fullname by simply joining the first and last name together, separated by a space.
    Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.
    `,
  `color:blue`
);
{
  // ... code
  class Employee {
    constructor(firstname, lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.email =
        firstname.toLowerCase() + "." + lastname.toLowerCase() + "@company.com";
      this.fullname = firstname + " " + lastname;
    }
  }
  emp1 = new Employee("John", "Smith");
  emp2 = new Employee("Mary", "Sue");
  emp3 = new Employee("Antony", "Walker");
  emp4 = new Employee("Joshua", "Senoron");

  console.log("request for: John");
  console.log(emp1.firstname);
  console.log("request for: Smith");
  console.log(emp1.lastname);
  console.log("request for: John Smith");
  console.log(emp1.fullname);
  console.log("request for: john.smith@company.com");
  console.log(emp1.email);
  console.log("request for: Mary");
  console.log(emp2.firstname);
  console.log("request for: Sue");
  console.log(emp2.lastname);
  console.log("request for: Mary Sue");
  console.log(emp2.fullname);
  console.log("request for: mary.sue@company.com");
  console.log(emp2.email);
  console.log("request for: Antony");
  console.log(emp3.firstname);
  console.log("request for: Walker");
  console.log(emp3.lastname);
  console.log("request for: Antony Walker");
  console.log(emp3.fullname);
  console.log("request for: antony.walker@company.com");
  console.log(emp3.email);
  console.log("request for: Joshua");
  console.log(emp4.firstname);
  console.log("request for: Senoron");
  console.log(emp4.lastname);
  console.log("request for: Joshua Senoron");
  console.log(emp4.fullname);
  console.log("request for: joshua.senoron@company.com");
  console.log(emp4.email);
}
console.groupEnd();

console.groupCollapsed("4. - https://edabit.com/challenge/iwdZiFucR5wkQsFHu");
console.log(
  `%c task description:
Create a method in the Person class which returns how another person's age compares. Given the instances p1, p2 and p3, which will be initialised with the attributes name and age, return a sentence in the following format:

<other person name> is <older than / younger than / the same age as> me.`,
  `color:blue`
);
{
  // ... code
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(other) {
      if (other.age > this.age) {
        return other.name + " is older than me.";
      } else if (other.age < this.age) {
        return other.name + " is younger than me.";
      } else {
        return other.name + " is the same age as me.";
      }
    }
  }
  p1 = new Person("Samuel", 24);
  p2 = new Person("Joel", 36);
  p3 = new Person("Lily", 24);

  console.log("request string: Joel is older than me.");
  console.log(p1.compareAge(p2));
  console.log("request string: Lily is the same age as me.");
  console.log(p1.compareAge(p3));
  console.log("request string: Samuel is younger than me.");
  console.log(p2.compareAge(p1));
  console.log("request string: Lily is younger than me.");
  console.log(p2.compareAge(p3));
  console.log("request string: Samuel is the same age as me.");
  console.log(p3.compareAge(p1));
  console.log("request string: Joel is older than me.");
  console.log(p3.compareAge(p2));
}
console.groupEnd();

console.groupCollapsed("5. - https://edabit.com/challenge/Hgb38yhWGwJCMHbRQ");
console.log(
    `%c task description:
    Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two methods getArea() (PI*r^2) and getPerimeter() (2*PI*r) which give both respective areas and perimeter (circumference).

    For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
    Examples
    
    let circy = new Circle(11)
    circy.getArea()
    
    // Should return 380.132711084365
    
    let circy = new Circle(4.44)
    circy.getPerimeter()
    
    // Should return 27.897342763877365
    `,
  `color:blue`
);
{
    class Rectangle {
        constructor(sideA, sideB) {
          this.sideA = sideA
          this.sideB = sideB
        }
        getArea(){return this.sideA*this.sideB}
        getPerimeter(){return (this.sideA + this.sideB) *2}
      }
      
      
      class Circle {
          constructor(r){
            this.r = r
          }
          getArea(){
            return (Math.PI*this.r**2);
          }
          getPerimeter(){
            return (2*Math.PI*this.r);
          }
      }
      
      function round(number) {
        var factor = Math.pow(10, 5);
        return Math.round(number * factor) / factor;
      }
      let circo = new Circle(20);
      console.log('request for: 1256.63706');
      console.log(round(circo.getArea()));
      console.log('request for: 125.66371');
      console.log(round(circo.getPerimeter()));
      let circo1 = new Circle(2);
      console.log('request for: 12.56637');
      console.log(round(circo1.getArea()));
      console.log('request for: 12.56637');
      console.log(round(circo1.getPerimeter()));
      let circo2 = new Circle(4.4);
      console.log('request for: 60.82123');
      console.log(round(circo2.getArea()));
      console.log('request for:  27.64602');
      console.log(round(circo2.getPerimeter()));
      let randomInt = round(Math.floor(Math.random() * Math.floor(200)));
      //scroll down for spoilers that are hard to use
      console.log('additional random requests:');
      let circo3 = new Circle(randomInt);
      console.log(round(circo3.getArea()), round(Math.PI*Math.pow(randomInt,2)));
      console.log(round(circo3.getPerimeter()), round(2*Math.PI*randomInt));
      
}
console.groupEnd();

console.groupCollapsed("6. - https://edabit.com/challenge/qNMtrtizgssAQqP2b");
console.log(
    `%c task description:
    Write a class called Name and create the following attributes given a first name and last name (as fname and lname):

    An attribute called fullname which returns the first and last names.
    An attribute called initials which returns the first letters of the first and last name. Put a . between the two letters.

Remember to allow the attributes fname and lname to be accessed individually as well.
`,
`color:blue`
);
{
  // ... code
  class Name {
	constructor(fname, lname){
        this.fname = fname.substring(0,1).toUpperCase()+fname.substring(1).toLowerCase(),
        this.lname = lname.substring(0,1).toUpperCase()+lname.substring(1).toLowerCase(),
        this.fullname = this.fname+' '+this.lname,
        this.initials = this.fname.substr(0,1)+'.'+this.lname.substr(0,1)
    }

}
a1 = new Name("john", "SMITH")

console.log('request: "John"')
console.log(a1.fname)
console.log('request: "Smith"')
console.log(a1.lname)
console.log('request: "John Smith"')
console.log(a1.fullname)
console.log('request: "J.S"')
console.log(a1.initials)

a2 = new Name("sARah", "fRolliE")
console.log('request: "Sarah"')
console.log(a2.fname)
console.log('request: "Frollie"')
console.log(a2.lname)
console.log('request: "Sarah Frollie"')
console.log(a2.fullname)
console.log('request: "S.F"')
console.log(a2.initials)
}
console.groupEnd();

console.groupCollapsed("7. - https://edabit.com/challenge/HKmJFmZZCX53ff4ke");
console.log(
    `%c task description:
    Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest ice cream.

Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:
Flavors	Sweetness Value
Plain	0
Vanilla	5
ChocolateChip	5
Strawberry	10
Chocolate	10

You'll be given instance properties in the order flavor, numSprinkles.
    `,
`color:blue`
);
{
  // ... code
}
console.groupEnd();

console.groupCollapsed("8. - https://edabit.com/challenge/9zwdrfW99zmdRhibi");
{
  // ... code
}
console.groupEnd();

console.groupCollapsed("9. - https://edabit.com/challenge/7PA4jhWqDYJT4ixLp");
{
  // ... code
}
console.groupEnd();

console.groupCollapsed("10. - https://edabit.com/challenge/s5Sz2ovKsvtGxNGgn");
{
  // ... code
}
console.groupEnd();
