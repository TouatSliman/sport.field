import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import StorePage from "./pages/StorePage";
import NotFound from "./pages/404Page";
import Layout from "./components/Layout";
import axios from "axios";
import LoginPage from "./pages/LoginPage";

function App() {
  // Set the base URL for axios requests
  axios.defaults.baseURL =
    import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
  return (
    <div className="min-h-screen bg-[#EFEEEA] flex flex-col items-center">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/Dashboard"
          element={
            <div className="text-center mt-20 text-2xl">
              Dashboard Page (To be implemented)
            </div>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
