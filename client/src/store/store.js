import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import jobsReducer from '../reducers/Jobs';
import errorsReducer from '../reducers/Errors';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    jobs: jobsReducer,
    errors: errorsReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

console.log(store.getState());

export default store;
