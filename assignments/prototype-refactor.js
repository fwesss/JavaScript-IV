/*
 Prototype Refactor

 1. Copy and paste your code or the solution from yesterday

 2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements
 should still return what is expected of them.
 */

class GameObject {
  constructor(createdAt, name, dimensions, status) {
    this.createdAt = createdAt;
    this.name = name;
    this.dimensions = dimensions;
    this.status = status;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

/*
 === CharacterStats ===
 * healthPoints
 * takeDamage() // prototype method -> returns the string '<object name> took damage.'
 * should inherit destroy() from GameObject's prototype
 */

class CharacterStats extends GameObject {
  constructor(createdAt, name, dimensions, healthPoints, status) {
    super(createdAt, name, dimensions, status);
    this.healthPoints = healthPoints;
  }

  takeDamage(damagePoints = 1) {
    this.healthPoints = this.healthPoints - damagePoints;
    return { message: `${this.name} took ${damagePoints} damage. Health is now ${this.healthPoints}`, damagePoints };
  }

  attack() {
    return this.damage;
  }
}


/*
 === Humanoid (Having an appearance or character resembling that of a human.) ===
 team
 weapons
 language
 greet() // prototype method -> returns the string '<object name> offers a greeting in
 <object language>.'
 should inherit destroy() from GameObject through CharacterStats
 should inherit takeDamage() from CharacterStats
 */

class Humanoid extends CharacterStats {
  constructor(attrs) {
    super(attrs.createdAt, attrs.name, attrs.dimensions, attrs.healthPoints, attrs.status);
    this.team = attrs.team;
    this.weapons = attrs.weapons;
    this.language = attrs.language;
    this.strength = attrs.strength;
    this.damage = Math.floor(Math.random() * Math.floor(this.strength));
  }

  greet() {
    return `${this.name} offers a greeting in ${this.language}`;
  }
}


/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage().message); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor
// function. * Give the Hero and Villains different methods that could be used to remove health
// points from objects which could result in destruction if health gets to 0 or drops below 0; *
// Create two new objects, one a villain and one a hero and fight it out with methods!

class Villain extends Humanoid {
  constructor(attrs) {
    super(attrs);

    this.taunt = 'You can never defeat me!';
  }
}


class Hero extends Humanoid {
  constructor(attrs) {
    super(attrs);

    this.cheeseyRetort = 'ha Ha! Time to defeat Evil!';
  }
}


const evilVillain = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 6,
    width: 8,
    height: 24,
  },
  healthPoints: 25,
  name: 'Gorgoth',
  team: 'Super Evil Gang',
  weapons: [
    'club',
    'mace',
  ],
  language: 'English',
  strength: 8,
  status: 'alive',
});

const superHero = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 5,
    height: 8,
  },
  healthPoints: 32,
  name: 'Super Dude',
  team: 'Super Good Crew',
  weapons: [
    'sword',
    'yo-yo',
  ],
  language: 'English',
  strength: 12,
  status: 'alive',
});

console.log(evilVillain.taunt);
console.log(superHero.cheeseyRetort);

const characters = [evilVillain, superHero];
const random = Math.random() >= 0.5 ? 1 : 0;

let activeChar = characters[random];
let inactiveChar = characters.reverse()[random];


while (activeChar.status === 'alive' && inactiveChar.status === 'alive') {
  activeChar = characters[random];
  inactiveChar = characters.reverse()[random];

  console.log(`${activeChar.name} attacks!`);
  const damage = inactiveChar.takeDamage(activeChar.attack());
  console.log(`${inactiveChar.name} took ${damage.damagePoints} in damage and his health is now ${inactiveChar.healthPoints}!\n`);

  if (activeChar.healthPoints < 0) {
    console.log(activeChar.destroy());
    activeChar.status = 'dead';
  } else if (inactiveChar.healthPoints < 0) {
    console.log(inactiveChar.destroy());
    inactiveChar.status = 'dead';
  }
}
