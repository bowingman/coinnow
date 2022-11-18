import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";
import ProductItem from "../../components/ProductItesm";

// const products = [
// {
//   id: 0,
//   name: "Product Name",
//   quantity: "Available Quantity",
//   total: "Total Owned By Users",
//   current_price: "Current Price",
// },
//   { id: 1, name: "product1", quantity: 100, total: 100, current_price: 2000 },
//   { id: 2, name: "product2", quantity: 100, total: 100, current_price: 2000 },
//   { id: 3, name: "product3", quantity: 100, total: 100, current_price: 2000 },
//   { id: 4, name: "product4", quantity: 100, total: 100, current_price: 2000 },
// ];

const ProductList = () => {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/")
      .then((res) => setProducts(res.data));
  }, []);

  const handleAddProduct = () => {
    navigate("/products/create");
  };

  return (
    <div className="pt-[77px] px-[30px] w-full text-[32px] text-white">
      <div className="h-[140px] flex">
        <div className="bg-[#0C0C0C] rounded-[13px] flex justify-center items-center w-full h-[140px]">
          <TextInput
            className="text-[32px] w-full"
            placeholder="Search Product By Name"
          />
        </div>
        <div className="ml-[22px] mr-[145px]">
          <Button
            color="#0047FF"
            text="Add New"
            className="w-[289px] h-[140px]"
            onClick={handleAddProduct}
          />
        </div>
      </div>
      <div className="mt-[44px]">
        <div className="flex mr-[136px]">
          <ProductItem
            product={{
              id: 0,
              name: "Product Name",
              quantity: "Available Quantity",
              total: "Total Owned By Users",
              current_price: "Current Price",
            }}
          />
        </div>
        <div className="h-[calc(100vh-400px)] overflow-y-auto">
          {products.map((product) => (
            <div key={product.id} className="flex">
              <ProductItem product={product} />
              <button className="bg-[#0047FF] w-[110px] h-[110px] rounded-[13px] ml-[26px]">
                Edit
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
