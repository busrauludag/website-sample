import Link from 'next/link';

function HomePage() {
  return <div>
    <h1>Welcome to Next.js!</h1>

    {/* href kullanimi a ile degil, Link componenti ile birlikte olmali */}
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
}

export default HomePage