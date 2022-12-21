import React from 'react';
import './ReviewItem.css';
import { TrashIcon } from '@heroicons/react/24/solid'

const ReviewItem = (props) => {
    let {handleRemoveProduct, product} = props;
    const {id,name, img, price, quantity} = product;
    return (
        <div className='flex'>
            <div className="box1">
                <img src={img} alt="" />
            <div className="details">
                <h4 title={name} className='text-blue-900 name'>{name.length > 24 ? name.slice(0, 24)+ '...' : name}</h4>
                <p className='price'>price: ${price}</p>
                <b>Quantity: {quantity}</b>
            </div>
            </div>
            <button onClick={() => handleRemoveProduct(product)} className='delete'>
                <TrashIcon className='icon'></TrashIcon>
            </button>
        </div>
    );
};

export default ReviewItem;