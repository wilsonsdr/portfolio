import Head from 'next/head';
import Header from '@/components/layout/Header';

export default function App() {
  return (
    <div className='flex flex-row gap-56 max-sm:flex-col max-sm:gap-20'>
      <Head>
        <meta name='description' content='Portfolio showcasing my professional experiences, education, personal projects, and contact information' />
        <title>Portfolio</title>
        <link rel='icon' type='image/svg' href='/img/decorative/icon.svg'></link>
      </Head>
      <Header />
    </div>
  );
}
