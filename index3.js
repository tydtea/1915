function fn(a) {
    return function (b) {
        return a+b;
    }
}
console.log(fn(10)(20));
// 原型 原型