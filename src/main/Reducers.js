import { combineReducers } from 'redux';

import AuthReducer from '../components/auth/AuthReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
})

export default rootReducer