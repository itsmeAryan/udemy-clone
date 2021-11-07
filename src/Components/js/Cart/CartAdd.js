import React from 'react'
import {Link} from 'react-router-dom';
import '../../css/Cart/CartAdd.css';
import Buyy from '../../../Images/sampl-img/5.jpg';
const CartAdd = () => {
    return (
        <div className="shop">
            <h3>Shopping Cart</h3>
            <div className="shopme">
                <div className="shopitem">
                    <div className="buy">
                        <div className="amg">
                            <img src={Buyy} alt="sdf"/>
                        </div>
                        <div className="lakhan">
                            <div className="ramu">
                                <div className="ramu-title"><span>
                                    
Machine Learning A-Z™: Hands-On Python & R In Data Science
                                    
                                    </span></div>
                                    <div className="ramu-uther">
                                        <span>By Lisa Binoy</span>
                                    </div>
                                    <div className="ramu-seller">
                                        <span className="bestseller">Bestseller</span>
                                        <span className="glass">4.5  <i class="fas fa-star"></i></span>
                                    </div>
                                    <div className="ramu-lectures">
                                        <span>44.5 total hours</span>
                                    </div>
                            </div>
                            <div className="kaka">
                                <div className="kaka-crud">
                                    <span><Link to='/'>Remove</Link></span>
                                    <span><Link to='/'>Save for later</Link></span>
                                </div>
                                <div className="kak-price">
                                    <div className="paisa-babu">
                                        <span>$30<i class="fas fa-tags"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* hsdhfhsdfkjkjsda */}
                <div className="shoppaisa">
<div className="credit">
    <div className="credit-total"><span>Total:</span></div>
    <div className="credit-paisa"><span>$25</span></div>
    <div className="cr-dics">
        <span className="dev"><del>$30</del></span>
        <span>87% off</span>
    </div>
    <div className="cr-pay">
        Checkout
    </div>
    <div className="promotions">
        <div className="mo">Promotions</div>
        <div className="promo-apply">
            <span className="A0">X</span>
            <span className="B0">INDIAWALE</span>
            <span className="C0">is applied</span>
        </div>
        <div className="promo-add">
            <input type="text" placeholder="Enter Coupon"/>
            <span>Apply</span>
        </div>
    </div>
</div>


                </div>

            </div>
        </div>
    )
}

export default CartAdd
