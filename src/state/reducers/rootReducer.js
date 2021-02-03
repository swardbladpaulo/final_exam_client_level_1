import initialState from '../store/initialState'

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TVSERIES_INDEX':
      return {
        ...state,
        tvSeries: action.payload,
      }

    default:
      return state
  }
}

export default rootReducer
