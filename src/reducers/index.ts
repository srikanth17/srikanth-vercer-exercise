import { combineReducers } from 'redux';
import trades from './trades';
import filters from './filters';

const rootReducer = combineReducers({
  trades,
  filters,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
