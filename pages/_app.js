import '@/styles/globals.css'; 
import { Provider } from 'react-redux'; 
import store from '@/redux/store';
import { SessionProvider } from 'next-auth/react'


export default function App({ Component, pageProps: {
  session, ...pageProps
} }) {
  return (
  <Provider store={store}>
    <SessionProvider session={session}>

   <Component {...pageProps} />
    </SessionProvider>

  </Provider>
 
  )
}
