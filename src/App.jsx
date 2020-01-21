import React from 'react'
import Vehicule from './Vehicule'
import Garage from './Garage'

const App = () => {

    return(

        <div>
            <Garage voitures='Mercedes Benz S 260, 1991,Bleu, Essence' vivi='Non Validé'/>
            <Garage voitures='Fiat 500, 2010,Noire, Essence,'/>
            <Garage voitures='Volkswagen Crafter,2016,Blanche' vivi='Validé'/>
            <Garage voitures='BMW 114,2012,Bleu,Essence,' vivi='Non Validé'/>
            <Garage voitures='Audi A3, 2015,Rouge,Diesel,' vivi='Validé'/>
           
        </div>

    )
}


export default App