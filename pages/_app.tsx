import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from '@/shared/redux/store';
import { ToastContainer } from "react-toastify";
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
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PGate>
    </Provider>
  )
}
