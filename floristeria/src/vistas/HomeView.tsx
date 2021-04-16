import { API_Floristeria } from "../Clases/API_Floristeria";

export function HomeView(flores: API_Floristeria[]) {
  console.log(flores);

  return (
    <div className="container-fluid">
      <div className="row">
        {flores.map((itemFlower) => (
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
