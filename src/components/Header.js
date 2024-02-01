import { useState } from "react";
import { HEROPAGE_URL, LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import { Paper, Typography } from "@mui/material";
import useOnlineStatus from "../utils/useOnlineStatus";

import Grid from '@mui/material/Grid';

export const Header = ()=>{
    const [btnNameReact , setBtnNameReact] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    return (
        <><><Grid continer>
            <div className="header">

                <div className="logo-container">
                    <img className="logo" src={LOGO_URL} />
                    <img className="heropage" src={HEROPAGE_URL} />
                    <h1>Restaurants Near To Me</h1>
                    <div className="online-status">
                        <h1>Online status{onlineStatus ? ":ONLINE":":OFFLINE"}</h1>
                    </div>
         

                </div>
                {/* <Button variant="contained" sx={{ color: 'red' }}>Primary</Button>{'\n'} */}
                
                <div className="nav-items">
                    <ul>
                        <button className="login-btn" onClick={() => {
                            btnNameReact === "Login" ? setBtnNameReact("LogOut") : setBtnNameReact("Login");
                            }}>
                            {btnNameReact}

                        </button>
                        
                        <li><Link to="/body">Home</Link></li>
                        <li><Link to="/about">About-Us</Link></li>
                        <li><Link to="/contact">Contact-Us</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/grocery">Grocery</Link></li>

                    </ul>
                </div>

            </div>
            </Grid></>
            {/* demooooo working grid} */}
            <Grid continer direction={'row'}>
                <Grid  item xs={12} lg={6} xl={6}>
                    <Paper>
                        <Typography>logo</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6} xl={6}>
                <Paper>
                        <Typography>link</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6} xl={6}>
                <Paper>
                        <Typography>heading</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} lg={6} xl={6}>
                <Paper>
                        <Typography>list</Typography>
                    </Paper>
                </Grid>
                

            </Grid></>
    )
};

//export default Header; //to app.js

