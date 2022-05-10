import React from "react";
import Card from '../../Components/Card/Card'

import './Cards.css'

import balances from '../../Data/avax-balances.json'

const protocols = Object.keys(balances)

const Cards = () => {

    return (
        <div className="Cards">
            {protocols.map(proto => {
                return (
                    <Card
                        title={balances[proto]["name"]}
                        address={proto}
                        data={balances[proto]["tokens"]}
                        key={proto}
                    />
                )
            })}
        </div>
    )
}

export default Cards