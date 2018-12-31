import { combineReducers } from 'redux'
import ReducerWeather from './ReducerWeather'
const rootReducer = combineReducers({
  ReducerWeather: ReducerWeather
})

export default rootReducer
