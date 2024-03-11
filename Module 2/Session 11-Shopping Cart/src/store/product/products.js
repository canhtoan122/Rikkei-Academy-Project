
const initialState= [{
    img:"images/Hamburger.jpg",
    name:"Pizza",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price:"30 USD"
},
{
    img:"images/Hamburger.jpg",
    name:"Hamburger",
    description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dicta asperiores veniam repellat unde debitis quisquam magnam magni ut deleniti!",
    price:"15 USD"
},
{
    img:"images/bread.jpg",
    name:"Bread",
    description:`Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. At dicta asperiores veniam repellat unde debitis
    quisquam magnam magni ut deleniti!`,
    price:"20 USD"
},
{
    img:"images/Cake.jpg",
    name:"Cake",
    description:`Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. At dicta asperiores veniam repellat unde debitis
    quisquam magnam magni ut deleniti!`,
    price:"10 USD"
}];
export const productReducer=(state=initialState, action)=>{
    return state
}