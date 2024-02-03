import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const {resData} = props;
    
    return(
        <div className="res-card p-1 m-2 w-[250px] bg-slate-100 hover:bg-slate-200">
            <img className="veg-biriyani rounded-[20px]" src={CDN_URL + 
            resData.info.cloudinaryImageId}></img>
            <h4 className="underline font-bold py-4 text-lg">Restaurant:{resData.info.name}</h4>
            <h4>Location:{resData.info.locality}</h4>
            <h4>cuisines:{resData.info.cuisines}</h4>
            <h4>Rating:{resData.info.avgRating}</h4>
            <h4>deliveryTime:{resData.info.deliveryTime} minutes</h4>
        </div>
        
    )
};


export default RestaurantCard; // to Body.js