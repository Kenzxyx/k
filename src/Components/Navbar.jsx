import React from "react";

function Navbar() {

    return(
        <div className="navbar">
      <div className="left">
        <img src="data:image/png;base64,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" alt="" />

        <ul>

          <li><a href="">SHOP</a></li>
          <li><a href="">ABOUT PRIME</a></li>
          <li><a href="">WHERE TO BUY</a></li>
          <li><a href="">VERIFY YOUR PRIME</a></li>
          
        </ul>
        
      </div>
     </div>
    )
}

export default Navbar