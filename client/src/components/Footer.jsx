import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <h1 className="max-w-lg text-lg font-semibold tracking-tight text-gray-800 xl:text-xl ">
              اشترك في نشرتنا الإخبارية للحصول على أحدث العروض والمنتجات
            </h1>

            <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
              <input
                id="email"
                type="text"
                className="px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-black  focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-black"
                placeholder="ادخل بريدك الالكتروني"
                aria-label="Email"
              />

              <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                اشترك الآن
              </button>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">المساعدة</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <Link
                to="/"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-black"
              >
                الرئيسية
              </Link>
              <Link
                to="/about"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-black"
              >
                من نحن
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-black"
              >
                اتصل بنا
              </Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-gray-800 ">الحساب</p>

            <div className="flex flex-col items-start mt-5 space-y-2">
              <a
                href="#"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-black"
              >
                فريلانس
              </a>
              <Link
                to="/login"
                className="text-gray-600 transition-colors duration-300 hover:underline hover:text-black"
              >
                تسجيل الدخول
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 md:my-8" />

        <div className="flex items-center justify-between">
          <a href="#">
            <img className="w-auto h-16" src="/logo.svg" alt="logo" />
          </a>

          <div className="flex items-center justify-center -mx-2">
            <a
              href="#"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-black"
              aria-label="tiktok"
            >
              <svg
                className="w-[18px] h-[18px]"
                fill="#fff"
                viewBox="-6 -6 36.00 36.00"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0">
                  <rect
                    x="-6"
                    y="-6"
                    width="36.00"
                    height="36.00"
                    rx="18"
                    className="fill-current"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <title>TikTok icon</title>
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                </g>
              </svg>
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61577145071895"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-black"
              aria-label="Facebook"
            >
              <svg
                className="w-5 h-5 fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.00195 12.002C2.00312 16.9214 5.58036 21.1101 10.439 21.881V14.892H7.90195V12.002H10.442V9.80204C10.3284 8.75958 10.6845 7.72064 11.4136 6.96698C12.1427 6.21332 13.1693 5.82306 14.215 5.90204C14.9655 5.91417 15.7141 5.98101 16.455 6.10205V8.56104H15.191C14.7558 8.50405 14.3183 8.64777 14.0017 8.95171C13.6851 9.25566 13.5237 9.68693 13.563 10.124V12.002H16.334L15.891 14.893H13.563V21.881C18.8174 21.0506 22.502 16.2518 21.9475 10.9611C21.3929 5.67041 16.7932 1.73997 11.4808 2.01722C6.16831 2.29447 2.0028 6.68235 2.00195 12.002Z"></path>
              </svg>
            </a>

            <a
              href="https://www.instagram.com/_sport.field/"
              className="mx-2 text-gray-600 transition-colors duration-300 hover:text-black "
              aria-label="instagram"
            >
              <svg
                className="w-[18px] h-[18px] fill-current"
                viewBox="-4.8 -4.8 33.60 33.60"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth="1.08"
              >
                <g
                  id="SVGRepo_bgCarrier"
                  strokeWidth="0"
                  transform="translate(0,0), scale(1)"
                >
                  <rect
                    x="-4.8"
                    y="-4.8"
                    width="33.60"
                    height="33.60"
                    rx="16.8"
                    strokeWidth="0"
                  ></rect>
                </g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  stroke="#CCCCCC"
                  strokeWidth="0.43200000000000005"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#ffffffff"
                  ></path>{" "}
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="#ffffffff"
                  ></path>{" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="#ffffffff"
                  ></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
