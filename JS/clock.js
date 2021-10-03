const clock = document.querySelector('#clock');
console.log(clock);

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    //document.querySelector('#clock').innerHTML = date.getHours() + ' : ' + date.getMinutes() + ' : ' + date.getSeconds();
    document.querySelector('#clock').innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

getClock();
setInterval(getClock, 1000);
//setTimeout(sayHello, 1000);