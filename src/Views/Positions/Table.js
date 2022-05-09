import "./Positions.css";
import React from "react";
import data from "../../Data/avax-balances.json";
import Table from "../../Components/Table/Table";

const address = "0x5b9ba1bf76ec0ecf56af70e918c95debb1811fa9";

const Positions = () => {

  return (
    <Table data = {data}/>
  );

  // for(let token in tokens) {
  //     return(
  //         <div>{token} : {tokens[token]}</div>
  //     )
};

export default Positions;
