import React, { Component } from 'react'
import SearchBar from '../container/SearchBar'
import WeatherList from '../container/WeatherList'
export default class App extends Component {
  render () {
    return (
      <div>
        
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
