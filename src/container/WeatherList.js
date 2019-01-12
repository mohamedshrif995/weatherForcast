import React, { Component } from 'react'

import { connect } from 'react-redux'
import { Sparklines, SparklinesLine } from 'react-sparklines'

class WeatherList extends Component {
  rendercity = cityName => {
    const name = cityName.city.name
    const temp = cityName.list.map(weth => {
      return <td>{weth.main.temp}</td>
    })
    return (
      <tr>
        <td>{name}</td>
        <td>
          <Sparklines height={120} width={180} data={temp}>
            <SparklinesLine color='red' />
          </Sparklines>
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
            <th>tepreture</th>
            <th>presuer</th>
            <th>humidty</th>
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
