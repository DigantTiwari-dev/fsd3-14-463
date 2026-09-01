import {EventEmitter} from 'node:events'

const sayHi = (name)=>{
    console.log(`${name} logged in`);
};

const task = new EventEmitter();

task.once("greet", ()=>{
    console.log("System started");
});

task.on("greet",sayHi);

task.on("greet",(name)=>{
    console.log(`${name} starts working`);
});

task.on("greet",(name)=>{
    console.log(`${name} stop working`);
});

task.once("exit",(name)=>{
    console.log(`system shutdown by ${name}`);
});

task.emit("greet","Rahul Singh");
console.log();
task.off("greet",sayHi);
task.emit("greet","Rohit");
console.log();
task.emit("exit","manager");
console.log("total listener",task.listenerCount("greet"));
task.removeAllListeners("greet");