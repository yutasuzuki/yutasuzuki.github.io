const ModalReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return state = {
        isShow: !state.isShow
      }
    default:
      return state
  }
}

export default ModalReducer
