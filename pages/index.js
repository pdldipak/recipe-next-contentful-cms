import { createClient } from 'contentful';
import RecipeCard from '../components/RecipeCard';

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });
  const res = await client.getEntries({ content_type: 'recipe' });
  return {
    props: {
      recipes: res.items,
      //incremental static regeneration in every 10seconds
      revalidate: 10,
    },
  };
};

const Home = ({ recipes }) => {
  console.log(recipes);
  return (
    <div className='grid justify-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto'>
      {recipes?.map((recipe) => (
        <RecipeCard key={recipe.sys.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default Home;
// ^[a-z0-9]+(?:-[a-z0-9]+)*$
