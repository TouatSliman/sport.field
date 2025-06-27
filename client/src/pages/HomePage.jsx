import Carousel from "../components/Carousel";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
  const images = [
    "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fHNwb3J0fGVufDB8fDB8fHww", // Running shoes
    "https://images.unsplash.com/photo-1599586120429-48281b6f0ece?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA4fHxzcG9ydHxlbnwwfHwwfHx8MA%3D%3D", // Basketballs
    "https://images.unsplash.com/photo-1487491506942-373c8f7a7ad5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHNwb3J0fGVufDB8fDB8fHww", // Soccer gear
    "https://shop.mango.com/assets/rcs/pics/static/T8/fotos/S/87090594_99.jpg?imwidth=2048&imdensity=1&ts=1728898486091",
  ];

  return (
    <div className="min-h-screen w-full bg-[#EFEEEA] flex flex-col">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 gap-10">
        <div className="flex-1 text-right">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-4">
            اكتشف <span className="text-gray-600">أفضل العروض </span> للمنتجات
            الرياضية
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
            <span className="font-bold text-gray-600">
              استمتع بتجربة تسوق فريدة
            </span>
            <span> مع مجموعتنا الواسعة من المنتجات الرياضية عالية الجودة.</span>
            <br />
            <span className="inline-block mt-2">
              <span className="font-semibold text-black">
                سواء كنت تبحث عن:
              </span>
              <span className="mx-1">أحذية رياضية</span>
              <span className="mx-1">|</span>
              <span className="mx-1">ملابس رياضية</span>
              <span className="mx-1">|</span>
              <span className="mx-1">معدات رياضية</span>
              <span>، لدينا كل ما تحتاجه.</span>
            </span>
          </p>
          <Link
            to="/store"
            className="inline-block bg-gradient-to-br from-black to-[#434343] text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition"
          >
            استعرض المنتجات
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="featured"
        className="px-6 md:px-16 py-12 bg-white shadow-lg -mt-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
          المنتجات المميزة
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <ProductCard
            name="حذاء رياضي"
            price="1500"
            image="https://dz-shoes.com/cdn/shop/products/1_22.jpg?v=1644052096"
            bg="bg-[#EFEEEA]"
          />
          <ProductCard
            name="تيشيرت رياضي"
            price="500"
            image="https://share7a.com/wp-content/uploads/2024/01/2.jpg"
            bg="bg-[#EFEEEA]"
          />
          <ProductCard
            name="كرة قدم"
            price="300"
            image="https://m.media-amazon.com/images/I/71zOQlqMTkL.jpg"
            bg="bg-[#EFEEEA]"
          />
        </div>
      </section>

      {/* Newsletter 
      <section className="px-6 md:px-16 py-12 flex flex-col items-center bg-gradient-to-r from-green-200 to-blue-100 rounded-b-3xl">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
          اشترك في النشرة الإخبارية
        </h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
          كن أول من يعرف عن أحدث العروض والمنتجات الجديدة. اشترك في نشرتنا
          الإخبارية للحصول على تحديثات حصرية.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <input
            type="email"
            placeholder="ادخل بريدك الالكتروني"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold"
          >
            اشترك الآن
          </button>
        </form>
      </section>*/}
    </div>
  );
};

export default HomePage;
