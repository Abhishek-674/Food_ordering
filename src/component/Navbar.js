import { Link } from "react-router-dom";
const Navbar=()=>{
  return(
     <div className=" bg-gradient-to-r from-violet-200 to-pink-200 flex justify-between bg-teal-200">
        <div className="ml-4 p-1 ">
         <img className="w-20" src="https://st2.depositphotos.com/1810600/5838/v/450/depositphotos_58387439-stock-illustration-abstract-vector-logo.jpg" alt="" />
        </div>
        <div >
             <ul className="flex  text-xl mt-4 mr-10">
                <Link to="/"><li className="p-4">Home</li></Link>
                <Link to="/about"><li className="p-4">About</li></Link>
                <Link to="/contact"><li className="p-4"> contact</li></Link>
                <Link to="/cart"><li className="p-4">cart</li></Link>
             </ul>
        </div>
     </div>
  )
}
export default Navbar;
