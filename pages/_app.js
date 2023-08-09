import { Provider } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';
import {createStore, applyMiddleware} from 'redux';

export const metadata = {
  title: 'Walmart shop',
  description: 'Shop to buy the diapers',
}

export default function App({ Component, pageProps }) {
  const store = createStore(()=>[], {}, applyMiddleware());
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