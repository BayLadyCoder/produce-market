import React from "react";
import "./Header.css";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

// const styles = {};

const Header = () => {
  return (
    <div style={{ width: "100%" }}>
      <Row className="justify-content-center">
        {/* <Image src="./images/logo.jpg" className="img" fluid /> */}
        <div className="justify-content-center align-items-center img">
          <div id="overlay"></div>
          <p className="headerText">Produze</p>
          <div id="btnContainer">
            <Button variant="success" id="shopNowBtn" className="btn">
              Shop Now
            </Button>{" "}
            <Button variant="primary" id="findStoresBtn" className="btn">
              Find Stores
            </Button>{" "}
          </div>
        </div>
      </Row>
    </div>
  );
};

export default Header;
