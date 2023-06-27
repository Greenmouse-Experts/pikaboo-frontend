import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/shared/redux/store';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Layouts } from '@/shared/components/layouts/Layout';
import { MyAppProps } from '@/shared/components/layouts/Types';
import '@/styles/globals.css'



export default function MyApp({ Component, pageProps }: MyAppProps) {
  const Layout = Layouts[Component.Layout] ?? ((page: MyAppProps) => page);
  const PGate = PersistGate as any
  
  return (
    <Provider store={store}>
      <PGate persistor={persistor}>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          className='index-20'
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PGate>
    </Provider>
  )
}
