
import {combineReducers} from 'redux'
import { CountReducer } from './CountTest/Reducer';
import AddReducer from './UserAdd/Reducer';

 const rootReducer =combineReducers (
    {
        counter:CountReducer,
    // CountReducer,
        userdata:AddReducer
    }
 ) 
export default rootReducer;
