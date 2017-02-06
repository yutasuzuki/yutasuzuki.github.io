const ReadingScrollReducer = (state = {}, action) => {
  console.log(state)
  console.log(action)
  switch (action.type) {
    case 'READ_SCROLL':
      const newScrollState = {
        scrollY: 0
      }
      return newScrollState
    default:
      return state
  }
}

export default ReadingScrollReducer
