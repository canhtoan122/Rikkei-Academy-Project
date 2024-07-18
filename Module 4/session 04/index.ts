// Cách khởi tạo đối tượng
class Person {
    // các thuộc tính
    lastName:string;
    firsName:string;
    // hàm tạo constructure
    constructor(lastName:string, firsName:string){
        this.lastName = lastName;
        this.firsName = firsName;
    }
    // nơi khai báo các phương thức cho lớp person
    // phương thức để lấy thông tin của đối tượng
    getFullName():void{
        console.log(`Họ và tên : ${this.lastName+this.firsName}`);
    }
    setFirstName(firsName:string):void{
        this.firsName=firsName;
    }
    set setLastName(lastName:string){
        this.lastName=lastName;
    }
}

// đi khởi tạo đối tượng từ lớp person
let person1 = new Person("Nguyen", "Minh Thu");
person1.setFirstName("Minh Ha");
person1.setLastName = "Lê";
// person1 được gọi là 1 instance của lớp person
person1.getFullName();
console.log("Đối tượng được khởi tạo từ lớp person: ", person1);
// Tính kế thừa trong OOP
class User{
    name: string;
    age: number;
    constructor(name:string, age:number){
        this.name=name;
        this.age=age;
    } 
    getUser(){
        return `Name: ${this.name} - Age: ${this.age}`
    }
}
class Student extends User{
    id:string;
    constructor(name: string, age: number, id: string){
        super(name, age);
        this.id = id;
    }
    getStudent(){
        return `ID: ${this.id} - Name: ${this.name} - Age: ${this.age}`
    }
}
const user = new User('Toan', 15);
const student = new Student(user.name, user.age, "1");
console.log(student);
abstract class Shape{
    radius: number;
    constructor(radius:number){
        this.radius = radius;
    }
    getArea(){

    }
    abstract getShape():void;
}
class Circle extends Shape{
    radius: number;
    constructor(radius:number){
        super(radius)
        this.radius = radius;
    }
    getShape():number{
        return Math.PI* this.radius**2;
    }
}
let circle = new Circle(5);
console.log("DIện tích hình tròn là: ", circle.getShape());
class Polymorphism{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    getName(){
        console.log("Tên đầy đủ: ", this.name);
    }
    setName(newName: string){
        this.name = newName;
    }
}
let poly = new Polymorphism("nam");
console.log(poly.getName);
class Poly extends Polymorphism{
    constructor(name:string){
        super(name)
        this.name = name;
    }
    getFullName(a:any): any {
        return a;
    }
}
let poly1 = new Poly("Hồng");
poly1.setName("lan");
console.log("Giá trị mới là: ", poly1.getName());
interface IA{
    // nơi đi khai báo các thuộc tính và phương thức
    name: string,
    getName():void;
}
class Rikkei implements IA{
    id:number;
    name:string;
    constructor(name: string, id: number){
        this.id = id;
        this.name = name;
    }
    getName():void{

    }
}
type Product={
    id:number,
    name:string,
}
// có thể kết hợp nhiều type lại được
type C = {
    address: string,
}
type D = Product|C;
interface IMyProduct{
    name:string,
    id:number
}
let cart:Product[]=[];
