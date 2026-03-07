import {addTodo, complitedTodoById, deleteTodo} from "./service.js"
import {swiper} from "./main.js"


const container = document.querySelector('.swiper-wrapper');
const form = document.querySelector(".form");

const initTodoHandlers = (todos) => {
  form.addEventListener("click",(e)=>{
  e.preventDefault();
  const btnAdd = e.target.closest(".button-create");
  if(btnAdd){
    const input = form.querySelector(".input");
    const text = input.value;
    if(text) {
      addTodo(todos, text);
      input.value = ""
    }
  }
})

container.addEventListener("click", e => {
  const target = e.target;
  
  
  const btnComplete = target.closest(".todo_complited");
  const btnDelete = target.closest(".todo_delete");

  if (btnComplete) {
    e.preventDefault();
    const todoElement = btnComplete.closest(".todo");
    const id = Number(todoElement.id); 
    complitedTodoById(todos, id);
  }

  if (btnDelete) {
    e.preventDefault();
    const todoElement = btnDelete.closest(".todo");
    const id = Number(todoElement.id);
    deleteTodo(todos, id);
    todoElement.remove(); 
    swiper.update(); 
  }
});

}


export {initTodoHandlers, container, form}