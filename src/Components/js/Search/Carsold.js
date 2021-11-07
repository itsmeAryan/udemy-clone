import React from 'react'
import '../../css/Search/Carsold.css';
import {Link} from 'react-router-dom';
import Thumbail from '../../../Images/sampl-img/5.jpg';
const Carsold = ({best,img ,id}) => {
    return (
        <div className="parent" id={id}>
     <div className="first-child">
     <div className="img-tag">
          <img src={Thumbail} alt="tag with me"/>
         
      </div>
      <div className="heading">
              <h2 className="heading-data">
              2021 Complete Python Bootcamp From Zero to Hero in Python
              </h2>
          </div>
          <div className="owner">
              <span className="owner-name">
              Jose Martila
              </span>
          </div>
          <div className="Ratings">
              <span className="rating-number">4.6</span>
              <div className="stars">
              <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
              <span className="users-data">(346,786)</span>
          </div>
          <div className="Price">
              <span className="real-price">$99</span>
              <span className="fake-price">$129</span>
          </div>
          <div className="seller" style={{display:"inline"}}>
              <span className="best">Bestseller</span>
          </div>
     </div>
        </div>
    )
}

export default Carsold
