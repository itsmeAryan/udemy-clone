import React from 'react'
import '../../css/Welcome/Login.css';
import {Link} from 'react-router-dom';
import G from '../../../Images/g.svg'


const Login = () => {
    return (
       <div className="logino">
           <div className="UPend">
           Log In to Your Udemy Account!
           </div>
           <div className="log-contin">
              
           <div className="face">
               <i class="fab fa-facebook"></i>
                   <span className="spain">
                      <Link to="/">
                      Continue with Facebook</Link>
                   </span>
               </div>
               <div className="face">
               <img src={G} alt="geo" />
                   <span className="spain">
                      <Link to="/">

                       Continue with Google
                       </Link>
                   </span>
               </div>
               <div className="face ">
               <i class="fab fa-apple id"></i>
                   <span className="spain">
                      <Link to="/">

                       Continue with Apple
                       </Link>
                   </span>
               </div>

               <div className="mail mk">
               <i class="fas fa-envelope"></i>
                   <input type="email" placeholder="Email" name="email" />
               </div>
               <div className="mail">
               <i class="fas fa-lock"></i>
                   <input type="password" placeholder="password" name="password" />
               </div>
              <div className="intab">
                  <input type="submit" name="submit" value="Submit"/>
               <span className="forgot">
               or <Link to="/forgot">Forgot Password</Link>
                  </span>
              </div>
           </div>
           <div className="pro">
               don't have an account? <Link to="/signup">Sign up</Link>
           </div>
           <div className="pro">
               <Link to="/">Log in with your organization</Link>
           </div>

       </div>
    )
}

export default Login
