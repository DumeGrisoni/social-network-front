import './creation.scss';
import { useSelector } from 'react-redux';
import { selectCreationById } from '../../feature/creationSlice';
import { useParams } from 'react-router-dom';

import CreationCreator from '../../components/creations/creationCreator/CreationCreator';
import CreationLikes from '../../components/creations/CreationLikes/CreationLikes';

const Creation = () => {
  const { creationId } = useParams();

  const creation = useSelector((state) =>
    selectCreationById(state, String(creationId))
  );

  if (!creation) {
    return (
      <div className="noCreation">
        <h2>La création est introuvable</h2>
      </div>
    );
  }
  return (
    <article className="creation">
      <h2>{creation.title}</h2>
      <p>{creation.description}</p>
      <img src={creation.image} alt="" />
      <div className="infos">
        <CreationCreator id={creation.creatorId} />
        <CreationLikes id={creation.id} />
      </div>
    </article>
  );
};

export default Creation;
