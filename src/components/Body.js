import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () =>{
  const [listOfRestaurants, setListOfRestaurants] = useState([]);  //Hooks can only be called inside react function component
  
  const [searchText ,setSearchText] = useState("Search Your Favourite restaurants ");
  console.log("body rendered");
  
  
  useEffect(()=>{fetchData()}, []); // it having two handler i.e callback function and Dependency array.Fetching data from "API"
      const fetchData = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0205708&lng=77.5515527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();   //data from json
        console.log(json);
        //Optional chaining
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);    //updating new data
      
      };
  return listOfRestaurants.length === 0 ?<Shimmer/> : (    // here === 0 because API till not responded yet .
    <div className="body">                                 {/*It is called " ternary conditional rendering"*/}
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} 
              onChange={(e)=>{
              setSearchText(e.target.value);
            }}/>
            <button onClick={()=>{
              console.log(searchText);
              const filteredList =listOfRestaurants.filter((res)=>{
                res.data.cards.card.card.gridElements.infoWithStyle.restaurants.name.includes(searchText)
              })
              setListOfRestaurants(filteredList)
              
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={()=>{
                const filteredList = listOfRestaurants?.filter(
                (res) => res.info.avgRating > 4.2);
                setListOfRestaurants(filteredList)}}>Top rated restaurant
          </button>
        </div>
        <div className ="res-container" >
           {listOfRestaurants?.map((restaurant)=>(
            <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>
           ))};
           
        </div>
    </div>
  )
   
};

export default Body; // to app.js