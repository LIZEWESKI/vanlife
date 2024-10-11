import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HostLayout from "./components/HostLayout";
import HostDetails from "./components/HostDetails";
import HostPricing from "./components/HostPricing";
import HostPhotos from "./components/HostPhotos";
import ErrorPage from "./components/ErrorPage";
import Home from "./pages/home/Home";
import Login, {loader as loginLoader, action as loginAction} from "./pages/login/Login";
import About from "./pages/about/About";
import Vans , {loader as vansLoader} from "./pages/vans/Vans";
import VanDetails , {loader as vanDtailsLoader} from "./pages/vanDetails/VanDetails";
import Dashboard , {loader as dashboardLoader}from "./pages/host/Dashboard";
import Income from "./pages/host/Income";
import Reviews from "./pages/host/Reviews";
import HostVans , {loader as hostVansLoader} from "./pages/host/hostVans/HostVans";
import HostVanDetailLayout , {loader as hostVanDetailLoader} from "./components/HostVanDetailLayout";
import NotFound from "./pages/notFound/NotFound";
import { requireAuth } from "./utils";
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="login" element={<Login/>} loader={loginLoader} action={loginAction}/>
          <Route path="vans" element={<Vans/>} errorElement={<ErrorPage/>} loader={vansLoader} />
          <Route path="vans/:id" element={<VanDetails/>} errorElement={<ErrorPage/>} loader={vanDtailsLoader}/>
          <Route path="host" element={<HostLayout/>} loader={async ({request}) => await requireAuth(request)} >
            <Route index element={<Dashboard/>} loader={dashboardLoader} />
            <Route path="income" element={<Income/>}/>
            <Route path="reviews" element={<Reviews/>} />
            <Route path="vanshost" element={<HostVans/>}  errorElement={<ErrorPage/>} loader={hostVansLoader}/>
            <Route path="vanshost/:id" element={<HostVanDetailLayout />} errorElement={<ErrorPage/>} loader={hostVanDetailLoader}>
              <Route index element={<HostDetails />} />
              <Route path="pricing" element={<HostPricing />} />
              <Route path="photos" element={<HostPhotos />} />
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
