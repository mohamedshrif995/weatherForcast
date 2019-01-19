import React, { Component } from 'react'
// import {
//   Sparklines,
//   SparklinesLine,
//   SparkLinesReferenceLine
// } from 'react-sparklines'
import { XYPlot, LineSeries } from 'react-vis'
class ShowSparkLines extends Component {
  render () {
    const { color, data, type } = this.props
    return (
      <div>
        <XYPlot height={300} width={300} data={data}>
          <LineSeries data={data} />
        </XYPlot>
        {/* <Sparklines height={120} width={180} data={data}>
          <SparklinesLine color={color} />
          <SparkLinesReferenceLine type={type}/>
        </Sparklines> */}
      </div>
    )
  }
}
export default ShowSparkLines
