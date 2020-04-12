import Layout from '../components/layout';
import Head from 'next/head';

function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Homepgae</title>
      </Head>
      <h1>Welcome to Next.js!</h1>

      <style jsx>{`
        h1 {
          color: white;
          background-color: blue;
        }
      `}</style>

      {/* bu sayfaya ozgu global css */}
      <style global jsx>{`
        body {
          background-color: aliceblue;
        }
      `}</style>
    </Layout>
  )
}

export default HomePage