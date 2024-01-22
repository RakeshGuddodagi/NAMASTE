import React from "react";
import ReactDOM from "react-dom/client";

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/002/285/943/original/food-service-logo-design-template-free-vector.jpg"/>
                
            </div>
            <div className="nav-items">
                <ul>
                  <li>Home</li>
                  <li>About-Us</li>
                  <li>Contact-Us</li>
                  <li>Cart</li>
                </ul>
            </div>

        </div>
    )
};
 
const RestaurantCard = (props) => {
    const {resData} = props;
    
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="veg-biriyani" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + 
            resData.info.cloudinaryImageId}></img>
            <h4>Restaurant:{resData.info.name}</h4>
            <h4>Location:{resData.info.locality}</h4>
            <h4>cuisines:{resData.info.cuisines.join(",")}</h4>
            <h4>Prize:{resData.info.costForTwo}</h4>
            <h4>deliveryTime:{resData.info.sla.deliveryTime} minutes</h4>
        </div>
        
    )
}


const restList = [
   {
    "info": {
    "id": "16886",
    "name": "Pizza Hut",
    "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
    "locality": "Basaveshwara Nagar",
    "areaName": "Basaveshwara Nagar",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Pizzas"
    ],
    "avgRating": 4,
    "parentId": "721",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 43,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "43 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 01:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
},
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/pizza-hut-basaveshwara-nagar-bangalore-16886",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "18974",
    "name": "Nandhana Palace",
    "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
    "locality": "Lower Parel",
    "areaName": "Mathikere- BELroad",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "Biryani",
      "Andhra",
      "South Indian",
      "North Indian"
    ],
    "avgRating": 4.4,
    "parentId": "2120",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 42,
      "lastMileTravel": 4,
      "serviceability": "SERVICEABLE",
      "slaString": "42 mins",
      "lastMileTravelString": "4.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 01:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹399",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/nandhana-palace-lower-parel-mathikere-bel-road-bangalore-18974",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "92283",
    "name": "McDonald's",
    "cloudinaryImageId": "405645b3118d83e89db4c65361e43733",
    "locality": "Orion Mall",
    "areaName": "Malleshwaram",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Beverages",
      "Cafe",
      "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "630",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 42,
      "lastMileTravel": 2.3,
      "serviceability": "SERVICEABLE",
      "slaString": "42 mins",
      "lastMileTravelString": "2.3 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 22:45:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "ITEMS",
      "subHeader": "AT ₹159"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/mcdonalds-orion-mall-malleshwaram-bangalore-92283",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "57086",
    "name": "Priyadarshini Veg",
    "cloudinaryImageId": "cdvfsusuorofg8dbocg4",
    "locality": "LCR Complex",
    "areaName": "Yeshwantpur",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "North Indian",
      "South Indian",
      "Chinese",
      "Fast Food",
      "Desserts"
    ],
    "avgRating": 4.5,
    "veg": true,
    "parentId": "9726",
    "avgRatingString": "4.5",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 26,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "26 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 22:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/priyadarshini-veg-lcr-complex-yeshwantpur-bangalore-57086",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "10830",
    "name": "New Shanthi Sagar",
    "cloudinaryImageId": "1c7692dd42dafe551ef81a25ff07de53",
    "locality": "P & T Colony",
    "areaName": "R T Nagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "North Indian",
      "Chinese",
      "South Indian"
    ],
    "avgRating": 4.2,
    "veg": true,
    "parentId": "1253",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 43,
      "lastMileTravel": 6.1,
      "serviceability": "SERVICEABLE",
      "slaString": "43 mins",
      "lastMileTravelString": "6.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 22:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/new-shanthi-sagar-p-and-t-colony-r-t-nagar-bangalore-10830",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "14417",
    "name": "A2B - Adyar Ananda Bhavan",
    "cloudinaryImageId": "btddmf7xu1yve2gkyeu4",
    "locality": "Bhashyam Circle",
    "areaName": "Rajajinagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "South Indian",
      "North Indian",
      "Sweets",
      "Chinese"
    ],
    "avgRating": 4.3,
    "veg": true,
    "parentId": "22",
    "avgRatingString": "4.3",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 37,
      "lastMileTravel": 4.2,
      "serviceability": "SERVICEABLE",
      "slaString": "37 mins",
      "lastMileTravelString": "4.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 22:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "pureveg",
                "imageId": "v1695133679/badges/Pure_Veg111.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-bhashyam-circle-rajajinagar-bangalore-14417",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "38206",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Vaishnavi Sapphire",
    "areaName": "Yeshwantpur",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Burgers",
      "Biryani",
      "American",
      "Snacks",
      "Fast Food"
    ],
    "avgRating": 3.9,
    "parentId": "547",
    "avgRatingString": "3.9",
    "totalRatingsString": "1K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "29 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "20% OFF",
      "subHeader": "UPTO ₹50"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/kfc-vaishnavi-sapphire-yeshwantpur-bangalore-38206",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "63508",
    "name": "The Bowl Company",
    "cloudinaryImageId": "bb6049fae59b8a2413a9177eb0338b49",
    "locality": "Ganesha Block",
    "areaName": "Rajajinagar",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "Pan-Asian",
      "Continental",
      "North Indian",
      "Desserts",
      "American",
      "Asian",
      "Beverages",
      "Biryani",
      "Chinese",
      "European",
      "Grill",
      "Hyderabadi",
      "Indian",
      "Italian",
      "Kebabs",
      "Lucknowi",
      "Mediterranean",
      "Mexican",
      "Mughlai",
      "Oriental",
      "Pastas",
      "Punjabi",
      "Raja"
    ],
    "avgRating": 4.4,
    "parentId": "4317",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 30,
      "lastMileTravel": 1.6,
      "serviceability": "SERVICEABLE",
      "slaString": "30 mins",
      "lastMileTravelString": "1.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:30:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
          "description": "OnlyOnSwiggy"
        }
      ],
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "OnlyOnSwiggy",
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "EVERY ITEM",
      "subHeader": "@ ₹149"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/the-bowl-company-ganesha-block-rajajinagar-bangalore-63508",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "27212",
    "name": "Thalassery Restaurant",
    "cloudinaryImageId": "jfwfzmajl59wpaphrkck",
    "locality": "Mathikere",
    "areaName": "Yeshwantpur",
    "costForTwo": "₹300 for two",
    "cuisines": [
      "South Indian",
      "Arabian",
      "Chinese",
      "Kerala",
      "North Indian"
    ],
    "avgRating": 4.1,
    "parentId": "14391",
    "avgRatingString": "4.1",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 2.9,
      "serviceability": "SERVICEABLE",
      "slaString": "31 mins",
      "lastMileTravelString": "2.9 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/thalassery-restaurant-mathikere-yeshwantpur-bangalore-27212",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "6926",
    "name": "FreshMenu",
    "cloudinaryImageId": "6c4de7b481d3614370e5062b2f33e7d6",
    "locality": "Dr. Rajkumar road",
    "areaName": "Rajajinagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Continental",
      "Chinese",
      "Oriental",
      "Asian",
      "Healthy Food",
      "Fast Food",
      "Indian",
      "Desserts"
    ],
    "avgRating": 4,
    "parentId": "398",
    "avgRatingString": "4.0",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 40,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "40 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 01:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "EVERY ITEM",
      "subHeader": "@ ₹129"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/freshmenu-dr-rajkumar-road-rajajinagar-bangalore-6926",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "10095",
    "name": "Nandhini Deluxe",
    "cloudinaryImageId": "myuxunvulpwj8dz6rmcs",
    "locality": "New BEL Road",
    "areaName": "Sanjay Nagar, New BEL Road",
    "costForTwo": "₹500 for two",
    "cuisines": [
      "North Indian",
      "Chinese",
      "Andhra",
      "Biryani"
    ],
    "avgRating": 4.2,
    "parentId": "2451",
    "avgRatingString": "4.2",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 38,
      "lastMileTravel": 4.1,
      "serviceability": "SERVICEABLE",
      "slaString": "38 mins",
      "lastMileTravelString": "4.1 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/nandhini-deluxe-new-bel-road-sanjay-nagar-new-bel-road-bangalore-10095",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "48580",
    "name": "Leon's - Burgers & Wings (Leon Grill)",
    "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
    "locality": "80 Feet Road",
    "areaName": "Sanjay Nagar",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "American",
      "Snacks",
      "Turkish",
      "Portuguese",
      "Continental"
    ],
    "avgRating": 4.4,
    "parentId": "371281",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 4.2,
      "serviceability": "SERVICEABLE",
      "slaString": "32 mins",
      "lastMileTravelString": "4.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 04:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹125 OFF",
      "subHeader": "ABOVE ₹299",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-80-feet-road-sanjay-nagar-bangalore-48580",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "195407",
    "name": "Paradise Biryani",
    "cloudinaryImageId": "f19zzsfjldeclxpnihov",
    "locality": "60 Ft Road",
    "areaName": "Rajajinagar",
    "costForTwo": "₹400 for two",
    "cuisines": [
      "Biryani",
      "Kebabs",
      "North Indian",
      "Hyderabadi"
    ],
    "avgRating": 4,
    "parentId": "700",
    "avgRatingString": "4.0",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 35,
      "lastMileTravel": 4.6,
      "serviceability": "SERVICEABLE",
      "slaString": "35 mins",
      "lastMileTravelString": "4.6 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹150 OFF",
      "subHeader": "ABOVE ₹599",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/paradise-biryani-60-ft-road-rajajinagar-bangalore-195407",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "41924",
    "name": "California Burrito",
    "cloudinaryImageId": "hhhmqpgnmvow7iyzlsdc",
    "locality": "Malleshwaram",
    "areaName": "Rajajinagar",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "Mexican",
      "American",
      "Salads",
      "Continental",
      "Keto",
      "Healthy Food"
    ],
    "avgRating": 4.6,
    "parentId": "1252",
    "avgRatingString": "4.6",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 38,
      "lastMileTravel": 1.8,
      "serviceability": "SERVICEABLE",
      "slaString": "38 mins",
      "lastMileTravelString": "1.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/california-burrito-malleshwaram-rajajinagar-bangalore-41924",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "33654",
    "name": "Polar Bear",
    "cloudinaryImageId": "57262fe3839f0bff174f3d7e7cc8a2b4",
    "locality": "Rajajinagar",
    "areaName": "Rajajinagar",
    "costForTwo": "₹200 for two",
    "cuisines": [
      "Ice Cream",
      "Desserts"
    ],
    "avgRating": 4.4,
    "parentId": "726",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 29,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "29 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:59:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/polar-bear-rajajinagar-bangalore-33654",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "369775",
    "name": "Andhra Gunpowder",
    "cloudinaryImageId": "harkdotxs4kje6q2g1qy",
    "locality": "Bimajyothinagar",
    "areaName": "Basaveshwara Nagar",
    "costForTwo": "₹350 for two",
    "cuisines": [
      "Andhra",
      "Biryani",
      "South Indian"
    ],
    "avgRating": 4.3,
    "parentId": "10496",
    "avgRatingString": "4.3",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 32,
      "lastMileTravel": 3.8,
      "serviceability": "SERVICEABLE",
      "slaString": "32 mins",
      "lastMileTravelString": "3.8 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 01:00:00",
      "opened": true
    },
    "badges": {
      "textExtendedBadges": [
        {
          "iconId": "guiltfree/GF_Logo_android_3x",
          "shortDescription": "options available",
          "fontColor": "#7E808C"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          "badgeObject": [
            {
              "attributes": {
                "description": "",
                "fontColor": "#7E808C",
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "₹100 OFF",
      "subHeader": "ABOVE ₹399",
      "discountTag": "FLAT DEAL"
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/andhra-gunpowder-bimajyothinagar-basaveshwara-nagar-bangalore-369775",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "27809",
    "name": "Natural Ice Cream",
    "cloudinaryImageId": "ww6mvqryffyek7badw4c",
    "locality": "MARGOSA Road",
    "areaName": "Malleshwaram",
    "costForTwo": "₹150 for two",
    "cuisines": [
      "Ice Cream",
      "Desserts"
    ],
    "avgRating": 4.8,
    "veg": true,
    "parentId": "2093",
    "avgRatingString": "4.8",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 27,
      "lastMileTravel": 3,
      "serviceability": "SERVICEABLE",
      "slaString": "27 mins",
      "lastMileTravelString": "3.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-22 00:00:00",
      "opened": true
    },
    "badges": {
      
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/natural-ice-cream-margosa-road-malleshwaram-bangalore-27809",
    "type": "WEBLINK"
  }
},
{
  "info": {
    "id": "384306",
    "name": "Glen's Bakehouse",
    "cloudinaryImageId": "yscehqnqqzdyia56mwdz",
    "locality": "80 Feet Road",
    "areaName": "Sanjay Nagar",
    "costForTwo": "₹600 for two",
    "cuisines": [
      "Desserts",
      "Bakery",
      "Beverages",
      "Continental",
      "Italian"
    ],
    "avgRating": 4.4,
    "parentId": "3220",
    "avgRatingString": "4.4",
    "totalRatingsString": "5K+",
    "sla": {
      "deliveryTime": 31,
      "lastMileTravel": 4.2,
      "serviceability": "SERVICEABLE",
      "slaString": "31 mins",
      "lastMileTravelString": "4.2 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-21 23:59:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "newg.png",
          "description": "Gourmet"
        }
      ]
    },
    "isOpen": true,
    "aggregatedDiscountInfoV2": {
      
    },
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "description": "Gourmet",
                "imageId": "newg.png"
              }
            }
          ]
        },
        "textBased": {
          
        },
        "textExtendedBadges": {
          
        }
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "https://www.swiggy.com/restaurants/glens-bakehouse-80-feet-road-sanjay-nagar-bangalore-384306",
    "type": "WEBLINK"
  }
},
];


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
   
}

const Applayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
};

 

const root= ReactDOM.createRoot(document.getElementById("root"));

 root.render(<Applayout/>);
