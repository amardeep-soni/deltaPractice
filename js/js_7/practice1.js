// Q. write a function that prints "Hello world" 5 times at intervals of 2s each

let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id)
}, 10000);