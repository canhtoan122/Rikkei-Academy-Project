console.log("Typescript basic");
// Kiểu dữ liệu number
let age:number=5;
// Kiểu dữ liệu string
let fullName:string="Minh Thu";
// Kiểu dữ liệu null
let nullVariable:null=null;
// Kiểu dữ liệu undefine
let undefineVariable:undefined=undefined;
// Trong ts ko có kiểu dữ liệu NaN
// Kiểu dữ liệu boolean: kiểu đúng sai
let isCheck:boolean=true;
// array
// giả sử thầy muốn khai báo 1 mảng các số
let numbers:number[]=[1, 2, 3, 4, 5];
// giả sử thầy muốn khai báo mảng sinh viên
let students:string[]=["hoa", "minh", "hong"];
// khai báo kiểu object
// khai báo kiểu dữ liệu cho object
// c1
// type Student={
//     name:string,
//     address:string,
//     age:number
// }
// c2
interface Student{
    name:string,
    address:string,
    age:number
}
let student:Student={
    name:"hoa",
    address:"Ha Noi",
    age:25
}
// giả sử thầy muốn tạo 1 mảng chứa các sinh viên
let students1:Student[]= [{
    name:"hoa",
    address:"hn",
    age:20
},
{
    name:"thu",
    address:"dn",
    age:21
}];
// kiểu dữ liệu any (bất kì)
// mình làm việc ts nên hạn chế dùng any.
let a:any=5;
a="hoa";
// function
// 1 kiểu dữ liệu cho tham số nhận vào
// 2 kiểu dữ liệu trả về của hàm
// đối với function mà không cần giá trị trả về thì bọn em để kiểu dữ liệu void
function sayHello(): void {
    console.log("xin chào!");
}
sayHello();
// function cần giá trị trả về
function tinhtong(a:number, b:number):number{
    return a+b
}
tinhtong(1,5);