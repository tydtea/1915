const obj = {
    age:121
}
function fn() {
    console.log(this.age);
}
// fn.apply(obj)
// fn.bind(obj)();
const myFn = fn.bind(obj);
myFn();
撒打算打算阿斯顿撒asdsa