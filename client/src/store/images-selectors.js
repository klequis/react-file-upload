import { isEmpty } from 'ramda'

export const getCurrentImage = (state) => {
  const image = state.images
  if (!isEmpty(image)) {
    return state.images.Location
  } else {
    return null
  }
}
