const ProductCard = (props) => {
  return (
    <div
      className={`rounded-xl shadow-md py-6 flex flex-col items-center w-full max-w-xs sm:max-w-[15rem] mx-auto  ${
        props.bg ? props.bg : "bg-gradient-to-br from-green-100 to-blue-50"
      }`}
    >
      <img
        src={props.image || "https://via.placeholder.com/150"}
        alt="Product Image"
        className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-base sm:text-lg mb-2 text-center">
        {props.name || "Product"}
      </h3>
      <p className="text-gray-600 mb-2 text-center font-semibold w-full px-4 sm:px-0">
        da {props.price || "no price"}
      </p>
      <div className="flex flex-col justify-center items-center sm:flex-row gap-2 w-full px-4 sm:px-0">
        <button className="bg-white border border-black duration-500 text-black px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium min-w-24 sm:w-auto">
          إلى السلة
        </button>
        <button className="bg-black  duration-500 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg font-medium min-w-24 sm:w-auto">
          المزيد
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
