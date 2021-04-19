import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className='text-center mx-auto'>
        <Link href='/'>
          <a className='flex flex-col'>
            <h1 className='m-0 font-bold tracking-wide'>
              <span className='block font-normal text-3xl my-2'>
                Prepare Delicious
              </span>
              <span className='block font-bold text-5xl my-2'>
                Nepali Foods
              </span>
            </h1>
            <h2 className='font-normal text-2xl my-2'>
              Spread The Joy 
            </h2>
          </a>
        </Link>
      </header>
    </>
  );
};

export default Header;
