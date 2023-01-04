import React, {useState} from "react";
import Homepage from "./header";
import Grid from "./grid";
import Future from "./future";
import ArrayList from "../arraylist"
import Footer from "./footer";
import Drawer from "./sidepanel"; 

function App (){
  const  [sideBar, setSideBar] = useState(false)
  
  function handleSideBarClick(){
        setSideBar(true)
        console.log('i got clicked')
  }
  function handleClose(){
    setSideBar(false)
  }

    return <div>
         <Drawer drawerStat = {sideBar} drawerClose = {handleClose}/>
        <Homepage handleClick = {handleSideBarClick} />
        <Grid />
        {ArrayList.map((element)=>{
         return <Future  number ={element.number} heading = {element.heading} message = {element.message} image= {element.img} alt = {element.alt}/>
        })}
        <Footer />
    </div>
}
export default App