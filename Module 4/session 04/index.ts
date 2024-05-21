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
