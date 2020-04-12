import Navigation from '../components/navigation';

function Layout({ children }) {
  return <div>
    <Navigation />
    <main>
      {children}
    </main>
    <footer>
      desing by busra
    </footer>
  </div>
}

export default Layout