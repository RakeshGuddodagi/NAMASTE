import { useState } from "react";
import { HEROPAGE_URL, LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



export const Header = ()=>{
    const [btnNameReact , setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    return (
        
            <div className="flex justify-between bg-pink-100 sm:bg-yellow-100 lg:bg-green-100 shadow-lg m-4 h-40">

                <div className="logo-container flex">
                    <img className="w-56" src={LOGO_URL} />
                    {/* <img className="heropage" src={HEROPAGE_URL} /> */}
                    
                    <div className="online-status flex items-center gap-10 justify-center">
                        <p className="text-[50px] ml-8">Restaurants Near To Me</p>
                        <h3 className="lg:underline">Online status{onlineStatus ? ":ONLINE":":OFFLINE"}</h3>
                    </div>
         

                </div>
                {/* <Button variant="contained" sx={{ color: 'red' }}>Primary</Button>{'\n'} */}
                
                <div className="flex items-center">
                    <ul className="flex p-4 m-4">
                        <button className="login-btn border border-solid border-black rounded-lg bg-gray-300" onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login");
                            }}>
                            {btnNameReact}

                        </button>
                        
                        <li className=" px-4 lg:underline"><Link to="/body">Home</Link></li>
                        <li className=" px-4 lg:underline"><Link to="/about">About-Us</Link></li>
                        <li className=" px-4 lg:underline"><Link to="/contact">Contact-Us</Link></li>
                        <li className=" px-4 lg:underline"><Link to="/cart">Cart</Link></li>
                        <li className=" px-4 lg:underline"><Link to="/grocery">Grocery</Link></li>

                    </ul>
                </div>

            </div>
            
            
    )
};

//export default Header; //to app.js

