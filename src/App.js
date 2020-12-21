import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import ShopFeature from "./components/ShopFeature";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ShopFeature />
    </div>
  );
}

export default App;
