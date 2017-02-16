import constants from '../constants'

console.log(constants.PATH)

export const fetchPosts = () => {
  return fetch(`/data/data.json`).then((response) => {
    return response.json().then((json) => {
      return json
    })
  })
}
