const TestReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST':
      alert('TEST')
      return state
    default:
      return state
  }
}

export default TestReducer
