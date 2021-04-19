import Link from 'next/link';
import Image from 'next/image';

const shorten = (text, max) => {
  return text && text.length > max
    ? text.slice(0, max).split(' ').slice(0, -1).join(' ') + ' ...'
    : text;
};

const RecipeCard = ({ recipe }) => {
  const { title, slug, cookingTime, thumbnail } = recipe.fields;
  return (
    <div className='transform  -rotate-1'>
      <div className='featured'>
        <Image
          src={`https:${thumbnail.fields.file.url}`}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className='bg-white shadow-md m-0 p-1 relative -top-8 '>
        <div className='p-4'>
          <h4 className='my-1 mx-auto font-bold'>
            {shorten(title, 40)}
          </h4>
          <p className='font-normal m-0'>
            Takes approx {cookingTime} mins to make
          </p>
          <div className='flex justify-end mt-4 '>
            <Link href={`/recipes/${slug}`}>
              <a className='bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 border-b-4 border-green-500 hover:border-green-700 rounded'>
                Cook This
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
