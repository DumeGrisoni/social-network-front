import { createSlice, nanoid } from '@reduxjs/toolkit';
import avatar from '../assets/SP_Viking_Hero_AI.png';
import avatar2 from '../assets/3d character.png';
import img2 from '../assets/Vorace_Colmillo_AI.png';

const options = {
  'dd/MM/yyyy': 'numeric',
};
export const creationSclice = createSlice({
  name: 'creations',
  initialState: [
    {
      id: '1',
      creatorId: '1',
      title: 'Steampunk Minaret',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      image: img2,
      category: '2D',
      avatar: avatar,
      createdAt: new Date().toLocaleDateString('fr-FR', options),
      likes: 0,
    },
    {
      id: '2',
      creatorId: '2',
      title: 'Vorace Colmillo Character',
      description:
        'Vorace colmillo main character in my game. Made with Blender and Substance Painter.',
      image: img2,
      avatar: avatar2,
      category: '3D',
      createdAt: new Date().toLocaleDateString('fr-FR', options),
      likes: 2,
    },
  ],
  reducers: {
    addCreation: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, description, creatorId) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            category: '3D',
            createdAt: new Date().toLocaleDateString('fr-FR', options),
            creatorId,
            image: img2,
            avatar: avatar,
            likes: 0,
          },
        };
      },
    },
    addLikes(state, action) {
      const { creationId } = action.payload;
      const existingCreation = state.find(
        (creation) => creation.id === creationId
      );
      if (existingCreation) {
        existingCreation.likes++;
      }
    },
  },
});

export const selectCreationById = (state, creationId) =>
  state.creations.find((creation) => creation.id === creationId);
export const allCreations = (state) => state.creations;
export const { addCreation, addLikes } = creationSclice.actions;
export default creationSclice.reducer;
