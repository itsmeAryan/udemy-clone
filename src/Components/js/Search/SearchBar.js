import React,{useState} from 'react'
import '../../css/Search/SearchBar.css'
import Hog from './Hog'
import LeftBar from './LeftBar'
import RightSide from './RightSide'
const SearchBar = () => {
    const [dis,setDis]=useState("none");
    const [posa,setposa]=useState("none");
    const [wid,setwid]=useState("none");

    var me=true;
    const Tog=()=>{
if(me){
    me=false;
    setDis("flex")
}else{
    setDis("none")
    me=true;
}
    }
    var bab=true;
    const kop=()=>{
       if(bab){
        setposa("block");
        setwid("100%");
        bab=false;
       }else{
           bab=true;
           setposa('');
           setwid('')
       }
    }
    return (
        <>
            <div className="dataSearched">
                <h2>177 results for "hey"</h2>
            </div>

            <div className="notSure">
                <span className="oksure">
                    <i class="fas fa-info-circle"></i>
                </span>
                <span className="sureData">
                    Not sure? All courses have a 30-day money-back guarantee
                </span>
            </div>

            <div className="ForAllDiv">
                {/* one */}
                <div className="filter">
                    <div className="okfill" onClick={kop}>
                        <span class="material-icons">
                            filter_list
                        </span>
                        <span>Filter</span>
                    </div>
                    <div className="okDone">
                        <div className="twop8" >Sort by</div>
                        <div className="choose89">
                            <select>
                                <option>Most Relevant</option>
                                <option>Most View</option>
                                <option>
                                    Highes rated
                                </option>
                                <option>Newest</option>


                            </select>
                        </div>
                    </div>
                </div>

                {/* two */}
                <div className="ChildBeta">
                    <div className="youtube" style={{display:dis}}>
                       <LeftBar/>
                     
                    </div>
                    <div className="facebook">

<RightSide/>

                    </div>

                </div>
            </div>
            <Hog bl={posa} wid={wid}/>
        </>
    )
}

export default SearchBar
