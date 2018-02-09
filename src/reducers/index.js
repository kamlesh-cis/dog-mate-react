import { combineReducers } from 'redux';
import breedReducer from './breedReducer'


const rootReducer = combineReducers({
  breeds: breedReducer
})

export default rootReducer
