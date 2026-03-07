import {getTodosFromLS, printToddLS} from "./storage.js"
import {initTodoHandlers} from "./dom.js"

export const swiper = new Swiper('.swiper', {
  direction: 'vertical',
  slidesPerView: 'auto',  
});

const todos = getTodosFromLS() || [];
if(todos) printToddLS(todos);
initTodoHandlers(todos);

