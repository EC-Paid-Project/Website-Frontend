import React, { useState, useEffect, lazy, Suspense } from "react";
import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CustomCarousel from "../components/Carousel";
import { fetchAllProducts, fetchProductBySearch } from "../actions/action";
import { useSelector,useDispatch } from "react-redux";
const ProductView = lazy(() => import("../components/ProductView"));

const HomePage = () => {
const dispatch =useDispatch()
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
//get product from redux selector
const productList = useSelector((state) => state.centralStore.productList);
const isLoading = useSelector((state) => state.centralStore.isLoading);
  useEffect(() => {
    setLoading(true);
    if (searchQuery) {
      dispatch(fetchProductBySearch(searchQuery))
        
        .catch((error) => console.error(error));
    } else {
      dispatch(fetchAllProducts()).then((response) => {
        console.log(productList);
      }
      );


    }
  }, [searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div className="relative min-h-screen ">
        <CustomCarousel />
        <div className="product-title">
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
        <Suspense fallback={<div>Loading...</div>}>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            productList.map((product) => (
              <div className="product-1" key={product.id}>
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
                  color0={"bg-color-blue"}
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
