import React from 'react'
import { useParams } from 'react-router-dom'

let product=[
    {
        id:1,
        name:"iphone1",
        description:"màu hồng",
    },
    {
        id:2,
        name:"iphone2",
        description:"màu đỏ",
    },
    {
        id:3,
        name:"iphone3",
        description:"màu xanh",
    }
]
export default function ProductDetail() {
    let useParam111= useParams();
    let data = product.filter((item)=>{
        return item.id==useParam111.productId
    })
  return (
    <div>
        Chi tiết sản phẩm
        <p>{data[0].name}</p>
        <p>{data[0].description}</p>
    </div>
  )
}
