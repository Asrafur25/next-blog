import "../styles/globals.css";
import Layout from "../Components/Layout";
import AuthProvider from "../Context/AuthProvider/AuthProvider";
import PrivateRoute from "../utilities/PrivateRoute";

function MyApp({ Component, pageProps }) {
  console.log({Component},{pageProps})
  if (Component.getLayout) {
    return Component.getLayout(
      <AuthProvider>
        <PrivateRoute>
          <Component {...pageProps} />
        </PrivateRoute>
      </AuthProvider>
    );
  }
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
