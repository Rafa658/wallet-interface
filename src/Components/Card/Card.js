import React, { useState } from "react";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";
import { Collapse } from "react-bootstrap";

import "./Card.css";

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
        {/* <p>{props.address}</p> */}
      </div>
      <Collapse in={isToggled}>
        <div className="list" id="collapse">
          {Object.keys(data).map(d => (
            <div className="list-item ml1" key={d}>
              {d}: {data[d]}
            </div>
          ))}
        </div>
      </Collapse>
      <div className="low-border"></div>
    </div>
  );
};

export default Card;