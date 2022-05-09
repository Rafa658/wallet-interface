import React from "react";
import Card from '../../Components/Card/Card'

import './Cards.css'

import cities from "../../Data/cities";
import prices from '../../Data/avax-balances.json'

const protocols = Object.keys(prices)
const info = Object.values(prices)

console.log(protocols.map(proto => Object.values(prices[proto]["tokens"])));

const Cards = () => {

    return (
        <div className="Cards">
            {protocols.map(proto => {
                return (
                    <Card
                        title={prices[proto]["name"]}
                        address={proto}
                        data={prices[proto]["tokens"]}
                        key={proto}
                    />
                )
            })}
        </div>
    )
}

export default Cards