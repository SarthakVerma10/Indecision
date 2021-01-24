var nameVar = 'Andrew';
nameVar = 'Mike';
console.log('nameVar', nameVar);

const nameConst = 'Frank';

console.log('nameConst', nameConst);


//Block scoping

var fullName = 'Andrrew Name';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    console.log(firstName);
}