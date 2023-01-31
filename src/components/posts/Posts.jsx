import Post from '../post/Post';
import './posts.scss';
import avatar from '../../assets/SP_Viking_Hero_AI.png';
import avatar2 from '../../assets/3d character.png';
// import img1 from '../../assets/Sp_Minaret_Sorra_AI.png';
import img2 from '../../assets/Vorace_Colmillo_AI.png';

const Posts = () => {
  const postData = [
    {
      id: 1,
      name: 'Jean',
      userId: 1,
      title: 'Steampunk Minaret',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
      img: img2,
      profil: avatar,
    },
    {
      id: 2,
      name: 'Marie',
      userId: 2,
      title: 'Vorace Colmillo Character',
      body: 'Vorace coliillo main character in my game. Made with Blender and Substance Painter.',
      img: img2,
      profil: avatar2,
    },
  ];

  return (
    <div className="posts">
      {postData.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
