import React from "react";
import { useNavigate } from "react-router-dom";

import TextInput from "../../components/TextInput";
import Button from "../../components/Button";

const ProductList = () => {
  const navigate = useNavigate();

  const handleAddProduct = () => {
    navigate("/products/create");
  };

  return (
    <div className="mt-[77px] ml-[30px] text-[32px] text-white">
      <div className="w-[1387px] h-[140px] flex">
        <div className="bg-[#0C0C0C] rounded-[13px] flex justify-center items-center w-[1070px] h-[140px]">
          <TextInput
            className="text-[32px] w-full"
            placeholder="Search Product By Name"
          />
        </div>
        <div className="ml-[22px]">
          <Button
            color="#0047FF"
            text="Save"
            className="w-[289px] h-[140px]"
            onClick={handleAddProduct}
          />
        </div>
      </div>
      <div className="mt-[44px]">
        <div className="w-[1387px] h-[110px] bg-[#222222] rounded-[13px] flex items-center">
          <div className="flex w-full">
            <div className="w-1/4 flex items-center">
              <div className="ml-[76px]">Product Name</div>
            </div>
            <div className="w-1/4 flex items-center">
              <div className="ml-[76px]">Available Quantity</div>
            </div>
            <div className="w-1/3 flex items-center">
              <div className="ml-[76px]">Total Owned By Users</div>
            </div>
            <div className="w-1/6 flex items-center">
              <div className="ml-[30px]">Current Price</div>
            </div>
          </div>
        </div>
        <div className="mt-[22px]">
          <div className="mb-[25px] flex">
            <div className="w-[1387px] h-[110px] bg-[#222222] rounded-[13px] flex items-center">
              <div className="flex w-full">
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">Product1</div>
                </div>
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">400</div>
                </div>
                <div className="w-1/3 flex items-center">
                  <div className="ml-[76px]">100</div>
                </div>
                <div className="w-1/6 flex items-center">
                  <div className="ml-[30px]">2000</div>
                </div>
              </div>
            </div>
            <button className="bg-[#0047FF] w-[110px] h-[110px] rounded-[13px] ml-[26px]">
              Edit
            </button>
          </div>
          <div className="mb-[25px] flex">
            <div className="w-[1387px] h-[110px] bg-[#222222] rounded-[13px] flex items-center">
              <div className="flex w-full">
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">Product1</div>
                </div>
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">400</div>
                </div>
                <div className="w-1/3 flex items-center">
                  <div className="ml-[76px]">100</div>
                </div>
                <div className="w-1/6 flex items-center">
                  <div className="ml-[30px]">2000</div>
                </div>
              </div>
            </div>
            <button className="bg-[#0047FF] w-[110px] h-[110px] rounded-[13px] ml-[26px]">
              Edit
            </button>
          </div>
          <div className="mb-[25px] flex">
            <div className="w-[1387px] h-[110px] bg-[#222222] rounded-[13px] flex items-center">
              <div className="flex w-full">
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">Product1</div>
                </div>
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">400</div>
                </div>
                <div className="w-1/3 flex items-center">
                  <div className="ml-[76px]">100</div>
                </div>
                <div className="w-1/6 flex items-center">
                  <div className="ml-[30px]">2000</div>
                </div>
              </div>
            </div>
            <button className="bg-[#0047FF] w-[110px] h-[110px] rounded-[13px] ml-[26px]">
              Edit
            </button>
          </div>
          <div className="mb-[25px] flex">
            <div className="w-[1387px] h-[110px] bg-[#222222] rounded-[13px] flex items-center">
              <div className="flex w-full">
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">Product1</div>
                </div>
                <div className="w-1/4 flex items-center">
                  <div className="ml-[76px]">400</div>
                </div>
                <div className="w-1/3 flex items-center">
                  <div className="ml-[76px]">100</div>
                </div>
                <div className="w-1/6 flex items-center">
                  <div className="ml-[30px]">2000</div>
                </div>
              </div>
            </div>
            <button className="bg-[#0047FF] w-[110px] h-[110px] rounded-[13px] ml-[26px]">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
