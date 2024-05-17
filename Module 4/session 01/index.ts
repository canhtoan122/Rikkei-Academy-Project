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
// union
let ourUnion:number | string =5;
ourUnion = "5";
// type alias (kiểu bí danh)
type Code=string|number;
function statusCode(code:Code):void{
    console.log(`Status code is ${code}`);
}
statusCode(404);
statusCode("404");

type CarColor=String;
type CarType = string;
type Car = {
    color:CarColor,
    type:CarType,
}
const car:Car={
    color:"green",
    type:"honda",
}
// unknown-kiểu không xác định
function test(params:unknown){
    // Giả sử thầy đi sử lí cái tham số truyền vào
    // Khi dùng kiểu dữ liệu unknown thì phải đi kiểm tra kiểu dữ liệu trước khi sử lí
    if(typeof params == "string"){
        let result = params.toUpperCase();
        console.log(result);
    }else{
        console.log("Giá trị truyền vào không phải string");
        
    }
}
test("hello typescript!");
// never: dùng trong các function xử lí các vòng lập vô tận, dùng để đếm
function never():never{
    let count = 0;
    while(true){
        count++;
        console.log("Giá trị biến đếm count", count);
    }
}
// type tuples - bộ dữ liệu(bộ fix cứng): tạo bộ khung cho dữ liệu mà không được phép sửa đổi
let ourTuples:(number|string)[]=['1', 1];
let ourTuples1:[string, number, boolean]=["hoa", 1, true];
// type enum - liệt kê
enum Role{
    ADMIN,
    USER
}
type Student2={
    name:string,
    age:number,
    role:Role.ADMIN
}
let student2:Student2={
    name:"minh thu",
    age: 25,
    role:0
}
// type intersection kiểu kết hợp &
type A ={
    name:string,
    id: number
}
type B={
    address:string,
}
type C = A&B;
let person:C={
    name:"hoa",
    id:5,
    address:"ha noi"
}