const square = function(x) {
    return x * x;
}

console.log(square(8));

/*const squareArrow = (x) => {
    return x * x;
}*/

const squareArrow = (x) => x * x;

console.log(squareArrow(10));

const fullName = 'Mike Smith';

const firstName = (name) => {
    return name.split(' ')[0];
};

const firstNameTwo = (name) => name.split(' ')[1];

console.log(firstName(fullName));
console.log(firstNameTwo(fullName));

