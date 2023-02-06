import { configureStore } from '@reduxjs/toolkit';
import creationsReducer from '../feature/creationSlice';
import creatorReducer from '../feature/creatorSlice';

export default configureStore({
  reducer: {
    creations: creationsReducer,
    creator: creatorReducer,
  },
});
