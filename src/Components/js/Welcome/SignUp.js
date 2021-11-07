import React,{useState} from 'react'
import '../../css/Welcome/SignUp.css';
import {Link} from 'react-router-dom'
const SignUp = () => {
    // usestaset to transfer eye icon
    const [eyeIcon,setEyeIcon]=useState("far fa-eye tap");
//   eye toggle 
var love =true;
const Toggle=()=>{
    // password reference
    var plass=document.getElementById("pl");
    console.log(plass.value);
    if(love){
        plass.type="text";
        love=false;
        setEyeIcon("far fa-eye-slash ")
    }else{
        plass.type="password";

        setEyeIcon("far fa-eye ")
        love=true;
    }
}

// onchange function for passwordd char value;
const [sp,setspan]=useState(' ');
var love2=true;
const OnChange=(e)=>{
    var get=e.target.value.length;
   
if(love2){
    switch(get){
        case 5:return (document.getElementById("one").style.backgroundColor="black",setspan("too weak"));
        case 8:return (document.getElementById("two").style.backgroundColor="black",setspan("could be stronger"));

        case 12:return (document.getElementById("threes").style.backgroundColor="black",setspan("strong"));

        case 15:return (document.getElementById("four").style.backgroundColor="black",setspan("very strong"));

    }
    love2=false;
}else{
    love2=true;
}
}
    return (
        <div className="signup">
            <div className="subh">
                <span className="s">Sign Up and Start Learning!</span>

            </div>
            <div className="signo">
              
            <div className="name">
                    <i class="fas fa-user"></i>
                    <input typ="text" name="name"  placeholder="name" />
                </div>
                <div className="name">
                <i class="fas fa-envelope"></i>
                    <input typ="email" name="email"  placeholder="email" />
                </div>
                <div className="name as">
                <i class="fas fa-lock"></i>
                    <input type="password" onChange={OnChange} id="pl" name="password"  placeholder="password" />
                    <i onClick={Toggle} class={eyeIcon}></i>
                </div>
               <div className="toggle">
               <div className="secret-div">
                    <div className="one" id="one"></div>
                    <div className="one " id="two"></div>
                    <div className="one" id="threes"></div>
                    <div className="one" id="four"></div>

                </div>
                <span>{sp}</span>
               </div>
            </div>

            <div className="props">
                <input type="checkbox"  />
                <p>
                I’m in for emails with exciting discounts and personalized recommendations
                </p>
            </div>
            <div className="oxy">
                <input type="submit" value="Submit"/>
            </div>
            <div className="make">
              <span className="snop">
              By signing up, you agree to our <Link>
              Terms of Use</Link> and <Link>
              Privacy Policy.</Link>

              </span>
            </div>
            <div className="me">
            Already have an account? <Link to="/login">
            Log In</Link>
            </div>
        </div>
    )
}

export default SignUp
