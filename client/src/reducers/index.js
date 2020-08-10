import { combineReducers } from 'redux';
import reducers1 from './alert';
import multidivreducer from './multidiv'

export default combineReducers({ reducers1, multidivreducer });