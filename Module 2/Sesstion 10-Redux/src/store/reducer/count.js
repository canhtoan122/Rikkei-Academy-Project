// Reducer thật ra là những cái hàm nhiệm vụ tính toán lại state mới
// Khởi tạo state
const initialState= ["hoa", "hồng"];
export const countReducer=(state=initialState, action)=>{
    switch(action.type){
        case "increase":
            let newState = [...state];
            newState.push(3);
            return newState
        case "decrease":
            return state-1
        default:
            return state
    }
}