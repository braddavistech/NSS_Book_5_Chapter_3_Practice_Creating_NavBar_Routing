import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnersList from './owners/OwnersList'


class ApplicationViews extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Davis" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ]

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Puppy Way", city: "Nashville", state: "Tennessee", zip: "37207", phone: "(615)-862-8600" },
    { id: 2, name: "Nashville South", address: "400 Dog Park", city: "Nashville", state: "Tennessee", zip: "36892", phone: "(615)-862-8600" }
  ]

  animalsFromAPI = [
    { id: 1, name: "Tiny", breed: "Mastif", owner: [2, 3] },
    { id: 2, name: "Pedro", breed: "Schnauzer", owner: [2, 4] },
    { id: 3, name: "Ivy", breed: "Bulldog", owner: [1] },
    { id: 4, name: "Stinky", breed: "Boxer", owner: [1] },
    { id: 5, name: "Brownie", breed: "Lab", owner: [4] },
    { id: 6, name: "Snowball", breed: "Husky", owner: [2] },
    { id: 7, name: "Heavy", breed: "Saint Bernard", owner: [4] }
  ]

  ownersFromAPI = [
    { id: 1, name: "Ryan Tanay", animalId: [1, 3] },
    { id: 2, name: "Emma Beaton", animalId: [3, 5] },
    { id: 3, name: "Dani Adkins", animalId: [4, 7] },
    { id: 4, name: "Adam Oswalt", animalId: [2, 6, 7] }
  ]

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    owners: this.ownersFromAPI
  }

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" render={(props) => {
          return <LocationList locations={this.state.locations} />
        }} />
        <Route exact path="/animals" render={(props) => {
          return <AnimalList animals={this.state.animals} owners={this.state.owners}/>
        }} />
        <Route exact path="/employees" render={(props) => {
          return <EmployeeList employees={this.state.employees} />
        }} />
        <Route exact path="/owners" render={(props) => {
          return <OwnersList animals={this.state.animals} owners={this.state.owners} />
        }} />
      </React.Fragment>
    )
  }
}

export default ApplicationViews