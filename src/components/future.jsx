import React from "react";


function Future (prop){
    return  <div className="service">
 <div className="future">
        <img src={prop.image} alt = {prop.alt} className= "images"/>
       <div className="details">
       <h1>{prop.number}</h1>
        <h2>{prop.heading}</h2>
        <p>{prop.message}</p>
       </div>
    </div>
    </div>

}

export default Future;