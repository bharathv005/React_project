import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const useGetSingleProduct = (id) =>{
    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() =>{
        fetchSingleProduct();
    },[]);

    const fetchSingleProduct = async() =>{
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const resData = await data.json();
        console.log(resData);
        setSingleProduct(resData);
    }

    return singleProduct;
};
export default useGetSingleProduct;