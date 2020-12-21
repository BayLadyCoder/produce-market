import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Header from "./components/Header";
import ShopFeature from "./components/ShopFeature";
import FindStores from "./components/FindStores";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <ShopFeature />
      <FindStores />
    </div>
  );
}

export default App;
