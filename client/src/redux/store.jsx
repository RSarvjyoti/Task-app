import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import taskReducer from './reducers/taskReducer';
import notificationReducer from './reducers/notificationReducer';

const rootReducer = combineReducers({
  tasks: taskReducer,
  notifications: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
