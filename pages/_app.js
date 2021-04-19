import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Meta from '../components/Meta';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <div className='flex flex-col h-screen max-w-screen-xl mx-auto'>
        <div className='flex items-center mx-auto my-6 w-full'>
          <Header />
        </div>
        <div className='flex-grow mx-auto mt-4 mb-12 w-full px-10 py-auto'>
          <Component {...pageProps} />
        </div>
        <div className='flex justify-center w-full my-auto mx-auto p-4 bg-gray-800 '>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
