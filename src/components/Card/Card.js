import React from 'react';
import './Card.css';

const Card = (props) => {
    console.log(props.children);
    let totalPrice = 0;
    let shipping = 0;
    let quantity = 0;
        for(const product of props.card){
          totalPrice += product.price * product.quantity;
          shipping += product.shipping;
          quantity += product.quantity;
        }
        const tax = ((totalPrice * 0.1).toFixed(2));
        const fixtTax = parseFloat(tax);
        let grandTotal =  totalPrice + shipping + fixtTax      
    return (
        <div>
            <h5>Selected Items: {quantity}</h5>
            <h5>otal Shipping Charge: ${shipping}</h5>
           
            <h5>Tax: ${fixtTax}</h5>
             <h5>Total Price: ${totalPrice}</h5><hr />
            <h4>Grand Total : ${grandTotal}</h4>
            {props.children}
        </div>
    );
};

export default Card;
