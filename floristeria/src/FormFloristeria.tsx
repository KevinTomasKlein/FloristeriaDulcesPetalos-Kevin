import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export function FormFloristeria() {
  interface floresApi {
    id: string;
    name: string;
    bonimialName: string;
    price: number;
    imgUrl: string;
    wateringsPerWeek: number;
    fertilizerType: string;
    heightInCm: number;
  }

  const API_FLORISTERIA_URL: string =
    "https://dulces-petalos.herokuapp.com/api/product";
  const [productDetails, setProductDetails] = useState<any[]>([]);

  useEffect(() => {
    getDetailsWithFetch();
    // getDetailsWithAxios();
    getProductsData(productDetails);
  }, []);

  // const getDetailsWithFetch = async () => {
  //   const response = await fetch(API_FLORISTERIA_URL);
  //   const jsonData = await response.json();
  //   setProductDetails(jsonData);
  // };

  // const getDetailsWithAxios = async () => {
  //   const responseAxios = await axios.get(API_FLORISTERIA_URL);
  //   setProductDetails(responseAxios.data);
  // };

  function getProductsData(productsData: any) {
    let dataContainer = document.getElementById("dataProducts");
    for (let i: number = 0; i < productsData.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = "Name: " + productsData[i].name;
      // @ts-ignore: Object is possibly 'null'.
      dataContainer.appendChild(newDiv);
    }
  }

  const getDetailsWithFetch = async () => {
    await fetch(API_FLORISTERIA_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setProductDetails(data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="user-container">
      <div className="col-md-3" id="dataProducts"></div>
    </div>
  );
}
