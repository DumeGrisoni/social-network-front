import './creations.scss';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { allCreations } from '../../feature/creationSlice';
import CreationCreator from './creationCreator/CreationCreator';

const Creations = () => {
  const creations = useSelector(allCreations);

  const descOrder = creations
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.date));

  return (
    <div className="creations">
      {descOrder?.map((creation) => (
        <article className="creation" key={creation.id}>
          <Link to={`/creations/${creation.id}`} creation={creation}>
            <img src={creation.image} alt="" />
            <div className="infos">
              <img src={creation.avatar} alt="" />

              <div className="creator">
                <span className="title">{creation.title}</span>
                <span className="name">
                  <Link to={`/creator/${creation.creatorId}`}>
                    <CreationCreator id={creation.creatorId} />
                  </Link>
                  <p>Le : {creation.createdAt}</p>
                </span>
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Creations;
