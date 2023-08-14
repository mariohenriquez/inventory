import { Provider } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import store from '../redux/store';
import '../styles/globals.css';

export const metadata = {
  title: 'Walmart shop',
  description: 'Shop to buy the diapers',
}

function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <div className='min-h-screen'>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </Provider>
  )
}
export default App;