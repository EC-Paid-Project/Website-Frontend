import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCarousel from "../components/Carousel";
import { fetchAllProducts, fetchProductBySearch, getDistributors } from "../actions/action";
import {BsSearch} from "react-icons/bs";
import { useSelector, useDispatch } from "react-redux";
import ProductView from "../components/ProductView";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";

// const ProductView = lazy(() => import("../components/ProductView"));
const HomePage = () => {
  useEffect(() => {
    AOS.init();
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  //get product from redux selector
  const productList = useSelector((state) => state.centralStore.productList);
  const isLoading = useSelector((state) => state.centralStore.isLoading);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery !== "") {
        await dispatch(fetchProductBySearch(searchQuery));
      } else {
        await dispatch(fetchAllProducts());
      
      }
    };
    fetchData();
  }, [searchQuery]);

  const handleSearch = (event) => {
    const a=event.target.value
    setSearchQuery(a);

  };

  const location = useLocation();

  const productsSectionRef = useRef(null);

  useEffect(() => {
   
    if (location.state && location.state.scrollTarget === "products") {
      if (productsSectionRef && productsSectionRef.current) {
        window.scrollTo({
          top: productsSectionRef.current.offsetTop,
          behavior: "smooth",
        });
      }
    }
  }, [location.state]);
  // setUser(JSON.parse(localStorage.getItem("user")))

  
  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen ">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <CustomCarousel />
        </div>
        <div id="Products" ref={productsSectionRef} className="product-title">
          <h2 className="underline">Our Products</h2>
        </div>

        <div className="search-bar flex justify-center items-center bg-gray-100 rounded-md px-4 py-2 w-1/2 shadow-md">
  <input
    className="bg-gray-400 rounded-md px-4 py-2 w-1/2 shadow-md"
    type="text"
    placeholder="Search products..."
    // value={searchQuery}
    onChange={handleSearch}
  />
  <span className="justify-self-center align-text-bottom px-2"><BsSearch/></span>
</div>

       
          {
          
         
          
          isLoading ? (
            <div className="mx-auto w-max h-[50vh] mt-20">
              <Circles
                height="80"
                width="80"
                color="#2c9fe6"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
              />
            </div>
          ) :
          (productList.length===0)?
          (
           <div className="mx-auto w-max h-[50vh] mt-20">
           <h1 className="text-2xl font-bold">No Item Found</h1>
         </div> 
         ):
        (
            (productList).map((product) => (
              <div
                className="product-1"
                key={product.id}
                data-aos="fade-up"
                data-aos-duration="1800"
              >
                <ProductView
                  title={product.name}
                  id={product.id}
                  image={product.image}
                  desc={product.description}
                  price={product.price}
                  available={product.availablility}
                  size={product.size}
                  weight={product.weight}
                  discount={product.discount}
                  color1={"bg-color-white"}
                  color0={"bg-color-white"}
                />
              </div>
            ))
          )}
    
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
