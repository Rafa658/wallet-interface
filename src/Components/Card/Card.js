import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Collapse } from "react-bootstrap";

import "./Card.css";

import prices from "../../Data/priced-assets.json"
import balances from "../../Data/avax-balances.json"

// if(!prices.hasOwnProperty(token) || !prices[token].hasOwnProperty("prices")) {
//   return 0
// }
// else if (prices[token]["symbol"] === d) {
//   return Object.values(prices[token]["prices"])[0] || 0
// }

const Card = (props) => {
  const data = props.data || [];

  var [isToggled, setToggle] = useState(false);
  var [symbol, setSymbol] = useState("")

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
                <div className="price-box">
                  <p className="pricing-info">
                    Preços:
                  </p>
                  <div className="prices-protocols">
                    {
                      Object.keys(prices).map(token => {
                        if (!prices.hasOwnProperty(token) || !prices[token].hasOwnProperty("prices")) {
                          return ''
                        }
                        else if (prices[token]["symbol"] === d) {
                          return <div className="inline-prices">${Object.values(prices[token]["prices"])[0]} <span className="inline-address">{token}</span></div>
                        }
                      })
                    }
                  </div>
                </div>
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