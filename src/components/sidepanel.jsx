import React, { useState } from "react";
import cancel from "../components/images/icon-menu-close.svg"

function Drawer (prop){
    const [canceling, setCanceling] = useState(true)

function handleCancel(){
  setCanceling(false)
  return prop.drawerClose(canceling)
}

    const customSidePanel = {
        position: "absolute",
        zIndex: 1,
        background: "white",
        width : "300px",
        height: "107.5em",
        left: "10em",
        display: "block"
    }
    const customeUL ={
        marginTop: "7.5em",
        listStyleType: "none",
        marginLeft : "2px",
        color: "black"
    }
    const customImg = {
        position: "relative",
        top: "5em",
        left : "12em"
    }
    const customList={
        padding : "15px",
    }
    const customAnch={
        textDecorationLine : "none",
        color : "black"
    }
    const customBlackOut = {
        position : "absolute",
        zIndex : 1,
        background : "hsl(236, 13%, 42%)",
        width: "100%",
        height : "107.5em",
        opacity : "0.3",
        display : "block"
    }

    return <div>
    <div style={ prop.drawerStat ? customBlackOut : null} className="blackout"></div>
    <div className="sidepanel" style={prop.drawerStat ? customSidePanel : null}>
    <div>
    <img src = {cancel} alt = "cancel" style={prop.drawerStat ? customImg : null} onClick={handleCancel}/>
    <ul style={prop.drawerStat ? customeUL : null}>
        <li style={customList}><a style={customAnch} href="/">Home</a></li>
        <li style={customList}><a style={customAnch} href="/">New</a></li>
        <li style={customList}><a style={customAnch} href="/">Popular</a></li>
        <li style={customList}><a style={customAnch} href="/">Trending</a></li>
        <li style={customList}><a style={customAnch} href="/">Categories</a></li>
    </ul>
    </div>
  </div>
  </div>
}

export default Drawer;



