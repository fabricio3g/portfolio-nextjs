import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'
import '../styles/variables-white.css'
import Head from 'next/head'
import { useRouter } from 'next/router';

import { ThemeProvider } from '../utils/contextTheme';

function MyApp({ Component, pageProps }) {

  const { asPath } = useRouter();

  const dynamicTitle = ()=>{
    const names = ['- Home', '- Porfolio', '- Blog', '- About']
    switch(asPath){
      case '/':
        return names[0]
        break;
      case '/portfolio':
        return names[1]
        break;
      case '/blog':
          return names[2]
          break;
      case '/aboutme':
            return names[3]
            break;
      default:
          return ''
          break;
    }
  }
  return(
    
    <ThemeProvider>
      <Head>
        <title>{`.Fabricio ${dynamicTitle()}`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Component {...pageProps} />
    </ThemeProvider>
  )
  
}

export default MyApp
