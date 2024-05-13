// Bai Tap 1
let fullname:string="toan";
let ageNumber:number=20;
let job:string="IT";
// Bai tap 2
let userName:any="toan";
userName=5;
// Bai tap 3
let number1:number;
let number2:number;
let result:number;
number1 = 1;
number2 = 2;
function Sum(a:number, b:number):number{
    return a+b;
}
result = Sum(number1, number2);
console.log(result);
// Bai Tap 4
let condition:boolean=true;
if(condition){
    console.log("xin chao");
    condition = false;
}else{
    console.log("Tam biet");
    condition = false;
}
// Bai tap 5
let variable1:undefined= undefined;
let variable2:number=1;
let variable3="toan";
console.log(variable1, variable2, variable3);
