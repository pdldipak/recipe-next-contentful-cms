import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Image from 'next/image';
import Skeleton from '../../components/Skeleton';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'recipe',
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug,
  });
//if no data redirect to home page
  if (!items.length) {
    return {
      redirect: {
        destination: '/',
        permanent:false
        
      }
    }
  }

  return {
    props: { recipe: items[0] },
    //incremental static regeneration in every 10seconds
    revalidate: 10,
  };
};

export default function RecipeDetails({ recipe }) {
 // console.log(recipe);
  if(!recipe) return <Skeleton/>
  const {
    featureImage,
    title,
    cookingTime,
    ingredients,
    method,
  } = recipe.fields;
  return (
    <div className='flex flex-col'>
      <div>
        <Image
          src={`https:${featureImage.fields.file.url}`}
          width={featureImage.fields.file.details.image.width}
          height={featureImage.fields.file.details.image.height}
        />
      </div>
      <h2 className='flex mr-auto bg-white shadow-md m-0 p-2 relative -top-10 -left-1 text-3xl transform  -rotate-1'>
        {title}
      </h2>
      <div className='my-2  text-2xl'>
        <h3>Take about {cookingTime} mins to cook.</h3>
        <h3 className='mt-4 mb-2  font-bold text-2xl'>Ingredients</h3>
        <div className='flex flex-wrap'>
          {ingredients?.map((ingredient) => {
            return (
              <span
                key={ingredient}
                className='w-auto mr-2 mt-2 text-xl p-1 border-2 border-gray-200 font-normal hover:text-white'
              >
                {ingredient}
              </span>
            );
          })}
        </div>
        <div>
          <h3 className='mt-4 font-bold mb-2 text-2xl'>Method:</h3>
          <p className='text-xl'>
            {documentToReactComponents(method)}
          </p>
        </div>
      </div>
    </div>
  );
}
