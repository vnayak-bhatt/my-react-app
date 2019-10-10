import {combineReducers} from 'redux';
import stockFilterValue from './stockFilterValue'
import stockSearchValue from './stockSearchValue'

export default combineReducers({
    stockFilterValue,
    stockSearchValue
})