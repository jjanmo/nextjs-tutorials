import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Layout type={Component.name}>
      <Navbar />
      <Component {...pageProps} />
    </Layout>
  );
}
