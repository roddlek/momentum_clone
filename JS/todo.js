const todoForm = document.getElementById('todo-form');
const todoInput = todoForm.querySelector('input');
const todoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";

let todos = [];

function saveTodos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); //(key, value -> string으로 저장)
}

function deleteTodo(e){
    const li = this.parentElement; //this의 부모요소
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}

function paintTodo(newTodo){
    const li = document.createElement('li');
    li.id = newTodo.id;
    const span = document.createElement('span');
    span.innerText = newTodo.text;
    const button = document.createElement('button');
    button.innerText = '❌'
    button.addEventListener('click', deleteTodo);

    li.appendChild(span); //노드에 자식 객체 추가
    li.appendChild(button);
    //li.append(span, button);
    todoList.appendChild(li);
}

function handleToDoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    }

    todos.push(newTodoObj); //todos라는 [array]에 newTodo 값 넣기
    paintTodo(newTodoObj); //newTodo 값 화면에 출력하기
    saveTodos() //localStorage에 저장
}

todoForm.addEventListener('submit', handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY)

if(savedTodos !== null){
    const pasreSavedTodos = JSON.parse(savedTodos);
    todos = pasreSavedTodos; //지난 value에 대한 복원
    pasreSavedTodos.forEach(paintTodo);
}