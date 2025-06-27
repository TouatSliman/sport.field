import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setShow(true);
        lastScrollY.current = window.scrollY;
        return;
      }
      if (window.scrollY > lastScrollY.current) {
        setShow(false); // scrolling down
      } else {
        setShow(true); // scrolling up
      }
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white/80 w-full backdrop-blur-xs px-4 md:px-8 py-1 flex items-center justify-between  sticky top-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link
        to="/"
        className="font-bold text-xl md:text-2xl text-gray-900 tracking-wider"
      >
        <img src="/logo.svg" alt="logo" className="w-16 h-16" />
      </Link>

      <ul className="flex gap-8 list-none m-0 p-0">
        <li key="store">
          <Link
            to="/store"
            className="text-gray-900 hover:text-gray-300 transition-colors duration-300 w-8 h-8 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M22.3596 8.27L22.0696 5.5C21.6496 2.48 20.2796 1.25 17.3497 1.25H14.9896H13.5097H10.4697H8.98965H6.58965C3.64965 1.25 2.28965 2.48 1.85965 5.53L1.58965 8.28C1.48965 9.35 1.77965 10.39 2.40965 11.2C3.16965 12.19 4.33965 12.75 5.63965 12.75C6.89965 12.75 8.10965 12.12 8.86965 11.11C9.54965 12.12 10.7097 12.75 11.9997 12.75C13.2896 12.75 14.4197 12.15 15.1096 11.15C15.8797 12.14 17.0696 12.75 18.3096 12.75C19.6396 12.75 20.8396 12.16 21.5896 11.12C22.1896 10.32 22.4597 9.31 22.3596 8.27Z"
                  fill="#292D32"
                ></path>
                <path
                  d="M11.3491 16.6602C10.0791 16.7902 9.11914 17.8702 9.11914 19.1502V21.8902C9.11914 22.1602 9.33914 22.3802 9.60914 22.3802H14.3791C14.6491 22.3802 14.8691 22.1602 14.8691 21.8902V19.5002C14.8791 17.4102 13.6491 16.4202 11.3491 16.6602Z"
                  fill="#292D32"
                ></path>
                <path
                  d="M21.3709 14.3981V17.3781C21.3709 20.1381 19.1309 22.3781 16.3709 22.3781C16.1009 22.3781 15.8809 22.1581 15.8809 21.8881V19.4981C15.8809 18.2181 15.4909 17.2181 14.7309 16.5381C14.0609 15.9281 13.1509 15.6281 12.0209 15.6281C11.7709 15.6281 11.5209 15.6381 11.2509 15.6681C9.47086 15.8481 8.12086 17.3481 8.12086 19.1481V21.8881C8.12086 22.1581 7.90086 22.3781 7.63086 22.3781C4.87086 22.3781 2.63086 20.1381 2.63086 17.3781V14.4181C2.63086 13.7181 3.32086 13.2481 3.97086 13.4781C4.24086 13.5681 4.51086 13.6381 4.79086 13.6781C4.91086 13.6981 5.04086 13.7181 5.16086 13.7181C5.32086 13.7381 5.48086 13.7481 5.64086 13.7481C6.80086 13.7481 7.94086 13.3181 8.84086 12.5781C9.70086 13.3181 10.8209 13.7481 12.0009 13.7481C13.1909 13.7481 14.2909 13.3381 15.1509 12.5981C16.0509 13.3281 17.1709 13.7481 18.3109 13.7481C18.4909 13.7481 18.6709 13.7381 18.8409 13.7181C18.9609 13.7081 19.0709 13.6981 19.1809 13.6781C19.4909 13.6381 19.7709 13.5481 20.0509 13.4581C20.7009 13.2381 21.3709 13.7181 21.3709 14.3981Z"
                  fill="#292D32"
                ></path>
              </g>
            </svg>
          </Link>
        </li>

        <li key="cart">
          <Link
            to="/cart"
            className="text-gray-900 relative hover:text-gray-300 transition-colors duration-300 w-8 h-8 flex items-center justify-center"
          >
            <div className="p-1 absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              <span className="font-bold">0</span>
            </div>
            <svg
              version="1.1"
              id="shopping_x5F_carts_1_"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 128 128"
            >
              <g id="_x31_5_1_">
                <path
                  fill="#020202"
                  d="M122.6 46.3H70.8V19.1c0-3-2.4-5.4-5.4-5.4-3 0-5.4 2.4-5.4 5.4v27.2H5.4c-3 0-5.4 2.4-5.4 5.4 0 3 2.4 5.4 5.4 5.4h117.1c3 0 5.4-2.4 5.4-5.4.1-3-2.3-5.4-5.3-5.4zM19.1 106.2c0 4.5 3.7 8.2 8.2 8.2h73.5c4.5 0 8.2-3.7 8.2-8.2l10.9-46.3H8.2l10.9 46.3zm76.2-36.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4V83c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V69.4zm0 21.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v13.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V91.2zM84.4 69.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4V83c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V69.4zm0 21.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v13.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V91.2zM73.5 69.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4V83c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V69.4zm0 21.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v13.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V91.2zM62.6 69.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4V83c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V69.4zm0 21.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v13.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V91.2zM51.7 69.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4V83c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V69.4zm0 21.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v13.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V91.2zM40.9 69.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4V83c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V69.4zm0 21.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v13.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V91.2zM30 69.4c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4V83c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V69.4zm0 21.8c0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4v13.6c0 .8-.6 1.4-1.4 1.4-.8 0-1.4-.6-1.4-1.4V91.2z"
                  id="icon"
                />
              </g>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
