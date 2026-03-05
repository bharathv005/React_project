import { useState, useEffect, useContext } from "react";
import Product from "./Product";
import { Skeleton } from "./Skeleton";
import { Link } from "react-router-dom";
import { HOF } from "./Product";
import UserContext from "../utils/UserContext";



export const ProductCard = () => {
  const [listOfProducts, setListOfProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchtext, setSearchtext] = useState("");
  const [userName, setUserName] = useState("bvk");

  const user = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const resData = await data.json();
    setListOfProducts(resData);
    setFilteredProducts(resData);
  };


  const HOFComponent = HOF(Product);  // This is a higher-order component that wraps the Product component

  if (filteredProducts.length === 0) return <Skeleton />;

  return (
    <div className="bg-gray-200 min-h-screen p-6">

      {/* Search Section */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        <input
          className="border rounded-lg px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Search products..."
          value={searchtext}
          onChange={(e) => setSearchtext(e.target.value)}
        />

        <button
          className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => {
            const filteredData = listOfProducts.filter(product =>
              product.title.toLowerCase().includes(searchtext.toLowerCase())
            );
            setFilteredProducts(filteredData);
          }}
        >
          Search
        </button>

        <button
          className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          onClick={() => {
            const result = listOfProducts.filter(
              product => product.rating.rate >= 4
            );
            setFilteredProducts(result);
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition duration-300 p-4"
          >
            {
              product.rating.rate >= 4 ? <HOFComponent product={product} /> : <Product product={product} />
            }
          </Link>
        ))}
      </div>

    </div>
  );
};