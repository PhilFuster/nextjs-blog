import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../src/components/Layout';
const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>super awesome first post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>
          <a
            style={{ textDecoration: 'none', color: 'blue' }}
            className='coolClass'
          >
            Back to home
          </a>
        </Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
