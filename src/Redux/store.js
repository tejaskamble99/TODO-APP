import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';

const store = configureStore({
    reducer: rootReducer // Pass your root reducer to configureStore
  });
  
  export default store;
