import React from 'react'
import '../../css/Welcome/MEnubar.css';
import Logo from '../../../Images/logo/1.svg';
import {Link,Switch,Route,useHistory} from 'react-router-dom';
import Login from './Login';
import Welcome from './Welcome';
import SignUp from './SignUp';
import SearchBar from '../Search/SearchBar';
import Details from '../Product/Details';
import Adcart from '../Cart/CartAdd'

const MEnubar = () => {
    var istory=useHistory();
    const yup=(e)=>{
       if(e.key==="Enter"){
          istory.push('/search')
       }
    }
    return (
        <>
        <div className="menubar">
            <div className="data">
            <div className="burger" id="burger">
                    <i class="fas fa-bars"></i>
                    </div>
                <div className="menu-burger">
                   
                    <div className="img">
                       <Link to="/">
                       <img  src={Logo}  alt="datas"  /></Link>
                    </div>
                </div>
                <div className="category">Categories</div>
                <div className="search">
                    <span className="bar">
                    <i class="fas fa-search"></i>
                    </span>
                    <input type="search" placeholder="search your course" onKeyDown={yup} />
                </div>
                <div className="business">
                    <span id="businessA">
                        <Link to="/">Udemy Business</Link>
                    </span>
                    <span id="businessB">
                        <Link to="/">Teach on Udmey</Link>
                    </span>

                </div>
                <span className="cart">
                <i class="fas fa-shopping-cart"></i>
                </span>
                <div className="setup">
                    <span id="log">
                      <Link style={{color:"black",textDecoration:"none"}} to="/login">
                      Login in</Link>
                    </span>
                    <span id="sign">
                        <Link to="signup" style={{color:"white",textDecoration:"none"}}>
Sign up
                        </Link>
                    </span>
                    <span id="globe">
                    <i class="fas fa-globe"></i>

                    </span>

                </div>
            </div>
        </div>
        <Switch>
     <Route exact path="/" component={Welcome}/>
     <Route exact path="/products" component={Details}/>
     <Route exact path="/login" component={Login}/>
     <Route exact path="/signup" component={SignUp}/>
     <Route exact path="/search" component={SearchBar}/>
     <Route exact path="/adcart" component={Adcart}/>






        </Switch>
        
        
        
        </>
    )
}
export default MEnubar
