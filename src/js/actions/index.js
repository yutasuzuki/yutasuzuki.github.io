export const toggleModal = () => {
  return {
    type: 'TOGGLE_MODAL'
  }
}

export const sortPosts = (posts) => {
  return {
    type: 'SORT_POSTS',
    posts
  }
}

export const loadPosts = (posts) => {
  return {
    type: 'LOAD_POSTS',
    posts
  }
}

export const readScroll = (y) => {
  return {
    type: 'READ_SCROLL',
    y
  }
}
