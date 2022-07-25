const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

//반복되는 string은 대문자 변수로 고정하는 습관 -> 오타방지
const CLASSNAME_HIDDEN = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerHTML = `Hello ${username}💫`;
    greeting.classList.remove(CLASSNAME_HIDDEN);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
//console.log(savedUsername);

if(savedUsername === null){
    loginForm.classList.remove(CLASSNAME_HIDDEN);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    paintGreetings(savedUsername);
}