const Product = ({ product }) => {

  const { image, title, price, rating } = product;

  return (
    <div className="flex flex-col items-center text-center h-full">

      {/* Image Container */}
      <div className="w-full h-52 bg-gray-100 flex justify-center items-center rounded-lg p-4">
        <img
          src={image}
          alt={title}
          className="h-full object-contain"
        />
      </div>

      {/* Title */}
      <h2 className="mt-4 text-sm font-semibold line-clamp-2">
        {title}
      </h2>

      {/* Rating */}
      <p className="text-yellow-600 font-medium mt-1">
        Rating: {rating.rate}
      </p>

      {/* Price */}
      <p className="text-blue-600 font-bold text-lg">
        ${price}
      </p>

      {/* Add to Cart Button */}
      <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
        Add to Cart
      </button>

    </div>
  );
};

export default Product;

export const HOF = (Product) => {
  return (props) => {
    return (
      <div className="relative">
      <span className="absolute -top-2 -left-1 bg-black text-white px-4 py-1 m-1 rounded-md">Best Seller</span>
      <Product {...props} />
    </div>
    )
  }
}