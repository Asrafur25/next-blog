import "../styles/globals.css";
import Layout from "../Components/Layout";
import AuthProvider from "../Context/AuthProvider/AuthProvider";
import PrivateRoute from '../utilities/PrivateRoute'

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    );
  }
  return (
    <AuthProvider>
      <Layout>
        <PrivateRoute>
        <Component {...pageProps} />
        </PrivateRoute>
       
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
