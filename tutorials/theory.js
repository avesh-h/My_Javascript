// Javascript

//so javasctipt is single threaded language
// That means it have only one call stack
//And callstack is where your javascript code is executed line by line in synchronously and give the result
//But what is special thing about the other language is that some languages are the multithread language that means they have multiple callstack based on multiple thread
//But in javascript instead having multiple callstack we have single stack and we're dealing the operation that requires the multithread by asynchronous behaviour of the javascript

//line 1 ->synchronous code
//line 2 ->synchronous code
//line 3 -> asynchronous code that doing lot of works , so it takes time to complete
//line 4 -> synchronous code

// ----------------------------Asynchronous theory-----------------------------

//So what's gonna happen in js is have simply have blocking sync code in line 1 and line 2 after that there is asynchronous task that do lot of works and methods and calculation stuff so because of that js will be block and client might be stuck in website and cannot do something further ,inshort the line 4 code will be execute after line 3 completes so for avoid that javascript use Non block asyncronous behaviour ,not like other languages like we give big task to the other thread and callstack ,In javascript it just resolve in background and callstack keep moving to the next line of the code and when the asynchronous operation is resolve than it goes to the callback queue and event loop check there is any code in callstack and if callstack is empty than event loop take code from queue and pass it to the callstack and now finally callstack execute that code.

// Asynchronous behaviour example

console.log("1");

console.log("2");

setTimeout(() => {
  console.log("3");
}, 2000);

console.log("4");

// JS Runtime parts

//Callstack

//WebAPi

//Callback queue

//Event Loop

// process

//SO in example first console 1 and 2 will go to the call stack and it will executed and removed from the callstack, when it recieve the timeout function it the callstack sees it will require time to resolve so it will give to the webApi , then callstack move to the next line of the code and console 4 will be executed and removed from the call stack , when the time will be resolve from the webapi of settimeout then the callback function that settimeout have it will move to the callback queue and event loop will see that there is some function in the callback queue that need to execute and callstack is empty so it will give to callstack and call stack execute that callback function code.
