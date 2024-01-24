import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="veg-biriyani" src={CDN_URL + 
            resData.info.cloudinaryImageId}></img>
            <h4>Restaurant:{resData.info.name}</h4>
            <h4>Location:{resData.info.locality}</h4>
            <h4>cuisines:{resData.info.cuisines.join(",")}</h4>
            <h4>Prize:{resData.info.costForTwo}</h4>
            <h4>deliveryTime:{resData.info.sla.deliveryTime} minutes</h4>
        </div>
        
    )
};

export default RestaurantCard; // to Body.js