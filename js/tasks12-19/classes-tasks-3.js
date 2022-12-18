console.groupCollapsed("https://edabit.com/challenge/2FF7RKw9RLwc3EBY9");
{
  // ... code
  class Challenge {
    constructor(id, level) {
      this.id = id;
      this.level = level;
    }
    get points() {
      switch (this.level) {
        case "VE":
          return 5;
        case "EA":
          return 10;
        case "ME":
          return 20;
        case "HA":
          return 40;
        case "VH":
          return 80;
        case "EX":
          return 120;
        default:
          return 0;
      }
    }
  }

  class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }
    newSolvedChallenge(challenge) {
      this.log.push(challenge.id);
      this.xp += challenge.points;
    }
  }

  const user2 = new User("Steve", 0, []);
  const user1 = new User("Madam", 0, []);

  const challenge1 = new Challenge((id = 1), (level = "VE"));
  const challenge2 = new Challenge((id = 2), (level = "EA"));
  const challenge3 = new Challenge((id = 3), (level = "ME"));
  const challenge4 = new Challenge((id = 4), (level = "HA"));
  const challenge5 = new Challenge((id = 5), (level = "VH"));
  const challenge6 = new Challenge((id = 6), (level = "EX"));

  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);
  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

  // Test user1
  console.log(user1.name, "Madam");
  console.log(user1.xp, 165);
  console.log(user1.log, [1, 4, 6]);
  // Test user2
  console.log(user2.name, "Steve");
  console.log(user2.xp, 110);
  console.log(user2.log, [5, 3, 2]);
  // Test challenges
  console.log(challenge1.id, 1);
  console.log(challenge2.level, "EA");
  console.log(challenge3.points, 20);
  console.log(challenge4.id, 4);
  console.log(challenge5.level, "VH");
  console.log(challenge6.points, 120);
  // Trivial tests
  console.log(user1.xp > user2.xp, true);
  console.log(challenge6.points < challenge1.points, false);
}
console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/ifDM26p25bqS8EsFu");
{
  // ... code
}
console.groupEnd();

// class Player {
//   #health;
//   #maxHP;
//   #en;
//   #maxEn;
//   constructor(name, health, en){

//   }
//   get hp(){
//     return this.#health
//   }
// }




console.log('----FIGHT!----')
//player class exists
const alice = new Player('Alice',110,50,10);
const bob = new Player('Bob',100,60,20);
console.log('Does our Player class exist?')
console.log(bob instanceof Player && alice instanceof Player, true,`Alice and Bob don't seem to be instances of the player class.`)

//learn skill
console.log("\n----\nCan our competitors learn new skills?")
console.log(typeof alice.learnSkill,'function','Missing `learnSkill` method!')

//skill is function
console.log('\n----\nDoes the learnSkill method allow us to add a skill?')
alice.learnSkill('fireball',{
    damage: 23,
    penetration: 1.2,
    heal: 0,
    cost: 15,
    desc: 'a firey magical attack'
});
console.log(typeof alice.fireball,'function','Could not learn skill "Fireball"!')

//cast skill
console.log('\n----\nCan we cast our new skill?')

console.log(alice.fireball(bob),'Alice used fireball, a firey magical attack, against Bob, doing 18.68 damage! Bob is at 81.32% health.','Using Fireball returned the wrong string!')

//too high energy cost?
console.log('\n----\nWhat about skills with too high an energy cost?')
bob.learnSkill('superbeam',{
	damage:200,
  penetration:50,
  heal:50,
  cost:75,
  desc: "an overpowered attack, pls nerf"
})

console.log(bob.superbeam(alice),`Bob attempted to use superbeam, but didn't have enough energy!`,'Bob should return that he cannot use this skill!')

//can get a player's HP percent and energy
console.log("\n----\nAfter that devastating attack, let's check in on Alice and Bob:")
console.log(bob.hpPerc+'% health','81.32% health',`Bob should be at 81.32% health`)
console.log(alice.en+' energy','35 energy',`Alice's energy should be 35.`)

//Combo attack
console.log("\n----\nBut wait! Bob's back in action!")
bob.learnSkill('Meteor Strike',{
	damage:118,
  penetration:4,
  heal:5,
  cost:20,
  desc: "an attack that basically ends the game (gg)"
})

console.log(bob['Meteor Strike'](alice),"Bob used Meteor Strike, an attack that basically ends the game (gg), against Alice, doing 110.92 damage! Bob healed for 5 health! Alice died. ")

console.log('\n----\nAre the four health and energy properties private?');
['hp','maxHp','en','maxEn'].forEach(prop=>{
	console.log(bob['#'+prop],undefined,`Property #${prop} should not be publically accessible!`)
})