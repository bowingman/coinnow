import React, { useState, useRef } from "react";
import axios from "axios";

import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import TextArea from "../../components/TextArea";

const CreateProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("default");
  const [currentPrice, setCurrentPrice] = useState(123);
  const [availableQuantity, setAvailableQuantity] = useState(0);
  const [minimumPrice, setMinimumPrice] = useState(0);
  const [maximumPrice, setMaximumPrice] = useState(0);
  const [autoStockAmount, setAutoStockAmount] = useState(0);
  const [priceChangeAmount, setPriceChangeAmount] = useState(0);
  const [pageType, setPageType] = useState("general");
  const [fileContent, setFileContent] = useState(null);
  const file = useRef();

  const handleUpload = (e) => {
    file.current.click();
  };

  const handleFineChange = (e) => {
    setFileContent(e.target.files[0]);
  };

  const handleSave = () => {
    const data = {
      name,
      description,
      category,
      currentPrice,
      availableQuantity,
      minimumPrice,
      maximumPrice,
      autoStockAmount,
      priceChangeAmount,
    };

    const formData = new FormData();
    formData.append("productImage", fileContent, fileContent.name);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("currentPrice", currentPrice);
    formData.append("availableQuantity", availableQuantity);
    formData.append("minimumPrice", minimumPrice);
    formData.append("maximumPrice", maximumPrice);
    formData.append("autoStockAmount", autoStockAmount);
    formData.append("priceChangeAmount", priceChangeAmount);

    axios.post("http://localhost:8000/api/products/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div className="mt-[77px] ml-[93px] pl-[36px] pr-[43px] bg-[#222222] rounded-[13px] w-[1379px]">
      <div className="mt-[22px]">
        <Button
          color={`${pageType === "general" ? "#0047FF" : "#0C0C0C"}`}
          text={"General Information"}
          className="mr-[37px] w-[438px] h-[104px]"
          onClick={() => setPageType("general")}
        />
        <Button
          color={`${pageType === "data" ? "#0047FF" : "#0C0C0C"}`}
          text={"Data"}
          className="w-[438px] h-[104px]"
          onClick={() => setPageType("data")}
        />
      </div>
      <div className="w-full mt-[43px]">
        {pageType === "general" ? (
          <div>
            <div>
              <TextInput
                className="h-[98px] rounded-[13px] text-[32px] pl-[83px]"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mt-[30px]">
              <select
                className="h-[98px] rounded-[13px] text-[32px] w-full bg-[#0C0C0C] text-white"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="default">Select Category</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
              </select>
              {/* <TextInput
                className="h-[98px] rounded-[13px] text-[32px]"
                name={name}
                onChange={(e) => setName(e.target.value)}
                value=""
                type="select"
                placeholder="Select Category"
              /> */}
            </div>
            <div className="mt-[14px]">
              <TextArea
                className="h-[400px] rounded-[13px] text-[32px] w-full"
                placeholder="Description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="mt-[27px]">
              <Button
                color="#0C0C0C"
                text="Upload Image"
                className="w-[438px] h-[98px]"
                onClick={handleUpload}
              />
              <input
                type="file"
                ref={file}
                style={{ display: "none" }}
                onChange={handleFineChange}
              />
            </div>
          </div>
        ) : (
          pageType === "data" && (
            <div>
              <div className="w-full flex">
                <div className="w-1/2 pr-[42px]">
                  <TextInput
                    label="Current Price"
                    name="current_price"
                    type="number"
                    className="h-[98px] rounded-[13px] text-[32px]"
                    value={parseInt(currentPrice)}
                    onChange={(e) =>
                      setCurrentPrice(
                        parseInt(e.target.value ? e.target.value : 0)
                      )
                    }
                  />
                </div>
                <div className="w-1/2 pl-[42px]">
                  <TextInput
                    label="Available Quantity"
                    name="available_quantity"
                    type="number"
                    className="h-[98px] rounded-[13px] text-[32px]"
                    value={availableQuantity}
                    onChange={(e) => setAvailableQuantity(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex mt-[42px]">
                <div className="w-1/2 pr-[42px]">
                  <TextInput
                    label="Minimum Price"
                    name="minimum_price"
                    type="number"
                    className="h-[98px] rounded-[13px] text-[32px]"
                    value={minimumPrice}
                    onChange={(e) => setMinimumPrice(e.target.value)}
                  />
                </div>
                <div className="w-1/2 pl-[42px]">
                  <TextInput
                    label="Maximum Price"
                    name="maximum_price"
                    type="number"
                    className="h-[98px] rounded-[13px] text-[32px]"
                    value={maximumPrice}
                    onChange={(e) => setMaximumPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex mt-[42px]">
                <div className="w-1/2 pr-[42px]">
                  <TextInput
                    label="Auto Stock Amount"
                    name="auto_stock_amount"
                    type="number"
                    className="h-[98px] rounded-[13px] text-[32px]"
                    value={autoStockAmount}
                    onChange={(e) => setAutoStockAmount(e.target.value)}
                  />
                </div>
                <div className="w-1/2 pl-[42px]">
                  <TextInput
                    label="Price Change Amount"
                    name="price_change_amount"
                    type="number"
                    className="h-[98px] rounded-[13px] text-[32px]"
                    value={priceChangeAmount}
                    onChange={(e) => setPriceChangeAmount(e.target.value)}
                  />
                </div>
              </div>
              <div className="w-full flex mt-[93px]">
                <div className="w-1/2" />
                <div className="w-1/2 pl-[42px]">
                  <Button
                    color="#0047FF"
                    text="Save"
                    className="w-[438px] h-[104px]"
                    onClick={handleSave}
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default CreateProduct;
