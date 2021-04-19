import Head from 'next/head';

const Meta = ({title, keywords, description}) => {
  return (
    <Head>
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
      />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href='/favicon.ico' />

      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap'
        rel='stylesheet'
      />
      <title>{title}</title>
    </Head>
  );
};

export default Meta;

Meta.defaultProps = {
  title: 'Recipes site',
  keywords: 'Nepali and Indian food',
  description: 'Best recipe site',
};
