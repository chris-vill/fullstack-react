import { ChakraProvider } from '@chakra-ui/react';
import { createClient, Provider } from 'urql';

import theme from '../theme';

const client = createClient({
  url: 'http://localhost:4000/graphql'
});

function MyApp({ Component, pageProps }: any) {

  return (
    <Provider value={ client }>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  )
}

export default MyApp
