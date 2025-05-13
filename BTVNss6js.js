//B1

// let a = prompt(`Nhập a `);
// let b = prompt(`Nhập b `);

// function sum(number1, number2) {
//     if (number1.trim() === "" || number2.trim() === "") {
//         return ("error");
//     }
//     number1 = +number1;
//     number2 = +number2;
//     if (Number.isNaN(number1) || Number.isNaN(number2) || !Number.isInteger(number1) || !Number.isInteger(number2)) {
//         return ("error");
//     }
//     return number1 + number2;
// }
// console.log(sum(a, b));

//B2
// let n = prompt(`Nhập n `);


// function isPrime(number) {
//     if (Number.isNaN(number)
//         || number.trim() === "") {
//         return ("error");
//     }
//     number = +number;
//     if (!Number.isInteger(number)) {
//         return ("error");
//     }
//     if (number < 2) {
//         return (`${n} không phải là số nguyên tố`);
//     } else {
//         for (i = 2; i <= Math.sqrt(number); i = i + 1) {
//             if (number % i === 0) {
//                 return (`${n} không phải là số nguyên tố`);
//             }
//         }
//         return (`${n} là số nguyên tố`);
//     }
// }
// console.log(isPrime(n));

//B3
//toString phải có dấu ngoặc()
//vòng lặp for phải có let i = 0
//return luôn phải ở ngoài vòng lặp
// let loop = true;
// let arr = [];


// while (true) {
//     let n = prompt(`Nhập n (nhập result để tra kết quả)`);

//     if (n === "result") {
//         console.log(`Số lớn nhất trong dãy là: ${max(n)}`);
//         loop = false;
//         break;
//     }
//     if (n.trim() === "") {
//         console.log("error");
//     }
//     if (n === "0") {
//         n = +n;
//         n === 0;
//         arr.push(n);
//         console.log(n);
//         max;
//     }
//     n = +n;
//     if (!Number.isInteger(n || Number.isNaN(n))) {
//         console.log("error");
//     }
//     else {
//         arr.push(n);
//         console.log(n);
//         max;
//     }
// }


// function max() {
//     let max = arr[0];
//     for (let i = 0; i <= arr.length - 1; i = i + 1) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     } return max;
// }


//B4
//Cho người dùng nhập vào số bất kỳ 
//mỗi lần nhập sẽ push thêm vào mảng
//đếm những số lớn hơn 0
//xây dựng hàm function với số lớn hơn 0
// let loop = true;
// let arr = [];

// while (loop) {
//     let n = prompt(`Nhập n (nhập stop để dừng)`);
//     if (n.toLowerCase() === "stop") {
//         loop = false;
//         console.log(`có ${z()} số phần tử nguyên dương trong mảng`);
//         break;
//     }
//     if (n.trim() === "") {
//         console.log("error");
//     }
//     n = +n;
//     if (Number.isNaN(n)) {
//         console.log("error");
//     }
//     if (n === 0) {
//         arr.push(n);
//         console.log(n);
//     }
//     if (n) {
//         arr.push(n);
//         console.log(n);
//     }
// }

// function z() {
//     let count = 0;
//     for (let i = 0; i <= arr.length - 1; i = i + 1) {
//         //kiểm tra điều kiện của trong mảng của i chứ k phải n
//         if (Number.isInteger(arr[i]) && arr[i] > 0) {
//             count = count + 1;
//         }
//     }
//     return count;
// }

//B5
// let loop = true;
// let arr = [];
// while (loop) {
//     let n = prompt(`Nhập n (nhập stop để dừng)`);
//     if (n === "stop") {
//         loop = false;
//         console.log("Dừng");
//         break;
//     }
//     if (n) {
//         arr.push(n);
//         console.log(`${n}`);
//         console.log(`${isPalindrome(n)}`);
//     }
// }
// function isPalindrome(arr) {
//     arr = arr.toLowerCase();
//     let reverseString = arr.split("").reverse().join("");
//     return reverseString === arr;
// }

//B6
// chia ký tự, rồi in hoa thứ tự đầu tiên sau đó gộp lại
// let loop = true;
// let arr = [];
// while (loop) {
//     let n = prompt(`Nhập chuỗi ký tự (nhập stop để dừng)`);

//     if (n === "stop") {
//         console.log("Dừng");
//         loop = false;
//         break;
//     }
//     if (n) {
//         arr.push(n);
//         console.log(`${convert(n)}`)
//     }
// }

// function convert(arr) {
//     arr = arr.split("");
//     arr[0] = arr[0].toUpperCase();
//     return arr.join("");
// }

//B7

// let loop = true;
// let arr = [];
// while (loop) {
//     let n = prompt(`nhập n vào mảng(nhập stop để dừng) `);

//     if (n.toLowerCase() === "stop") {
//         loop = false;
//         console.log("Dừng")
//         console.log(sochan(arr));
//         break;
//     }
//     if (n.trim() === "") {
//         console.log("error");
//     }
//     n = +n;
//     if (Number.isNaN(n)) {
//         console.log("error");
//     }
//     if (n || n === 0) {
//         arr.push(n);
//         console.log(n);
//     }
// }

// function sochan(arr) { 
//     let result = [];
//     for (let i = 0; i <= arr.length - 1; i = i + 1) {
//         if (arr[i] % 2 === 0 && arr[i] > 0) {
//             result.push(arr[i] ** 2);
//         }
//     } return result;
// }

//B8
// let loop = true;

// let arr = [];
// while (loop) {
//     let n = prompt(`Nhập số vào mảng(bấm stop để dừng) `);
//     if (n.toLowerCase() === "stop") {
//         console.log("Dừng");
//         loop = false;
//         console.log(sole(arr));
//         break;
//     }
//     if (n.trim() === "") {
//         console.log("error");
//     }
//     n = +n;
//     if (!Number.isNaN(n)) {
//         console.log("error");
//     }
//     if (n) {
//         arr.push(n);
//         console.log(n);
//     }
// }

// function sole(arr) {
//     let arrsole = [];
//     for (let i = 0; i <= arr.length; i = i + 1) {
//         if (Number.isInteger(arr[i]) && arr[i] > 0 && arr[i] % 2 !== 0) {
//             return arrsole.push(arr[i]);
//         }
//     }
// }

//B9

arr = [1, 2, 3, 4, 5, 6]; 
part = 3;
function splitout(arr, part) {
    let newarr = [];
    let size = Math.ceil(arr.length / part);
    for (let i = 0; i <= arr.length - 1; i = i + size) {
        newarr.push(arr.slice(i, size + i));
    } return newarr;
}
console.log(splitout(arr, part));