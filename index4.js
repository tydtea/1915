function fn(a) {
    return function (b) {
        return a+b;
    }
}
console.log(fn(10333)(20333));
// 原型 原型