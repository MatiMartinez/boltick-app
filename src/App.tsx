import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Contact, Error, Event, Help, Home, Payment, PaymentCallback, Terms } from 'src/pages';
import { Layout } from 'src/components';
import { EventsProvider } from './context';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout withSearch>
          <Home />
        </Layout>
      ),
      errorElement: <Error />,
    },
    {
      path: '/about',
      element: (
        <Layout>
          <About />
        </Layout>
      ),
      errorElement: <Error />,
    },
    {
      path: '/contact',
      element: (
        <Layout>
          <Contact />
        </Layout>
      ),
      errorElement: <Error />,
    },
    {
      path: '/terms',
      element: (
        <Layout>
          <Terms />
        </Layout>
      ),
      errorElement: <Error />,
    },
    {
      path: '/help',
      element: (
        <Layout>
          <Help />
        </Layout>
      ),
      errorElement: <Error />,
    },
    {
      path: '/event/:id',
      element: (
        <Layout withSearch>
          <Event />
        </Layout>
      ),
    },
    {
      path: '/payment/:id',
      element: <Payment />,
    },
    {
      path: '/payment-callback-success',
      element: <PaymentCallback />,
    },
  ]);

  return (
    <EventsProvider>
      <RouterProvider router={router} />
    </EventsProvider>
  );
}

export default App;
