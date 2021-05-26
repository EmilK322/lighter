import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Sessions from './pages/Sessions';
import Batches from './pages/Batches';
import {ChakraProvider} from '@chakra-ui/react';
import Layout from './components/Layout';
import {QueryCache, QueryClient, QueryClientProvider} from 'react-query';


const queryCache = new QueryCache();
const queryClient = new QueryClient({
  queryCache,
  defaultOptions: {
    queries: {
      staleTime: 120000,
    },
  },
});


function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Layout>

            <Switch>
              <Route path="/sessions">
                <Sessions />
              </Route>
              <Route path="/">
                <Batches />
              </Route>
            </Switch>
          </Layout>

        </Router>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;