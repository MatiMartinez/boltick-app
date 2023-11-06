import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, Event, Home, Payment, PaymentCallback } from 'src/pages';
import { Layout } from 'src/components';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <Layout>
          <Home />
        </Layout>
      ),
      errorElement: <Error />,
    },
    {
      path: '/event/:id',
      element: <Event />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/payment-callback-success',
      element: <PaymentCallback />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
