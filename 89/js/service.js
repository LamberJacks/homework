import {setTodosToLS} from "./storage.js"
import {container} from "./dom.js"
import {swiper} from "./main.js"


  export const todosKeys = {
  id: 'id', 
  text: 'text', 
  is_complited: 'is_complited'
}


function addTodoId(todos){
  return todos.reduce((mx, todo) => { return Math.max(mx, todo.id)}, 0) + 1
}

function addTodo(todos, str){
  const newTodo = {
    [todosKeys.text]: str, 
    [todosKeys.id]: addTodoId(todos), 
    [todosKeys.is_complited]: false
  }
  todos.push(newTodo);
  setTodosToLS(todos);

  const elementNewTodo = `
    <div class="swiper-slide todo ${newTodo[todosKeys.is_complited] ? 'complited' : ' '}" id="${newTodo[todosKeys.id]}">
          <h6 class="todo_title">${newTodo[todosKeys.text]}</h6>
          <div class="todo_buttons">
            <a href="#" class="todo_complited">&#x2713;</a>
            <a href="#" class="todo_delete">&#x2717;</a>
          </div>
        </div>
  `;
  container.insertAdjacentHTML('afterbegin', elementNewTodo);
  swiper.update();
}

function complitedTodoById(todos, todoId) {
  const todo = todos.find(val => val[todosKeys.id] === todoId);
  
  if (!todo) {
    console.error(`Todo with id ${todoId} not found`);
    return null;
  }

  todo[todosKeys.is_complited] = !todo[todosKeys.is_complited];
  setTodosToLS(todos);
  const elementTodo = container.querySelector(`[id="${todoId}"]`);
  if (elementTodo) {
    elementTodo.classList.toggle("complited", todo[todosKeys.is_complited]);
  }

}


function deleteTodo(todos, todoId){
  const todoIndx = todos.findIndex(todo => {
    return todo[todosKeys.id] == todoId;
  })
  if(todoIndx == -1) {
    console.error(`Todos with in id ${todoId} not found`);
    return null;
  } 
  todos.splice(todoIndx,1);
  setTodosToLS(todos);
}


export {addTodo, complitedTodoById, deleteTodo}