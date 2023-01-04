import React from "react";

function Footer (){
    const year = new Date().getFullYear();
    return (<div>
     <footer className="footer" >   
        <p >Copyright ⓒ {year}</p>
      </footer> 
      <p className="name">Akinbola Kehinde</p>
    </div>
     
      
      
    );
}

export default Footer;