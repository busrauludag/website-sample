import Layout from '../../components/layout';
import Head from 'next/head';
import unfetch from 'isomorphic-unfetch';

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Homepgae</title>
      </Head>
      <h1>Welcome to Next.js!</h1>
    </Layout>
  )
}

export async function getStaticPaths() {
  // data fetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/');
  const characters = await data.json();
  return {
    paths: characters.map(character => {
      return { params: { id: character.id } }
    }),
    fallback: false
  };
}

export async function getStaticProps() {
  // data fetch
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id);
  const character = await data.json();
  return {
    props: {
      character
    }
  }
}

export default CharacterDetail