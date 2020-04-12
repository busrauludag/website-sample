import Link from 'next/link';

function About() {
  return <div>
    <h1>About Page!</h1>

    <Link href="/">
      <a>Homepage</a>
    </Link>
  </div>
}

export default About