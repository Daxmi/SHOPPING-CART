import { Provider } from 'react-redux';   
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// import store from '../redux/store';
import {store, persistor} from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react'     
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="wrapper">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
      </PersistGate>
    </Provider>
  ) ;
}


export default MyApp
