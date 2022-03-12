import React from "react";
import hero from "../../static/images/hero.jpg";
import Row from "../Row";
import Col from "../Col";

function index(props) {
  return (
    <div className="header">
      <Row>
        <Col>
          <img className="header__image" src={hero} alt="" />
          <div className="names">
            <div className="names__firstname">
              <h1>Thiago</h1>
            </div>
            <div className="names__lastname">
              <h1>Moreira</h1>
            </div>
            <div className="names__subtitle">
              <ul>
                <li>Fullstack Developer</li>
                <li>JavaScript Enthusiast</li>
                <li>Computer Scientist</li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default index;
