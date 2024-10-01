import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Vans from "./pages/vans/Vans";
import VanDetails from "./pages/vanDetails/VanDetails";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans from "./pages/host/hostVans/HostVans";
import HostVanDetailLayout from "./components/HostVanDetailLayout";
import HostDetails from "./components/HostDetails";
import HostPricing from "./components/HostPricing";
import HostPhotos from "./components/HostPhotos";
import NotFound from "./pages/notFound/NotFound";
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="vans" element={<Vans/>}/>
          <Route path="vans/:id" element={<VanDetails/>}/>

          <Route path="host" element={<HostLayout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path="income" element={<Income/>}/>
            <Route path="vanshost" element={<HostVans/>}/>
            <Route path="reviews" element={<Reviews/>}/>
            <Route path="vanshost/:id" element={<HostVanDetailLayout/>}>
              <Route index element={<HostDetails/>}/>
              <Route path="pricing" element={<HostPricing/>}/>
              <Route path="photos" element={<HostPhotos/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound/>}/>
        </Route>
  ))
  return (
    <RouterProvider router={router}/>
  )
}

export default App
