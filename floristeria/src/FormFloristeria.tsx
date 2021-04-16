import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export function FormFloristeria() {
  const API_FLORISTERIA_URL: string =
    "https://dulces-petalos.herokuapp.com/api/product";
  const [productDetails, setProductDetails] = useState<any[]>([]);

  useEffect(() => {
    getDetailsWithAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetailsWithAxios = async () => {
    const responseAxios = await axios.get(API_FLORISTERIA_URL);
    setProductDetails(responseAxios.data);
  };

  return (
    <div>
      {productDetails.map((itemFlower) => (
        <div className="card col-md-3">
          {itemFlower.id}
          <img alt="flower-images" src={itemFlower.imgUrl}></img>
        </div>
      ))}
    </div>
  );
}
