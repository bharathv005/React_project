import {useState,useEffect,useContext} from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
const Navbar = () =>{
const user = useContext(UserContext);
let [btnName,setBtnName]=useState("Light");
const cartItems = useSelector((state) => state.cart.cartItems);

return (
    <div className="flex justify-between px-2 shadow-md h-16 mt-2" >
        <h1 className="font-bold text-2xl">BVK</h1>
        <ul className="flex px-2 gap-4  mt-2">
            <li><Link style={{"color":"black","textDecoration":"none"}} to="/">HOME</Link></li>
            <li> <Link style={{"color":"black","textDecoration":"none"}} to="/Men">MEN</Link></li>
            <li><Link style={{"color":"black","textDecoration":"none"}} to="/Women">WOMEN</Link></li>
            <li><Link style={{"color":"black","textDecoration":"none"}} to="/Kids">KIDS</Link></li>
            <li><Link style={{"color":"black","textDecoration":"none"}} to="/Grocery">GROCERY</Link></li>
            <li><Link style={{"color":"black","textDecoration":"none"}} to="/Cart">CART({cartItems.length})</Link></li>
            <li><Link style={{"color":"black","textDecoration":"none"}} to="/About">ABOUT</Link></li>
            
            <button className="bg-blue-600 text-white h-8 justify-center px-4 py-1 rounded-md hover:bg-blue-600" onClick = { () =>{
                btnName==="Light"?setBtnName("Dark"):setBtnName("Light");
                console.log(btnName);
            }}>{btnName}</button>
        </ul>
    </div>
    )
};

export default Navbar;