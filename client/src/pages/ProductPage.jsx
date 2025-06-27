import { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "../components/Carousel";

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [deliveryPrices, setDeliveryPrices] = useState([]);
  const [activeDeleveryPrices, setActiveDeleveryPrices] = useState({
    homeDeliveryPrice: "",
    officeDeliveryPrice: "",
  });
  const [deliveryPrice, setDeliveryPrice] = useState("");
  const id = window.location.pathname.split("/").pop();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`/api/products/${id}`);
        setProduct(response.data.data);
        getProductImages();
        getState();
        getDeliveryPrices();
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, []);

  function getProductImages() {
    axios
      .get(`/productImages/${id}`)
      .then((response) => {
        if (response.data.success) {
          setImages(response.data.data);
        } else {
          console.error("Failed to fetch product images");
        }
      })
      .catch((error) => {
        console.error("Error fetching product images:", error);
      });
  }

  function getState() {
    axios
      .get("/getState")
      .then((response) => {
        if (response.data.success) {
          setState(response.data.data);
        } else {
          console.error("Failed to fetch states");
        }
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  }

  function getCity(stateCode) {
    axios
      .get(`/getCity/${stateCode}`)
      .then((response) => {
        if (response.data.success) {
          setCity(response.data.data);
        } else {
          console.error("Failed to fetch cities");
        }
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  }

  function getDeliveryPrices() {
    axios
      .get("/deliveryPrices")
      .then((response) => {
        if (response.data.success) {
          setDeliveryPrices(response.data.data);
        } else {
          console.error("Failed to fetch delivery prices");
        }
      })
      .catch((error) => {
        console.error("Error fetching delivery prices:", error);
      });
  }

  return (
    <div className="min-h-screen bg-[#EFEEEA] from py-12 px-4">
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black"></div>
        </div>
      ) : (
        <div className=" text-gray-700 text-lg leading-relaxed sm:flex ">
          {/* تفاصيل المنتج ستظهر هنا */}
          <div className="p-6 w-full ">
            <Carousel images={images.map((img) => img.image_url)} />
            {/*<img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />*/}
            <div className="w-full text-[#434343]">
              <h1 className="text-3xl text-center font-bold mb-2 mt-8 ">
                {product.name}
              </h1>
              <p className="text-xl font-semibold mb-4 text-right">
                السعر: <span className="font-extrabold">{product.price}</span>{" "}
                د.ج
              </p>
            </div>
          </div>
          <div className="p-6 pt-0 w-full flex flex-col justify-center items-center">
            <div className=" bg-white rounded-lg shadow-md p-6 w-full ">
              <div className="mb-6 text-center">
                <h1 className="text-2xl text-black font-bold ">ملخص الطلب </h1>
                <p className="text-md">ادخل التفاصيل الخاصة بك هنا</p>
              </div>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700">الاسم الكامل:</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="أدخل اسمك"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">رقم الهاتف:</label>
                  <input
                    type="tel"
                    className="w-full p-2 border border-gray-300 rounded"
                    placeholder="أدخل رقم هاتفك"
                    pattern="[0-9]{10}"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700">الولاية :</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => {
                      getCity(e.target.value);
                      const selectedState = deliveryPrices.find(
                        (item) => item.wilaya_code === e.target.value
                      );
                      if (selectedState) {
                        setActiveDeleveryPrices({
                          homeDeliveryPrice: selectedState.home_delivery_price,
                          officeDeliveryPrice:
                            selectedState.office_delivery_price,
                        });
                      }
                    }}
                    name=""
                    id=""
                  >
                    <option value="" className="text-gray-300 text-center">
                      -- قائمة الولايات --
                    </option>
                    {state.map((item, index) => (
                      <option key={index} value={item.wilaya_code}>
                        {item.wilaya_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700">البلدية :</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    name=""
                    id=""
                  >
                    <option value="" className="text-gray-300 text-center">
                      -- قائمة البلديات --
                    </option>
                    {city.map((item, index) => (
                      <option key={index} value={item.commune_name}>
                        {item.commune_name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col space-y-2 border border-gray-300 rounded p-4">
                  <label className="flex justify-between text-gray-700">
                    <p> توصيل الي مكتب التوصيل</p>
                    <div className="flex items-center">
                      <p className="text-sm mr-2">
                        {" "}
                        د.ج {activeDeleveryPrices.officeDeliveryPrice}
                      </p>
                      <input
                        onClick={() =>
                          setDeliveryPrice(
                            activeDeleveryPrices.officeDeliveryPrice
                          )
                        }
                        type="radio"
                        name="delivery"
                        id=""
                      />
                    </div>
                  </label>
                  <label className="flex justify-between text-gray-700">
                    <p>توصيل الي باب المنزل</p>
                    <div className="flex items-center">
                      <p className="text-sm mr-2">
                        {" "}
                        د.ج {activeDeleveryPrices.homeDeliveryPrice}
                      </p>
                      <input
                        onClick={() =>
                          setDeliveryPrice(
                            activeDeleveryPrices.homeDeliveryPrice
                          )
                        }
                        type="radio"
                        name="delivery"
                        id=""
                      />
                    </div>
                  </label>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-tr from-black to-[#434343]  text-white font-semibold w-3/5 px-4 py-2 rounded  transition duration-300 hover:shadow-lg animate-left-right"
                  >
                    أطلب الآن
                    <span className="block text-sm font-normal">
                      total :{" "}
                      {Number(deliveryPrice || 0) + Number(product.price || 0)}
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <p className="text-gray-600 mb-4 mt-8">{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductPage;
