
import Home from "./pages/Home";
import MainLayout from "./layout/layout"
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index path='/Home' element={<Home />} />
      <Route path='/Services' element={<Services />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Portfolio' element={<Portfolio />} />
      <Route path='/Products' element={<Products />} />
    </Route>
  )
)
function App() {

  return <RouterProvider router={router} />;


}

export default App
