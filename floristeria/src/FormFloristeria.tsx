import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Flores } from "./clases/Flores";
import { Link } from "react-router-dom";

export function FormFloristeria() {
  const API_FLORISTERIA_URL: string =
    "https://dulces-petalos.herokuapp.com/api/product";

  const [productDetails, setProductDetails] = useState<any[]>([]);

  const [searchResults, setSearchResults] = useState("");

  const [error, setError] = useState(null);

  const searchFlower: any[] = [];

  const [hasId, setId] = useState("");

  let flowers: Flores;

  const getDetailsWithAxios = async () => {
    //  = await axios.get(API_FLORISTERIA_URL).catch(error => error)

    // setProductDetails(responseAxios.data);

    await axios
      .get(API_FLORISTERIA_URL)
      .then((response) => {
        setProductDetails(response.data);
      })
      .catch((error) => {
        setError(error);
      });
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
        flowers = searchedItemFlower;
      }
    });
    return (
      <div>
        <div className="row">
          <div
            className="navbar navbar-light 
           offset-10"
          >
            <div className="container-fluid">
              <div className="d-flex btn btn-primary">
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
                src={flowers.imgUrl}
              ></img>
            </div>
          </div>

          <div className="card col-4">
            <div className="card-body">
              <h5 className="card-title">{flowers.name}</h5>
              <p className="card-text">
                {"Binomial name: " + flowers.binomialName}
              </p>
              <p className="card-text">{"Precio: " + flowers.price + " €"}</p>
              <p className="card-text">
                {"Waterings per week: " + flowers.wateringsPerWeek}
              </p>
              <p className="card-text">
                {"Fertilizer type: " + flowers.fertilizerType}
              </p>
              <p className="card-text">
                {"Heigth: " + flowers.heightInCm + "cm"}
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
                    style={{ width: 200, height: 200 }}
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
        Error en la búsqueda {error}
      </div>
    );
  } else if (hasId !== "") {
    return DetailsView();
  } else {
    return HomeView();
  }
}
