import Navbar from "./Navbar";
import Card from "./Card";
import {restraunt} from "./constant"
import { useEffect,useState} from "react";
const Home = () => { 

    //  const [data,setdata]=useState([{
    //     "id": "25620",
    //     "name": "KFC",
    //     "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/69e69c55-d2bb-4207-8310-131fc693f78a_25620.JPG",
    //     "locality": "Intermediate Ring Road",
    //     "areaName": "Ejipura",
    //     "costForTwo": "₹400 for two",
    //     "cuisines": [
    //     "Burgers",
    //     "Fast Food",
    //     "Rolls & Wraps"
    //     ],
    //     "avgRating": 4.3,
    //     "parentId": "547",
    //     "avgRatingString": "4.3",
    //     "totalRatingsString": "31K+",
    //     "sla": {
    //     "deliveryTime": 20,
    //     "lastMileTravel": 0.9,
    //     "serviceability": "SERVICEABLE",
    //     "slaString": "20-25 mins",
    //     "lastMileTravelString": "0.9 km",
    //     "iconType": "ICON_TYPE_EMPTY"
    //     },
    //     "availability": {
    //     "nextCloseTime": "2024-10-22 00:00:00",
    //     "opened": true
    //     },
    //     "badges": {},
    //     "isOpen": true,
    //     "type": "F",
    //     "badgesV2": {
    //     "entityBadges": {
    //     "imageBased": {},
    //     "textBased": {},
    //     "textExtendedBadges": {}
    //     }
    //     },
    //     "aggregatedDiscountInfoV3": {
    //     "header": "40% OFF",
    //     "subHeader": "UPTO ₹80"
    //     },
    //     "differentiatedUi": {
    //     "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    //     "differentiatedUiMediaDetails": {
    //     "lottie": {},
    //     "video": {}
    //     }
    //     },
    //     "reviewsSummary": {},
    //     "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    //     "restaurantOfferPresentationInfo": {},
    //     "externalRatings": {
    //     "aggregatedRating": {
    //     "rating": "--"
    //     }
    //     },
    //     "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    //     }]);
     

    // const result= async()=>{
    //     const x = await fetch("https://api.edamam.com/search?q=burger&app_id=e604bc61&app_key=28742b1ba29f73f86486988c1308a75e");
    //     const ar = await x.json();
        
    //     setdata(ar.hits);
    //     // console.log(typeof data);
        
    // }
    // useEffect(()=>{
    //     // result();
    // },[])
    const [res,setres]=useState([]);
    const [inputval,setinputval]=useState("");
    const change_handler=(e)=>{
      setinputval(e.target.value);
      console.log(e.target.value)
    }
    const name_handler=()=>{
      const x=restraunt.filter((item)=>{
        return item.info.name.toLowerCase().includes(inputval.toLowerCase());
      })
      setres(x);
    }
    const rating_handler=()=>{
       const x=restraunt.filter((items)=>{
           console.log(items.info.avgRating)
            return items.info.avgRating>4.5;
       })
       console.log(x);
       setres(x);
        
    }
    const pizza_handler=()=>{
      const x=restraunt.filter((item)=>{
         return item.info.cuisines.includes("Pizzas")
      })
      // console.log(x);
      setres(x);
    }
    const dessert_handler=()=>{
      const x=restraunt.filter((item)=>{
         return item.info.cuisines.includes("Desserts")
      })
      // console.log(x);
      setres(x);
    }
    const burger_handler=()=>{
      const x=restraunt.filter((item)=>{
         return item.info.cuisines.includes("Burgers")
      })
      // console.log(x);
      setres(x);
    }
    useEffect(()=>{
        setres(restraunt)
    },[])
    
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200">
      <Navbar />
      <h1 className="border-b-4 border-gray-950"></h1>
      <div className="mt-16 flex  justify-evenly">
        <div className="flex ml-10 flex-wrap ">
          <input onChange={change_handler}
            className="border-2 mb-1 text-center w-72 mr-9"
            type="text"
            placeholder="Search Restraunt"
          />
          <button  onClick={name_handler}className=" mr-14 mt-text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search Restraunt</button>
          <button onClick={rating_handler} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Rating >=4.5</button>
          <button onClick={pizza_handler} className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Pizzas</button>
          <button onClick={dessert_handler}className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Desserts</button>
          <button onClick={burger_handler}class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Burgers</button>
        </div>
        
      </div>
      <div className="flex flex-wrap mx-14 mt-10">
      {
        res.length==0?
           <h1>Sorry.....No Restraunt found</h1>:
        res.map((items,ind)=>(
           <Card key={ind} item={items}/>
        ))
      }
      </div>
    
      
    </div>
  );
};
export default Home;
