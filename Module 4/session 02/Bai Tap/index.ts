/*
    Bài 9:
    - Định nghĩa 1 type alias cho kiểu dữ liệu ResponseStatus
    là 1 literal type với giá trị "success" hoặc "error",
    kèm theo một thuộc tính theo kiểu chuỗi
 */
// khai báo type literal (các kiểu dữ liệu và dạng chuỗi)
type ResponseStatus = "success" | "error";
type Obj = {
    message: ResponseStatus,
}
let obj:Obj = {
    message: "error",
}