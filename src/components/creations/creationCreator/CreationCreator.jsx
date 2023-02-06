import { useSelector } from 'react-redux';
import { allCreators } from '../../../feature/creatorSlice';

const CreationCreator = ({ id }) => {
  const creators = useSelector(allCreators);
  const creator = creators.find((creator) => creator.id === id);

  return creator.name;
};

export default CreationCreator;
