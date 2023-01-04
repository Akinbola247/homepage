import React from "react";
import web3 from "./images/image-web-3-desktop.jpg"


function Grid (){
    return <div className="grid-container">
    <div className="item1"><img className="web3Img" src={web3} alt="img"/></div>
    <div className="item2">
        <h1>New</h1>
        <div><h2 className="new1">Hydrogen VS Electric Cars</h2> <p>Will hydrogen-fueled cars ever catch up to EVs?</p><hr></hr></div>
        <div><h2 className="new2">The Downsides of AI Artistry</h2> <p>What are the possible adverse effects of on-demand AI image generation?</p><hr></hr></div>
        <div><h2 className="new3">Is VC Funding Drying Up?</h2> <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p><hr></hr></div>
    </div>
    <div className="item3">The Bright Future of Web 3.0?</div>  
    <div className="item4"><p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. 
  But is it really fulfilling its promise?</p><button>READ MORE</button></div>
  </div>
}

export default Grid