/**
 * set error handling and reset data by remove any objects which contains errors
 * @param state
 * @param action
 * @returns {{}|*[]|{error: *}}
 */
const errorsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_ERRORS':
      return {
        error: action.error
      }
    case 'RESET_ERRORS':
      return {};
    default:
      return state;
  }
}

export default errorsReducer;
