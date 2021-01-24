const add = (a, b) => {
    //console.log(arguments);
    return a + b;
}

console.log(add(4, 5));

const user = {
    name: 'Andrew',
    city: ['Philidephia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.city.map((cities) => this.name + ' has lived in ' + cities);
    }
};

console.log(user.printPlacesLived());

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
}

console.log(multiplier.multiply());