import {todosKeys} from "./service.js"
import {container} from "./dom.js"
import {swiper} from "./main.js"

const getTodosFromLS = () =>{
  return JSON.parse(localStorage.getItem("todos"));
}

const setTodosToLS = (todos) =>{
  localStorage.setItem("todos", JSON.stringify(todos));
}

const printToddLS = (todos) => {
  todos.forEach(todo => {
    const elementNewTodo = `
    <div class="swiper-slide todo ${todo[todosKeys.is_complited] ? 'complited' : ' '}" id="${todo[todosKeys.id]}">
          <h6 class="todo_title">${todo[todosKeys.text]}</h6>
          <div class="todo_buttons">
            <a href="#" class="todo_complited">&#x2713;</a>
            <a href="#" class="todo_delete">&#x2717;</a>
          </div>
        </div>
  `;
  container.insertAdjacentHTML('beforeend', elementNewTodo); 
  })
  swiper.update();
}


export {getTodosFromLS, setTodosToLS, printToddLS};