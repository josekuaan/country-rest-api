import { combineReducers } from "redux";

import countryReducer from './reducers/countryReducer'
import themeReducer from './reducers/themeReducer'




   const rootReducer = combineReducers({ countryReducer:countryReducer,themeReducer:themeReducer });

   export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>