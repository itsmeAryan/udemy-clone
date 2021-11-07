import React from 'react'
import '../../css/Model/Carousel.css';
import { Link } from 'react-router-dom';

const Carousel = ({id,best,img,left,top,no}) => {
    return (
        <div className="parent" id={id}>
     <div className="first-child">
     <div className="img-tag">
          <img src={img} alt="tag with me"/>
         
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
          <div className="seller" style={{display:best}}>
              <span className="best">Bestseller</span>
          </div>
     </div>

     {/* fake data */}
<div className="fake-childData" style={{display:no}} >
    <h1 className="description">
       
        2021 Complete Python Bootcamp From Zero to Hero in Python
  
    </h1>
    <div className="Updated">
        <span className="crud-update">
        Updated March 2021
        </span>
    </div>
    <div className="level-all">
<span className="course-all-level">
All Levels.Subtitles
</span>
    </div>

<div className="decs-info">
<p className="lame-data">
Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games
</p>

</div>
<div className="ul-datads">
    <li className="list-all">
        <span className="left-data">
        <i class="fas fa-check"></i>
        </span>
        <p className="right-data">
        Learn to use Python professionally, learning both Python 2 and Python 3!
        </p>
    </li>
    <li className="list-all">
        <span className="left-data">
        <i class="fas fa-check"></i>
        </span>
        <p className="right-data">
        Create games with Python, like Tic Tac Toe and Blackjack!
        </p>
    </li>
    <li className="list-all">
        <span className="left-data">
        <i class="fas fa-check"></i>
        </span>
        <p className="right-data">
        Learn advanced Python features, like the collections module and how to work with timestamps!
        </p>
    </li>

<div className="buttn-cart">
    <span className="btn-cart"><Link to="/products" style={{color:"white",textDecoration:"none"}}>Add to cart</Link></span>
    <div className="heart">
<i class="fab fa-gratipay"></i>

    </div>
</div>


</div>

<div className="upper-triangle">
<i class="fas fa-sort-down"></i>
</div>

</div>



        </div>
    )
}

export default Carousel
