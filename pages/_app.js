import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

export const metadata = {
  title: 'Walmart shop',
  description: 'Shop to buy the diapers',
}

export default function App({ Component, pageProps }) {
  return (
      <div className='min-h-screen'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
  )
}