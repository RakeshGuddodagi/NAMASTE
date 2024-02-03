import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



const Body = () =>{
  const [listOfRestaurants, setListOfRestaurants] = useState([]);  //Hooks can only be called inside react function component
  
  const [searchText ,setSearchText] = useState(" ");
  console.log("body rendered", listOfRestaurants);
  
  
  useEffect(()=>{fetchData()}, []); // it having two handler i.e callback function and Dependency array.Fetching data from "API"
      const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0205708&lng=77.5515527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();   //data from json
        console.log(json);
        //Optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    //updating new data
      
      };

      const onlineStatus = useOnlineStatus()
      if(onlineStatus === false)
        return(
            <div>
              <h1>Looks you are in OFFLINE!!</h1>
              <h2>Please check internet connection</h2>
            </div>
            
          );


  return listOfRestaurants.length === 0 ?<Shimmer/> : (    // here === 0 because API till not responded yet .
    <div className="body">                                 {/*It is called " ternary conditional rendering"*/}
        <div className="filter flex items-center">
          <div className=" m-4 p">
            <input type="text" className="border border-solid border-black w-60 rounded-lg" value={searchText} 
              onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button className=" px-4 py-1 bg-slate-300 m-4 rounded-lg border border-solid border-black"
              onClick={()=>{
              console.log(searchText);
              const filteredList =listOfRestaurants.filter((res)=>{
                res.data.cards.card.card.gridElements.infoWithStyle.restaurants.name.includes(searchText)
              })
              setListOfRestaurants(filteredList)
              
            }}>Search</button>
          </div>
          <div className="p-4 m-2 flex items-center">
            <button className="filter-btn px-4 py-2 bg-gray-300 rounded-lg border border-solid border-black" 
                  onClick={()=>{
                  const filteredList = listOfRestaurants?.filter(
                  (res) => res.info.avgRating > 4.2);
                  setListOfRestaurants(filteredList)}}>Top rated restaurant
            </button>
          </div>
          
        </div>
        <div className ="res-container flex flex-wrap" >
           {listOfRestaurants?.map((restaurant)=>(
           <Link key={restaurant.info.id}
            to={"/restaurant/"+restaurant.info.id}>
              <RestaurantCard  resData = {restaurant}/></Link> 
           ))};
           
        </div>
    </div>
  )
   
};

export default Body; // to app.js