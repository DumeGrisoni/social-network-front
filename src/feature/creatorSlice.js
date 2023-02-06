import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: '1',
    name: 'Jean',
    surname: 'Dupont',
    email: 'jean@email.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: '2',
    name: 'Marie',
    surname: 'Fleuret',
    email: 'marie@email.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
];
const creatorSlice = createSlice({
  name: 'creator',
  initialState,
  reducers: {},
});

export const allCreators = (state) => state.creator;
export default creatorSlice.reducer;
