import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';

// layout
import RootLayout from './layouts/RootLayout';
import ProfileLayout from './layouts/ProfileLayout';

// components
import Header from './components/Header';
import NavBar from './components/Breadcrumbs';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Schedule from './pages/schedules/LessonSchedule';
import About from './pages/About';
import MyCalendar from './pages/profile/MyCalendar';
import MyProfile from './pages/profile/MyProfile';
import ProfileError from './pages/profile/ProfileError';
import NotFound from './pages/NotFound';

// styles


// instantiate router 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='schedule' element={<Schedule />} />
      <Route path='about' element={<About />} />
      <Route path="profile" element={<ProfileLayout />} errorElement={<ProfileError />}>
        <Route
          index
          element={<MyProfile />}
        />
         <Route 
          path=":id" 
          element={<MyCalendar />}
          // loader={CalendarLoader}
        />
      </Route>
      <Route path='*' element={<NotFound />} />
    </Route>

  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
