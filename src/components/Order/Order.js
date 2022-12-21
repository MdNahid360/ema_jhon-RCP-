import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Order = () => {
    const [product, setProduct] = useProducts()
    const [card, setCard] = useCart(product)
    const handleRemoveProduct = prd =>{
        const rest = card.filter(pd => pd.id !== prd.id);
        setCard(rest);
        removeFromDb(prd.id)
       
    }
    const navigate = useNavigate();
    return (
        <div className='shop2-container'>
             <div className="products2">
                {
                    card.map(product =><ReviewItem handleRemoveProduct={handleRemoveProduct} key={product.id} product={product}></ReviewItem>)
                }
             </div>
             <div className="cart2">
                  <Card card={card}>
                    <button className="btn"onClick={() => navigate('/inventory')}>Inventory</button>
                  </Card>
             </div>
        </div>
    );
};

export default Order;