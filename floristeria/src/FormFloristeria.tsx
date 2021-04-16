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

  const [searchFlower, setSearchFlower] = useState("");
  const handleChange = (event: any) => {
    setSearchFlower(event.target.value);
  };

  const [searchResults, setSearchResults] = useState("");

  function addData() {
    productDetails.map((product) => {
      const flor = new API_Floristeria(
        product.id,
        product.name,
        product.binomialName,
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
    const results = data.filter((flowerData) =>
      flowerData.name
        .toLocaleLowerCase()
        .includes(searchFlower.toLocaleLowerCase())
    );
    setSearchResults(results);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchFlower]);

  const getDetailsWithAxios = async () => {
    const responseAxios = await axios.get(API_FLORISTERIA_URL);
    setProductDetails(responseAxios.data);
  };
  addData();
  return (
    <div>
      <div className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex offset-lg-10 offset-md-8">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Flower"
              aria-label="Search Flower"
              value={searchFlower}
              onChange={handleChange}
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <p>{HomeView(data)}</p>
    </div>
  );
}
