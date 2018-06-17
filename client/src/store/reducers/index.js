import { combineReducers } from 'redux'
import requests from './requests'
import images from './images'
// const dummy = (state = {}, { type, payload }) => {
//   return state
// }

export default combineReducers({
  images,
  requests,

})
