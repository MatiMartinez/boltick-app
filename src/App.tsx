import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Error, Home, Intro, Payment, PaymentCallback } from 'src/pages';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
    },
    {
      path: '/event',
      element: <Intro />,
    },
    {
      path: '/payment',
      element: <Payment />,
    },
    {
      path: '/payment-callback',
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
