const ReadingScrollReducer = (state = {}, action) => {
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
