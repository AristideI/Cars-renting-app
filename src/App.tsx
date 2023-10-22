import { ReactElement } from 'react'
import { configure } from 'axios-hooks'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import MainLayout from './components/MainLayout'
import Home from './pages/Home'
import BookCar from './pages/renter/BookCar'
import MyBookings from './pages/renter/MyBookings'
import CarDetails from './pages/renter/CarDetails'
import ErrorPage from './pages/ErrorPage'
import NotFound from './pages/NotFound'
import AddCar from './pages/owner/AddCar'
import MyCars from './pages/owner/MyCars'
import MyCarBookings from './pages/owner/MyCarBookings'

// Configure axios hooks
// Do not delete this if you want to use the provided API hooks in `src/hooks`
configure({
  defaultOptions: {
    autoCancel: false,
  },
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="bookcar" element={<BookCar />} />
      <Route path="bookcar/:id" element={<CarDetails />} />
      <Route path="mybooking" element={<MyBookings />} />
      <Route path="error" element={<ErrorPage />} />
      <Route path="addcar" element={<AddCar />} />
      <Route path="mycarbookings" element={<MyCarBookings />} />
      <Route path="mycars" element={<MyCars />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
)
export default function App(): ReactElement {
  return <RouterProvider router={router} />
}
