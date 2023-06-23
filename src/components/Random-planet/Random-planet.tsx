import React, { useEffect, useState } from 'react'

import SwapiService from '../servises/SwapiService'
import './index.css'

const RandomPlanet: React.FC = () => {
  const swapi = new SwapiService()
  const [planet, setPlanet] = useState({
    id: 0,
    name: '',
    population: null,
    rotationPeriod: null,
    diameter: null,
    imageUrl: '',
  })

  const updatePlanet = () => {
    const newId = Math.floor(Math.random() * 10)
    swapi.getPlanet(newId).then((planet) => {
      setPlanet({
        id: newId,
        name: planet.name,
        population: planet.population,
        rotationPeriod: planet.rotation_period,
        diameter: planet.diameter,
        imageUrl: `https://starwars-visualguide.com/assets/img/planets/${newId}.jpg`,
      })
    })
  }

  useEffect(() => {
    updatePlanet()
  }, [])

  return (
    <div className="random-planet jumbotron rounded">
      <img className="planet-image" src={planet.imageUrl} alt="planet" />
      <div>
        <h4>{planet.name}</h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="term">Population:</span>
            <span>{planet.population}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Rotation Period:</span>
            <span>{planet.rotationPeriod}</span>
          </li>
          <li className="list-group-item">
            <span className="term">Diameter:</span>
            <span>{planet.diameter}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default RandomPlanet
