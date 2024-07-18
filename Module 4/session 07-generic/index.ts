// khai báo 1 mảng chỉ chứa number
let numbers:Array<number>=[2,3,4,5];
function testGeneric(params:number):number{
    return params;
}
let test1 = testGeneric(5);
function testGeneric2<A,B>(a:A,b:B):[A, B]{
    return [a,b];
}
let test2 = testGeneric2("5", 9);
// gộp 2 object
// interface OBJ1{
//     name:string,
//     id:number,
// }
// interface OBJ2{
//     age:number,
// }
function merge<T, U> (obj1: T, obj2: U){
    return {...obj1, ...obj2};
}
let merge1 = merge({name:"binh", id:5, address:"hn"}, {age:25});
console.log("merge1", merge1);
// tạo hàm xử lí 1 mảng chứa các phần tử và lấy ra phần tử cuối cùng trong mảng
function generic<X> (a: X[]):X{
    return a[a.length-1];
}
let generic1 = generic([1,3,5]);

// áp dụng từ khóa extend
function merge2<T extends {firstname:string}, U extends {lastname:string}> (obj1: T, obj2: U){
    return {...obj1, ...obj2, fullname:`${obj1.firstname}+${obj2.lastname}`};
}
let test5 = merge2({ firstname:"binh" }, { lastname: "nguyen van" });
// extends đối với interface
interface Lengthy{
    length:number,
}
function count<T extends Lengthy>(params: T): [T, string]{
    let text = "";
    if(params.length == 1){
        text = "Binh Tommy";
    }else if(params.length > 1){
        text = "Quoc Vuong";
    }
    return [params, text];
}
let count1 = count(["a", "b"]);
// đối với type alias (bí danh) áp dụng với generic
type Alias<T>={
    value:T;
}
let variable:Alias<string>={
    value:"binh tommy",
}
// generic với class
class Student<T>{
    value:T
    constructor(value:T){
        this.value = value;
    }
    setValue(value:T){
        this.value = value;
    }
}
let std1 = new Student("binh");// instance
std1.setValue("5");
