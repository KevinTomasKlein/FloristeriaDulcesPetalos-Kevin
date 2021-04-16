import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { HomeView } from "./vistas/HomeView";
import { API_Floristeria } from "./Clases/API_Floristeria";

export function FormFloristeria() {
  const data: API_Floristeria[] = [];
  const API_FLORISTERIA_URL: string =
    "https://dulces-petalos.herokuapp.com/api/product";
  const [productDetails, setProductDetails] = useState<any[]>([]);
  function addData() {
    productDetails.map((product) => {
      const flor = new API_Floristeria(
        product.id,
        product.name,
        product.bonimialName,
        product.price,
        product.imgUrl,
        product.wateringsPerWeek,
        product.fertilizerType,
        product.heightInCm
      );
      data.push(flor);
    });
    console.log(data);
  }

  useEffect(() => {
    getDetailsWithAxios();
    addData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDetailsWithAxios = async () => {
    const responseAxios = await axios.get(API_FLORISTERIA_URL);
    setProductDetails(responseAxios.data);
  };

  return (
    <div>
      {/* {productDetails.map((itemFlower) => (
        <div className="card col-md-3">
          {itemFlower.id}
          <img alt="flower-images" src={itemFlower.imgUrl}></img>
        </div>
      ))} */}
      <p>{HomeView(productDetails)}</p>
    </div>
  );
}
