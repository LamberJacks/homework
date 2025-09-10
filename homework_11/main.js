const Users = {
  Max: {
    age: 18,
    isAdmin: true
  },

  Alex: {
    age: 19,
    isAdmin: false
  },
  sayHello(name) {
    console.log(`Hello ${name}!`)
  }
}

console.log(Users.sayHello('Max'))

const ArrayUsers = [{ name: "John", age: 23, isAdmin: false }, { name: 'Alex', age: 33, isAdmin: true }, { name: 'Max', age: 21, isAdmin: false }]

let DefaultUser = 0;

for (let i = 0; i < ArrayUsers.length; i++) {
  if (ArrayUsers[i].isAdmin === false) {
    DefaultUser += 1
  }
}

console.log(DefaultUser)