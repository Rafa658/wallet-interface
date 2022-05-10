import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Collapse } from "react-bootstrap";

import "./Card.css";

import prices from "../../Data/priced-assets.json"

const Card = (props) => {
  const data = props.data || [];

  var [isToggled, setToggle] = useState(false);

  return (
    <div className="wrapper">
      <div className="header spbtw">
        <div className="header-title ml1">
          {props.title || `Insira um tìtulo`}<br /><span className="subheader">{props.address}</span>
        </div>
        <RiArrowDownSLine
          className={isToggled ? "arrow mr1 rotate" : "arrow mr1"}
          size={25}
          onClick={() => setToggle(!isToggled)}
          aria-controls="collapse"
        />
      </div>
      <Collapse in={isToggled}>
        <div className="list" id="collapse">
          {Object.keys(data).map(d => (
            <div>
              <div className="list-item ml1" key={d}>
                <span className="token-symbol">{d}</span> {data[d]}
                <p className="pricing-info">Preço:</p>
                <p className="pricing-info">Quantidade: </p>
              </div>
            </div>
          ))}
        </div>
      </Collapse>
      <div className="low-border"></div>
    </div>
  );
};

export default Card;