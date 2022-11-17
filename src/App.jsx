import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import ProductsCard from "./components/ProductsCard";
import About from "./components/About";
import productsList from "./db/db";

function App() {
  const [products, setProducts] = useState(productsList);

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const createPrdouct = (newProduct) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const createdProduct = { id, ...newProduct };
    setProducts([...products, createdProduct]);
  };

  return (
    <>
      <Router>
        <Header />;
        <Routes>
          <Route
            path="/"
            element={
              <ProductsCard
                products={products}
                deleteProduct={deleteProduct}
                createProduct={createPrdouct}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
