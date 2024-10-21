
import React, { useEffect } from "react";
import { useState } from "react";
const url="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const Card=(props)=>{
//    console.log(props);
   const{name,cuisines,avgRating,cloudinaryImageId,areaName}=props?.item.info;
   
    const arr=[{
        "id": "25620",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
        "locality": "Intermediate Ring Road",
        "areaName": "Ejipura",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Burgers",
        "Fast Food",
        "Rolls & Wraps"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "31K+",
        "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 0.9,
        "serviceability": "SERVICEABLE",
        "slaString": "20-25 mins",
        "lastMileTravelString": "0.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-10-22 00:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
        "aggregatedRating": {
        "rating": "--"
        }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        }
        ];
       
    return (
       
          <div className="w-[300px] h-[420px] border-2 m-5 p-5 bg-white">
            <div  >
                <img  src={url+cloudinaryImageId} className="w-[260px] h-[240px]"  />
            </div>
            <div className="mt-3 ">
                <h1 className="font-serif font-semibold">{name}</h1>
                <h2 className=" ">{cuisines.join(", ")}</h2>
                <h3 className="font-mono">{areaName}</h3>
                <h1 className="font-bold">{avgRating}⭐</h1>
            </div>
            <div>

            </div>
          </div>    
    )
}
export default Card;
