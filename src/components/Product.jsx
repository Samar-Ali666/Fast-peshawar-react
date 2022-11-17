import React from "react";
import { BsTrash } from "react-icons/bs";

const Product = ({ product, deleteProduct }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mb-2">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{product.name}</div>
      </div>
      <BsTrash
        color="red"
        style={{ cursor: "pointer" }}
        onClick={() => deleteProduct(product.id)}
      />
    </li>
  );
};

export default Product;
