import React from 'react'
import { Link } from 'react-router-dom';
import '../../css/PRoduct/Fixbar.css'
import Endbar from './EndBar';
const Fixbar = ({deep}) => {
    return (
        <div className="fixBar" style={{display:deep}}>
            <p>
            2021 Complete Python Bootcamp From Zero to Hero in Python
            </p>
            <div className="tampo">
               <span className="mono">4.6  <i class="fas fa-star"></i></span>
               <span className="hybi">
                   <Link to="/">(234,567 ratings)</Link>
               </span>
               <span className="climbos">1,392,856 students</span>
            </div>
        </div>
        
    )
}

export default Fixbar
