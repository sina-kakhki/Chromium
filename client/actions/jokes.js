export const SET_JOKE = 'SET_JOKE'

export const setJoke = (joke) => {
  return {
    type: SET_JOKE,
    joke
  }
}