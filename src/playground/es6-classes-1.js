class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi! ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor() {
        return !!this.major;
    }

    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`;
        }

        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasLocation() {
        return !!this.homeLocation;
    }

    getGreeting() {
        let greet = super.getDescription();
        
        if (this.hasLocation()) {
            greet += ` I'm visiting from ${this.homeLocation}`;   
        }
        return greet;
    }
}

const me = new Traveler('Andrew', 23, 'Kamthi');
const third = new Traveler();

console.log(me.getGreeting());
console.log(third.getGreeting());
