import React from "react";
import Product from "./Product";
import CreateForm from "./CreateForm";

const ProductsCard = ({ products, deleteProduct, createProduct }) => {
  return (
    <div className="container w-50 flex justifu-cotent-between mt-5">
      <div className="card bg-light">
        <div className="card-body">
          <h4>Products</h4>
          <CreateForm createProduct={createProduct} />
          <p>showing all products</p>
          <ul className="list-group">
            {products.map((product) => (
              <Product
                key={product.id}
                product={product}
                deleteProduct={deleteProduct}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
