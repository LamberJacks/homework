// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.
const person = {
  name: "Максим", 
  age: 18, 
  isProgrammer: true,
  isStudent: true, 
}
const { name, age, isProgrammer, isStudent } = person
console.log(`Имя: ${name}`);
console.log(`Возраст: ${age}`);
console.log(`Программист? ${isProgrammer ? "ДА!" : "НЕТ"}`);
console.log(`Студент? ${isStudent ? "ДА!" : "НЕТ"}`);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.
const isEmpty = obj => {
  for (let key in obj) {
    return false;  
  }
  return true;     
}
// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.
const task = {
  title: null, 
  description: null,
  isCompleted: null, 
}

const modifications = {
  title : "task1", 
  description: "descrTask1",
  isCompleted: false,  
} 


function  cloneAndModify(object, modifications) {
  const cloneTask = {...object, ...modifications};
  return cloneTask;
} 

const cloneTask = cloneAndModify(task, modifications);

for (const key in cloneTask){
  console.log(`${key}: ${cloneTask[key]}`);
}
// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};


const callAllMethods = obj => {
  for (const key in obj){
    if(typeof obj[key] == "function"){
      obj[key]()
    }
  }
}

callAllMethods(myObject);