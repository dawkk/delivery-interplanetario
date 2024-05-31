
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import './initialData/sampleAddresses';
import CreateAddress from './pages/Addresses';
import EditAddress from './pages/Addresses/EditAddress';
import NotFoundPage from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/address',
    element: <CreateAddress />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/edit-address/:id',
    element: <EditAddress />,
    errorElement: <NotFoundPage />,
  },
]);

function App(): JSX.Element {
  return (
    <>
      <div >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
