import React from "react";
import { useState } from "react";

const CreateForm = ({ createProduct }) => {
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
  });

  const onChange = (e) => {
    setAddProduct({
      ...addProduct,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!addProduct.name || !addProduct.price) {
      alert("Fields cannot be empty");
      return;
    }

    createProduct(addProduct);

    setAddProduct({ name: "", price: "" });
  };

  return (
    <form className="form my-3" onSubmit={onSubmit}>
      <div className="input-group mb-2">
        <input
          type="text"
          name="name"
          value={addProduct.name}
          onChange={onChange}
          className="form-control"
          placeholder="Product name...."
        />
      </div>
      <div className="input-group mb-2">
        <input
          type="number"
          name="price"
          value={addProduct.price}
          onChange={onChange}
          className="form-control"
          placeholder="Enter price"
        />
      </div>
      <div className="d-grid">
        <input type="submit" className="btn btn-success" value="Add Product" />
      </div>
    </form>
  );
};

export default CreateForm;
