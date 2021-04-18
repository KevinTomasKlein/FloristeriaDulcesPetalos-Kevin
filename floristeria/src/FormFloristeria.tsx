import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { API_Floristeria } from "./Clases/API_Floristeria";

export function FormFloristeria() {
  const API_FLORISTERIA_URL: string =
    "https://dulces-petalos.herokuapp.com/api/product";

  const [productDetails, setProductDetails] = useState<any[]>([]);

  const [searchResults, setSearchResults] = useState<any[]>([]);

  const getDetailsWithAxios = async () => {
    const responseAxios = await axios.get(API_FLORISTERIA_URL);
    setProductDetails(responseAxios.data);
  };

  useEffect(() => {
    getDetailsWithAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getSearchedData(searchedData: any) {
    let searchFlower: any[] = [];
    productDetails.map((flower) => {
      if (
        flower["name"].toString().toUpperCase().includes(searchedData) ||
        flower["binomialName"].toString().toUpperCase().includes(searchedData)
      ) {
        searchFlower.push(flower);
      }
    });
    setSearchResults(searchFlower);
    console.log(searchFlower);
  }

  function printSearchedFlower() {
    return (
      <div className="row">
        {searchResults.map((searchedItemFlower) => (
          <div className="col-3">
            <div className="card">
              <img
                alt="flower-images"
                className="card-image"
                src={searchedItemFlower.imgUrl}
              ></img>
              <div className="card-body">
                <h5 className="card-title">{searchedItemFlower.name}</h5>
                <p className="card-text">
                  {"Binomial name: " + searchedItemFlower.binomialName}
                </p>
                <p className="card-text">
                  {"Precio: " + searchedItemFlower.price + " €"}
                </p>
                <p className="card-text">
                  {"Waterings per week: " + searchedItemFlower.wateringsPerWeek}
                </p>
                <p className="card-text">
                  {"Fertilizer type: " + searchedItemFlower.fertilizerType}
                </p>
                <p className="card-text">
                  {"Heigth: " + searchedItemFlower.heightInCm + "cm"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  function HomeView() {
    return (
      <div className="container-fluid">
        <div className="row">
          {productDetails.map((itemFlower) => (
            <div className="col-3">
              <div className="card">
                <img
                  alt="flower-images"
                  className="card-image"
                  src={itemFlower.imgUrl}
                ></img>
                <div className="card-body">
                  <h5 className="card-title">{itemFlower.name}</h5>
                  <p className="card-text">
                    {"Binomial name: " + itemFlower.binomialName}
                  </p>
                  <p className="card-text">
                    {"Precio: " + itemFlower.price + " €"}
                  </p>
                  <p className="card-text">
                    {"Waterings per week: " + itemFlower.wateringsPerWeek}
                  </p>
                  <p className="card-text">
                    {"Fertilizer type: " + itemFlower.fertilizerType}
                  </p>
                  <p className="card-text">
                    {"Heigth: " + itemFlower.heightInCm + "cm"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <form className="d-flex offset-lg-10 offset-md-8">
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search Flower"
              aria-label="Search Flower"
              onChange={(event) => getSearchedData(event.target.value)}
            ></input>
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div>{printSearchedFlower}</div>
      <div>{HomeView()}</div>
    </div>
  );
}
