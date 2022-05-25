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
                        title={balances[proto]["name"]} // identificaçao do protocolo
                        address={proto} // endereço do protocolo
                        data={balances[proto]["tokens"]}    // tokens do protocolo
                        key={proto}
                    />
                )
            })}
        </div>
    )
}

export default Cards