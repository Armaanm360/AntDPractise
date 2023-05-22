import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/LayoutMain/Main';
import SidebarOutlet from './Pages/Sidebar/SidebarOutlet';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>, children: [
        {
          path: "/approvals",
          element: <SidebarOutlet></SidebarOutlet>
        }
      ]
    },
    {
      path: "/login",
      element: <SidebarOutlet></SidebarOutlet>
    },

  ]);
  return (
    <div className="App">
      <RouterProvider router={router}>
        <Main></Main>
      </RouterProvider>

    </div>
  );
}

export default App;
