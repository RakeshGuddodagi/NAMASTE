import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";



export const Header = ()=>{
    const [btnNameReact , setBtnNameReact] = useState("Login");
    
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src = {LOGO_URL}/>
                
            </div>
            <div className="nav-items">
                <ul>
                    <button className="login-btn" onClick={()=>{
                        
                        btnNameReact === "Login"? setBtnNameReact("LogOut"):setBtnNameReact ("Login")}}>
                        {btnNameReact}

                    </button>
                  <li><Link to="/body">Home</Link></li>
                  <li><Link to="/about">About-Us</Link></li>
                  <li><Link to="/contact">Contact-Us</Link></li>
                    
                  <li><Link to="/cart">Cart</Link></li>
                 
                </ul>
            </div>

        </div>
    )
};

//export default Header; //to app.js