import React from 'react'
import './ShoppingCart.scss'
import { useDispatch, useSelector } from "react-redux"

export default function ShoppingCart() {
  let data = useSelector((state)=>{
    return state;
   })
  let dispatch = useDispatch();
  return (
    <div>
        <div className="container">
      <div className="page-header">
        <h1>Shopping Cart</h1>
      </div>
      <div className="row">
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="page-title">List Products</h1>
              </div>
              <div className="panel-body" id="list-product">
                <div>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#"
                        ><img
                        className="media-object"
                        src={data.productReducer[0].img}
                        alt="pizza"
                      /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{data.productReducer[0].name}</h4>

                      <p>
                        {data.productReducer[0].description}
                      </p>
                      <span className="price"> {data.productReducer[0].price}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#"
                         ><img
                         className="media-object"
                         src={data.productReducer[1].img}
                         alt="pizza"
                        /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{data.productReducer[1].name}</h4>
                      <p>
                        {data.productReducer[1].description}
                      </p>
                      <input
                        name="quantity-product-1"
                        type="number"
                        min="1"
                      /><a data-product="1" className="price">{data.productReducer[1].price} </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#"
                        ><img
                        className="media-object"
                        src={data.productReducer[2].img}
                        alt="pizza"
                    /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{data.productReducer[2].name}</h4>
                      <p>
                        {data.productReducer[2].description}
                      </p>
                      <input
                        name="quantity-product-1"
                        type="number"
                        min="1"
                      /><a data-product="1" className="price">{data.productReducer[2].price} </a>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="media product">
                    <div className="media-left">
                      <a href="#"
                      ><img
                        className="media-object"
                        src={data.productReducer[3].img}
                        alt="pizza"
                      /></a>
                    </div>
                    <div className="media-body">
                      <h4 className="media-heading">{data.productReducer[3].name}</h4>
                      <p>
                        {data.productReducer[3].description}
                      </p>
                      <input
                        name="quantity-product-1"
                        type="number"
                        min="1"
                      /><a data-product="1" className="price">{data.productReducer[3].price} </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <h1 className="panel-title">Your Cart</h1>
              </div>
              <div className="panel-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th width="4%">STT</th>
                      <th>Name</th>
                      <th width="15%">Price</th>
                      <th width="4%">Quantity</th>
                      <th width="25%">Action</th>
                    </tr>
                  </thead>
                  <tbody id="my-cart-body">
                    <tr>
                      <th scope="row">1</th>
                      <td>Cake</td>
                      <td>10 USD</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          min="1"
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                          >Update</a
                        ><a
                          className="label label-danger delete-cart-item"
                          data-product=""
                          >Delete</a
                        >
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Hamburger</td>
                      <td>15 USD</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          min="1"
                        />
                      </td>
                      <td>
                        <a
                          className="label label-info update-cart-item"
                          data-product=""
                          >Update</a
                        ><a
                          className="label label-danger delete-cart-item"
                          data-product=""
                          >Delete</a
                        >
                      </td>
                    </tr>
                  </tbody>
                  <tfoot id="my-cart-footer">
                    <tr>
                      <td colSpan="4">
                        There are <b>2</b> items in your shopping cart.
                      </td>
                      <td colSpan="2" className="total-price text-left">630 USD</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <div className="alert alert-success" role="alert" id="mnotification">
              Add to cart successfully
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
