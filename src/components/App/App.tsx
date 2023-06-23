import React from 'react'

import './index.css'
import Header from '../Header'
import RandomPlanet from '../Random-planet'
import ItemList from '../Item-list'
import Details from '../Details'
import SwapiService from '../servises/SwapiService'

interface IPerson {
  [key: string]: string
}

const App: React.FC = () => {
  const swapi = new SwapiService()

  swapi.getAllPeople().then((people) => {
    people.forEach((person: IPerson) => {
      console.log(person.name)
    })
  })

  swapi.getPerson(1).then((person) => {
    console.log(person)
  })

  swapi.getAllPlanets().then((planets) => {
    planets.forEach((planet: IPerson) => {
      console.log(planet.name)
    })
  })

  swapi.getPlanet(1).then((planet) => {
    console.log(planet)
  })

  swapi.getAllStarships().then((starships) => {
    starships.forEach((starship: IPerson) => {
      console.log(starship.name)
    })
  })

  swapi.getStarship(3).then((starship) => {
    console.log(starship)
  })

  return (
    <div>
      <Header />
      <RandomPlanet />
      <div className="row mb2">
        <div className="col-md-6">
          <ItemList />
        </div>
        <div className="col-md-6">
          <Details />
        </div>
      </div>
    </div>
  )
}

export default App
