import axios from "axios";
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const StorePage = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");

        const productsWithImages = await Promise.all(
          response.data.data.map(async (product) => {
            try {
              const imageRes = await fetch(`/productImages/${product.id}`);
              if (!imageRes.ok) throw new Error("Image fetch failed");
              const images = await imageRes.json();

              // Add first image (or fallback)
              return {
                ...product,
                image: images.length > 0 ? images[0].image_url : "/default.jpg",
              };
            } catch (err) {
              // Fallback to default image on error
              return {
                ...product,
                image: "/default.jpg",
              };
            }
          })
        );
        setProducts(productsWithImages);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);
  return isLoading ? (
    <div className="flex justify-center items-center min-h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black"></div>
    </div>
  ) : (
    <div className="min-h-screen w-full bg-[#EFEEEA] py-12 px-4">
      <p className="text-center text-gray-700 mb-12">
        تصفح مجموعتنا الواسعة من المنتجات الرياضية عالية الجودة.
      </p>
      {/* يمكنك إضافة شبكة المنتجات هنا */}
      <Fragment>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            return (
              <Link to={`/product/${product.id}`} key={index}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  bg="bg-white"
                />
              </Link>
            );
          })}
        </div>
      </Fragment>
    </div>
  );
};

export default StorePage;
