import { API_Floristeria } from "../Clases/API_Floristeria";

export function HomeView(flores: API_Floristeria[]) {
  console.log(flores);

  return (
    <div className="container">
      <div className="row">
        {flores.map((itemFlower) => (
          <div className="col-sm">
            {itemFlower.id}
            <img alt="flower-images" src={itemFlower.imgUrl}></img>
          </div>
        ))}
      </div>
    </div>
  );
}
