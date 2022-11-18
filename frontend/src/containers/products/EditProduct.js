import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProductAsync, selectProduct } from "../../store/product";

const EditProduct = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectProduct);

  useEffect(() => {
    dispatch(getProductAsync(id));
  }, [dispatch]);

  return <div>Hello</div>;
};

export default EditProduct;
