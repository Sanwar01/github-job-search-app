/**
 * Adds new jobs from API in redux and gets more jobs and updated existing jobs array
 * @param state
 * @param action
 * @returns {*[]|*}
 */
const jobsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_JOBS':
      return action.jobs;
    case 'LOAD_MORE_JOBS':
      return [...state, ...action.jobs];
    default:
      return state;
  }
}

export default jobsReducer;
