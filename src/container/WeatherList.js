import React, { Component } from 'react'

import { connect } from 'react-redux'
import ShowSparkLines from '../components/ShowSparkLines'
class WeatherList extends Component {
  rendercity = cityName => {
    const name = cityName.city.name

    const temp = cityName.list.map(weth => {
      return <td>{weth.main.temp}</td>
    })
    const presssures = cityName.list.map(weth => {
      return <td>{weth.main.pressure}</td>
    })
    const humidties = cityName.list.map(weth => {
      return <td>{weth.main.humidity}</td>
    })

    return (
      <tr>
        <td>{name}</td>
        <td>
          <ShowSparkLines data={temp} color='red' />
        </td>
        <td>
          <ShowSparkLines data={presssures} color='green' />
        </td>
        <td>
          <ShowSparkLines data={humidties} color='orange' type='avg' />
        </td>
      </tr>
    )
  }

  render () {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>city</th>
            <th>tempreture</th>
            <th>pressuer</th>
            <th>humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.ReducerWeather.map(this.rendercity)}</tbody>
      </table>
    )
  }
}
function mapStateToProps ({ ReducerWeather }) {
  return { ReducerWeather }
}
export default connect(mapStateToProps)(WeatherList)
