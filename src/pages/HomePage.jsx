import React, { useState, useEffect, lazy, Suspense, useRef } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCarousel from "../components/Carousel";
import { fetchAllProducts, fetchProductBySearch, getDistributors } from "../actions/action";
import { useSelector, useDispatch } from "react-redux";
// import ProductView from "../components/ProductView";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const ProductView = lazy(() => import("../components/ProductView"));
const HomePage = () => {
  useEffect(() => {
    dispatch(getDistributors())
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
    setLoading(true);
    if (searchQuery) {
      dispatch(fetchProductBySearch(searchQuery)).catch((error) =>
        console.error(error)
      );
    } else {
      dispatch(fetchAllProducts()).then((response) => {
        console.log(productList);
      });
    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const location = useLocation();

  const productsSectionRef = useRef(null);

  useEffect(() => {
    // console.log(productList)
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
  console.log(user);

  return (
    <div>
      <Navbar productsSectionRef={productsSectionRef} />
      <div className="relative min-h-screen ">
        <div data-aos="zoom-in" data-aos-duration="1000">
          <CustomCarousel />
        </div>
        <div id="Products" ref={productsSectionRef} className="product-title">
          <h2 className="underline">Our Products</h2>
        </div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        <Suspense
          fallback={
            <div className="mx-auto w-max">
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
          }
        >
          {isLoading ? (
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
          ) : (
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
                  color1={"bg-color-white"}
                  color0={"bg-color-white"}
                />
              </div>
            ))
          )}
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
