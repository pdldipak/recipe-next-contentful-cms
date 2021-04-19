import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className='bg-white p-6 shadow-lg transform -rotate-1'>
      <h1 className='font-bold text-4xl mb-6'>404</h1>
      <p>Ooops! That page cannot be found 😿, 🙇‍♂️</p>
      <p>
        Redirecting to{' '}
        <Link href='/'>
          <a className='underline text-green-900'>HomePage</a>
        </Link>{' '}
        for more Nepalese recipes.
      </p>
    </div>
  );
};

export default NotFound;
