const PostsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_POSTS':
      const newLoadState = {
        posts: action.posts
      }
      return newLoadState
    case 'SORT_POSTS':
      const newSortState = {}
      newSortState.posts = state.posts.filter((post) => {
        if (post.id % 2) {
          return post
        }
      })
      return newSortState
    default:
      return state
  }
}

export default PostsReducer
