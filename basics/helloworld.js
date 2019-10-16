

const print = console.log;


function Person(name, age) {
    this.name = name ? name: 'N/A';
    this.age = age ? age : 'N/A';
}


Person.prototype.sayName = function() {
    console.log(`${this.name} is ${this.age} years old`)
}


let john = new Person('James', 10);
// john.sayName();


//percent calculate

function getScore(total, correct) {
    const score =  (total / correct) * 100
    print(`You scored a ${score}%`)
}

getScore(15, 20);

let isAccountLocked = true;


// if (isAccountLocked) {
//     console.log('Account is locked')
// } else {
//     console.log('account is not locked')
// }