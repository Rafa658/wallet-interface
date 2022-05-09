import "./Table.css";
import React from "react";
import data from "../../Data/avax-balances.json";

const address = "0x5b9ba1bf76ec0ecf56af70e918c95debb1811fa9";

const Table = (props) => {
  const data = props.data;
  const tokens = data[address]["tokens"];
  return (
    <div className="Table">
      <div className="TableContent">
        <table>
          <tr className='header'>
            <th>Token</th>
            <th>Quantidade</th>
            <th>Preço</th>
            <th>Financeiro</th>
            <th>PnL</th>
          </tr>
          {Object.keys(tokens).map((token) => {
            return (
              <tr key={token}>
                <td>{token}</td>
                <td>{tokens[token]}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Table;
