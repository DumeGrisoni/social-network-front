import { Link } from 'react-router-dom';
import './post.scss';

const Post = ({ post }) => {
  return (
    <div className="post">
      <img src={post.img} alt="" />
      <div className="infos">
        <img src={post.profil} alt="" />

        <div className="user">
          <span className="title">{post.title}</span>
          <span className="name">
            <Link to={`/userProfile/${post.userProfile}`}>{post.name}</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
