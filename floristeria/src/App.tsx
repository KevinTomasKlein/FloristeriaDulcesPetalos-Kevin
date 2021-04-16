import "./App.css";
import { FormFloristeria } from "./FormFloristeria";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
          href="#"
        >
          <span className="fs-4">Floristería Dulces Pétalos</span>
        </a>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a className="nav-link active">Texto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Texto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Texto</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ">Texto</a>
          </li>
        </ul>
      </header>
      <FormFloristeria />
    </div>
  );
}

export default App;
