"use strict";
console.log("Typescript basic");
// Kiểu dữ liệu number
let age = 5;
// Kiểu dữ liệu string
let fullName = "Minh Thu";
// Kiểu dữ liệu null
let nullVariable = null;
// Kiểu dữ liệu undefine
let undefineVariable = undefined;
// Trong ts ko có kiểu dữ liệu NaN
// Kiểu dữ liệu boolean: kiểu đúng sai
let isCheck = true;
// array
// giả sử thầy muốn khai báo 1 mảng các số
let numbers = [1, 2, 3, 4, 5];
// giả sử thầy muốn khai báo mảng sinh viên
let students = ["hoa", "minh", "hong"];
let student = {
    name: "hoa",
    address: "Ha Noi",
    age: 25
};
// giả sử thầy muốn tạo 1 mảng chứa các sinh viên
let students1 = [{
        name: "hoa",
        address: "hn",
        age: 20
    },
    {
        name: "thu",
        address: "dn",
        age: 21
    }];
// kiểu dữ liệu any (bất kì)
// mình làm việc ts nên hạn chế dùng any.
let a = 5;
a = "hoa";
// function
// 1 kiểu dữ liệu cho tham số nhận vào
// 2 kiểu dữ liệu trả về của hàm
// đối với function mà không cần giá trị trả về thì bọn em để kiểu dữ liệu void
function sayHello() {
    console.log("xin chào!");
}
sayHello();
// function cần giá trị trả về
function tinhtong(a, b) {
    return a + b;
}
tinhtong(1, 5);
