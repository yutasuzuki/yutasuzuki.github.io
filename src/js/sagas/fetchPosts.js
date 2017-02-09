export const fetchPosts = () => {
  return fetch('/React-redux-blog/data/data.json').then((response) => {
    return response.json().then((json) => {
      return json
    })
  })
}
