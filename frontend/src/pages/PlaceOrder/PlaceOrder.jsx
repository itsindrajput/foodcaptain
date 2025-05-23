import React, { useContext, useEffect, useState } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {

    const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext);

    const [data,setData] = useState({
              firstName: "",
               lastName: "",
               email: "",
               street: "",
               city: "",
               state: "",
               zipcode: "",
              country: "",
               phone: ""
    })

    const onChangeHandler = (event) => {
         const name = event.target.name
         const value = event.target.value
         setData(data => ({ ...data, [name]: value }))
     }
   
      const placeOrder = async (event) => {
          event.preventDefault();
          let orderItems = [];
          food_list.map(()=>{
             if (cartItems[cartItems._id]>0) {
              let itemInfo = item;
              itemInfo["quantity"] = cartItems[item._id];
              orderItems.push(itemInfo)
             }
          })
         let orderData = {
          address:data,
          items:orderItems,
          amount:getTotalCartAmount()+2,
         }
         let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
         if (response.data.success) {
          const {session_url} = response.data;
          window.location.replace(session_url);
         }
         else{
          alert("Error");
         }
      }
      const navigate = useNavigate();
      useEffect(()=>{
        if (!token) {
          navigate('/cart')
        }
        else if(getTotalCartAmount()===0){
          navigate('/cart')
        }
      },[token])

  return (
    <form onSubmit={placeOrder} className='place-order'>
        <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
        <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
        <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='Last name' />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email address'/>
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder='Street'/>
        <div className="multi-fields">
        <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
        <input required name='state' onChange={onChangeHandler} value={data.state} type="text" placeholder='State' />
         </div>
         <div className="multi-fields">
        <input required  name='zipcode' onChange={onChangeHandler} value={data.zipcode} type="text" placeholder='Zip code' />
        <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
        </div>
        <input required name='phone' onChange={onChangeHandler} value={data.phone} type="text" placeholder='Phone'/>
        </div>
        <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
          <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
           </div>
          <button type='submit'>PROCEED TO PAYMENT</button>
        </div>
        </div>

    </form>
  )
}

export default PlaceOrder




















// /*import React, { useContext, useEffect, useState } from 'react'
// import './PlaceOrder.css'
// import { StoreContext } from '../../Context/StoreContext'
// import { assets } from '../../assets/assets';
// import { useNavigate } from 'react-router-dom';

// const PlaceOrder = () => {

//     const [data, setData] = useState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         street: "",
//         city: "",
//         state: "",
//         zipcode: "",
//         country: "",
//         phone: ""
//     })

//     const { getTotalCartAmount, placeOrder } = useContext(StoreContext);

//     const navigate = useNavigate();

//     const onChangeHandler = (event) => {
//         const name = event.target.name
//         const value = event.target.value
//         setData(data => ({ ...data, [name]: value }))
//     }

//     useEffect(() => {
//         if (getTotalCartAmount() === 0) {
//             navigate('/')
//         }
//     }, [])

//     return (
//         <div className='place-order'>
//             <div className="place-order-left">
//                 <p className='title'>Delivery Information</p>
//                 <div className="multi-field">
//                     <input type="text" name='firstName' onChange={onChangeHandler} value={data.firstName} placeholder='First name' />
//                     <input type="text" name='lastName' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' />
//                 </div>
//                 <input type="email" name='email' onChange={onChangeHandler} value={data.email} placeholder='Email address' />
//                 <input type="text" name='street' onChange={onChangeHandler} value={data.street} placeholder='Street' />
//                 <div className="multi-field">
//                     <input type="text" name='city' onChange={onChangeHandler} value={data.city} placeholder='City' />
//                     <input type="text" name='state' onChange={onChangeHandler} value={data.state} placeholder='State' />
//                 </div>
//                 <div className="multi-field">
//                     <input type="text" name='zipcode' onChange={onChangeHandler} value={data.zipcode} placeholder='Zip code' />
//                     <input type="text" name='country' onChange={onChangeHandler} value={data.country} placeholder='Country' />
//                 </div>
//                 <input type="text" name='phone' onChange={onChangeHandler} value={data.phone} placeholder='Phone' />
//             </div>
//             <div className="place-order-right">
//                 <div className="cart-total">
//                     <h2>Cart Totals</h2>
//                     <div>
//                         <div className="cart-total-details"><p>Subtotal</p><p>${getTotalCartAmount()}</p></div>
//                         <hr />
//                         <div className="cart-total-details"><p>Delivery Fee</p><p>${getTotalCartAmount() === 0 ? 0 : 5}</p></div>
//                         <hr />
//                         <div className="cart-total-details"><b>Total</b><b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
//                     </div>
//                 </div>
//                 <div className="payment-options">
//                     <h2>Select Payment Method</h2>
//                     <div className="payment-option">
//                         <img src={assets.selector_icon} alt="" />
//                         <p>COD ( Cash On Delivery )</p>
//                     </div>
//                     <button onClick={() => placeOrder(data)}>PLACE ORDER</button>
//                 </div>

//             </div>
//         </div>
//     )
// }

// export default PlaceOrder
// */














