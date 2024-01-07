console.log(
    "After a delay of 1 second, undefined is logged to the console."
);
console.log(
    "While the setTimeout function uses the object.logMessage as a callback, still, it invokes object.logMessage as a regular function, rather than a method."
);
console.log(
    "And during a regular function invocation this equals the global object, which is a window in the case of the browser environment."
);
console.log(
    "That's why console.log(this.message) inside logMessage method logs window.message, which is undefined."
);