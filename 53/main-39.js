// Задание 1.
// Дан массив пользователей:
const users = [
  { name: 'Alex', age: 24, isAdmin: false },
  { name: 'Bob', age: 13, isAdmin: false },
  { name: 'John', age: 31, isAdmin: true },
  { name: 'Jane', age: 20, isAdmin: false },
]

users.push({ name: 'Ann', age: 19, isAdmin: false });
users.push({ name: 'Jack', age: 43, isAdmin: true });

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.
const getUserAverageAge = users => {
  let count = 0;
  let sum =0;
  users.forEach(user => {
    count += 1;
    sum += user.age;
  })
  return sum/count;
}

const avgAge = getUserAverageAge(users) ;
console.log(avgAge);
// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.
function getAllAdmins(users){
  const result = [];
  users.forEach(user => { if(user.isAdmin) result.push(user)});
  return result;
}

const adminArr = getAllAdmins(users);
console.log(adminArr);
// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.
function first(arr, n){
  if (n == 0) return [];
  if ((n == undefined) && (arr.length != 0)) return [arr[0]];
  const result = [];
  for(let i = 0; i < n; i++){
    result.push(arr[i]);
  }
  return result;
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const resArr = first(arr, 5);
console.log(resArr);
