
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
    /* errorElement: <NotFoundPage />, */
  }
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
