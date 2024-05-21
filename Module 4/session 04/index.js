"use strict";
// Cách khởi tạo đối tượng
class Person {
    // hàm tạo constructure
    constructor(lastName, firsName) {
        this.lastName = lastName;
        this.firsName = firsName;
    }
    // nơi khai báo các phương thức cho lớp person
    // phương thức để lấy thông tin của đối tượng
    getFullName() {
        console.log(`Họ và tên : ${this.lastName + this.firsName}`);
    }
    setFirstName(firsName) {
        this.firsName = firsName;
    }
    set setLastName(lastName) {
        this.lastName = lastName;
    }
}
// đi khởi tạo đối tượng từ lớp person
let person1 = new Person("Nguyen", "Minh Thu");
person1.setFirstName("Minh Ha");
person1.setLastName = "Lê";
// person1 được gọi là 1 instance của lớp person
person1.getFullName();
console.log("Đối tượng được khởi tạo từ lớp person: ", person1);
