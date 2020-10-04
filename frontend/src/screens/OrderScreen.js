import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { createOrder, detailsOrder } from '../actions/orderActions';
function OrderScreen(props) {

  const dispatch = useDispatch();
  useEffect(() => {
    
      props.history.push("/profile");
  
    return () => {
    };
  }, []);


  const orderDetails = useSelector(state => state.orderDetails);
  const { loading, order, error } = orderDetails;

  return loading ? <div>Loading ...</div> : error ? <div>{error}</div> :

    <div>
      <div className="placeorder">
        <div className="placeorder-info">
          <div>
            <h3>
              Shipping
          </h3>
            <div>
              {order.shipping.address}, {order.shipping.city},
          {order.shipping.postalCode}, {order.shipping.country},
          </div>
            <div>
              {order.isDelivered ? "Delivered at " + order.deliveredAt : "Not Delivered."}
            </div>
          </div>
          <div>
            <h3>Payment</h3>
            <div>
              Payment Method: a la livraison
            </div>
           
          </div>
          <div>
            <ul className="cart-list-container">
              <li>
                <h3>
                  Shopping Cart
                </h3>
              <div>
                Price
              </div>
              </li>
              {
                order.orderItems.length === 0 ?
                  <div>
                    Cart is empty
          </div>
                  :
                  order.orderItems.map(item =>
                    <li key={item.name}>
                      <div className="cart-image">
                        <img src={item.image} alt="product" />
                      </div>
                      <div className="cart-name">
                        <div>
                          <Link to={"/product/" + item.product}>
                            {item.name}
                          </Link>

                        </div>
                        <div>
                          Qty: {item.qty}
                        </div>
                      </div>
                      <div className="cart-price">
                        {item.price} dt 
                      </div>
                    </li>
                  )
              }
            </ul>
          </div>


        </div>
        <div className="placeorder-action">
          <ul>
            <li className="placeorder-actions-payment">
              {  <div>Finishing Payment...</div>}
              {!order.isPaid &&
              <h1>done</h1>
              }
            </li>
            <li>
              <h3>Order Summary</h3>
            </li>
            <li>
              <div>Items</div>
              <div>{order.itemsPrice}dt</div>
            </li>
            <li>
              <div>Shipping</div>
              <div>{order.shippingPrice}dt</div>
            </li>
            <li>
              <div>Tax</div>
              <div>{order.taxPrice}dt</div>
            </li>
            <li>
              <div>Order Total</div>
              <div>{order.totalPrice}dt</div>
            </li>
          </ul>



        </div>

      </div>
    </div>

}

export default OrderScreen;