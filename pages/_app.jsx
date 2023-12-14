// pages/_app.js or pages/_app.jsx
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
