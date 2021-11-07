import React from 'react'
import '../../css/Welcome/Category.css';
import Cat from '../../../Images/category/1.jpg'
import Cat2 from '../../../Images/category/2.jpg'
import Cat3 from '../../../Images/category/3.jpg'
import Cat4 from '../../../Images/category/4.jpg'
import Cat5 from '../../../Images/category/5.jpg'
import Cat6 from '../../../Images/category/6.jpg'
import Cat7 from '../../../Images/category/7.jpg'
import Cat8 from '../../../Images/category/8.jpg';
import {Link} from 'react-router-dom'

const Category = () => {
    return (
    <div className="res-category">
        <h3>Top Categories</h3>
        <div className="category-owner">
            <div className="childs">
                <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat}/>
                    </div>
                    <div className="child-design">Design</div>
                </div>
                <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat2}/>
                    </div>
                    <div className="child-design">Development</div>
                </div>  <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat3}/>
                    </div>
                    <div className="child-design">finance</div>
                </div>  <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat4}/>
                    </div>
                    <div className="child-design">Maerketing</div>
                </div>
            </div>
           
            <div className="childs">
                <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat5}/>
                    </div>
                    <div className="child-design">Personal Development</div>
                </div>
                <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat6}/>
                    </div>
                    <div className="child-design">IT and Software</div>
                </div>  <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat7}/>
                    </div>
                    <div className="child-design">Photography</div>
                </div>  <div className="childs-sons">
                    <div className="touch-img">
                        <img src={Cat8}/>
                    </div>
                    <div className="child-design">Music</div>
                </div>
            </div>
        </div>
        <div className="maker-category">
            <div className="chicks">
               <Link> <span>Design</span></Link>
            </div>
            <div className="chicks">
               <Link> <span>Design</span></Link>
            </div>  <div className="chicks">
               <Link> <span>Development</span></Link>
            </div>  <div className="chicks">
               <Link> <span>Marketing</span></Link>
            </div>  <div className="chicks">
               <Link> <span>IT and software</span></Link>
            </div>  <div className="chicks">
               <Link> <span>
                   Personal Development</span></Link>
            </div>  <div className="chicks">
               <Link> <span>Business</span></Link>
            </div>  <div className="chicks">
               <Link> <span>Music</span></Link>
            </div>
        </div>
    </div>
    )
}

export default Category
