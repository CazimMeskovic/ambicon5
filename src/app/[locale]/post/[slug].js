
import Post from '../../components/Post';

const PostPage = ({ params }) => {
  const { slug } = params;

  return (
    <div>
      <Post slug={slug} /> 
    </div>
  );
};

export default PostPage;
