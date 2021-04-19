import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Flores } from "./clases/Flores";
import { updateTypeAssertion } from "typescript";

export function FormFloristeria() {
  const API_FLORISTERIA_URL: string =
    "https://dulces-petalos.herokuapp.com/api/product";

  const [productDetails, setProductDetails] = useState<any[]>([]);

  const [searchResults, setSearchResults] = useState("");

  const [error, setError] = useState(false);

  const searchFlower: any[] = [];

  const [hasId, setId] = useState("");

  let flower: Flores;

  const getDetailsWithAxios = async () => {
    const responseAxios = await axios.get(API_FLORISTERIA_URL);
    setProductDetails(responseAxios.data);
  };

  useEffect(() => {
    getDetailsWithAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getSearchedData(event: any) {
    setSearchResults(event.target.value);
  }

  function backHomeView(event: any) {
    setId("");
  }

  function DetailsView() {
    productDetails.map((searchedItemFlower) => {
      if (hasId === searchedItemFlower.id) {
        flower = searchedItemFlower;
      }
    });
    return (
      <div>
        <div className="row">
          <div
            className="navbar navbar-light bg-dark 
           justify-end"
          >
            <div className="container-fluid">
              <div className="d-flex ">
                <input
                  className="form-control me-2"
                  type="button"
                  placeholder="Back"
                  aria-label="Search Flower"
                  value="BACK"
                  onClick={(event) => backHomeView(event)}
                ></input>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-8">
            <div className="img-fluid rounded ">
              <img
                alt="flower-images"
                className="rounded img-fluid"
                src={flower.imgUrl}
              ></img>
            </div>
          </div>

          <div className="card col-4">
            <div className="card-body">
              <h5 className="card-title">{flower.name}</h5>
              <p className="card-text">
                {"Binomial name: " + flower.binomialName}
              </p>
              <p className="card-text">{"Precio: " + flower.price + " €"}</p>
              <p className="card-text">
                {"Waterings per week: " + flower.wateringsPerWeek}
              </p>
              <p className="card-text">
                {"Fertilizer type: " + flower.fertilizerType}
              </p>
              <p className="card-text">
                {"Heigth: " + flower.heightInCm + "cm"}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function HomeView() {
    productDetails.map((flower) => {
      if (
        flower.name
          .toString()
          .toUpperCase()
          .includes(searchResults.toUpperCase()) ||
        flower.binomialName
          .toString()
          .toUpperCase()
          .includes(searchResults.toUpperCase())
      ) {
        searchFlower.push(flower);
      }
    });

    function hasID(event: any) {
      setId(event.currentTarget.id);
      console.log(hasId);
    }

    return (
      <div className="container-fluid">
        <div>
          <div className="navbar navbar-light bg-light">
            <div className="container-fluid">
              <form className="d-flex offset-lg-10 offset-md-8">
                <input
                  className="form-control me-2"
                  type="text"
                  placeholder="Search Flower"
                  aria-label="Search Flower"
                  onChange={(event) => getSearchedData(event)}
                ></input>
              </form>
            </div>
          </div>
          <div className="row">
            {searchFlower.map((itemFlower) => (
              <div className="col-3 " id={itemFlower.id} onClick={hasID}>
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
      </div>
    );
  }

  if (error) {
    return (
      <div className="alert alert-danger" role="alert">
        Error en la búsqueda
      </div>
    );
  } else if (hasId !== "") {
    return DetailsView();
  } else {
    return HomeView();
  }
}
