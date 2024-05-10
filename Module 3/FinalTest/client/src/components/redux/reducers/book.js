const initialCount = 0;

export const counter=(state=initialCount, action)=>{
    switch(action.type){
        case "increase":
            return state + action.payload
        default:
            return state
    }
}