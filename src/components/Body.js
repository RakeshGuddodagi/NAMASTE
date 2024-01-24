import RestaurantCard from "./RestaurantCard";
import restList from "../utils/mockData";


const Body = () =>{
    return (
        <div className="body">
            <label className="search" style={{Color:"red", fontSize:"50px"}}>Search:
              <input className="searchbar" type="text" placeholder="Select your favourite Restaurant"/>
            </label>
            <div className="res-container" >
               {restList.map((restaurant)=>(
                <RestaurantCard key={restaurant.info.id} resData ={restaurant}/>
               ))}
               
            </div>
        </div>

    )
   
};

export default Body; // to app.js