const now = new Date();

// let lee = {
//     name: '지혜',
//     address: '인천',
// }

// let lim = {
//     name: '도훈',
//     address: '수원',
// }

let sum = {
    a: 1,
    b: 2,
}

function Address(name, address) {
    this.name = name;
    this.address = address;
}

let lee = new Address('지혜', '인천');
let lim = new Address('도훈', '수원');

console.log(lee);
console.log(lim);

// function Calculator(a, b) {
//     // let a = 1;
//     // let b = 2;
//     return a + b;
// }

// 생성자는 new를 사용해야 호출할 수 있다 ?

function Cal() {
    this.a = 1;
    this.b = 2;
    this.sum = function () {
        return this.a + this.b;
    }
}
const c = new Cal();
console.log(c.sum());

// Calculator(1, 2);
// Calculator(2, 2);
// Calculator(3, 2);

// console.log(now);
// console.log(typeof now);

// console.log('Year:' + now.getFullYear());
// console.log('month:' + now.getMonth());
// console.log(now.toLocaleString());