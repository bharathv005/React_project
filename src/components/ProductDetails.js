import { useParams } from "react-router-dom";
import { Skeleton } from "./Skeleton";
import useGetSingleProduct from "../hook/useGetSingleProduct";
import { useDispatch } from "react-redux";
import { addItems } from "../store/cardSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const singleProduct = useGetSingleProduct(id);
  const dispatch = useDispatch();

  if (singleProduct === null) {
    return <Skeleton />;
  }

  const { image, title, description, price, rating } = singleProduct;

  const handleAddToCart = () => {
    // Logic to add the product to the cart
    dispatch(addItems(singleProduct));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10 transition-all duration-300 hover:shadow-2xl">

        {/* Product Image */}
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="h-80 object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {title}
            </h1>

            <div className="flex items-center gap-4 mb-4">
              <span className="bg-yellow-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ {rating.rate}
              </span>

              <span className="text-gray-500 text-sm">
                ({rating.count} reviews)
              </span>
            </div>

            <p className="text-gray-600 mb-6 leading-relaxed">
              {description}
            </p>

            <p className="text-2xl font-bold text-green-600 mb-6">
              ${price}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button onClick={handleAddToCart} className="flex-1 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition duration-300">
              Add to Cart
            </button>

            <button className="flex-1 border border-gray-300 py-3 rounded-xl font-semibold hover:bg-gray-100 transition duration-300">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetails;