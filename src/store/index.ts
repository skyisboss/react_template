import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

const store = configureStore({
  devTools: import.meta.env.DEV,
  reducer: reducers,
});
export type RootState = ReturnType<typeof reducers>

export default store