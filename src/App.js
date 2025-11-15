import {
  Route,
  Routes
} from 'react-router-dom';
import pages from './utils/pages';
import Layout from './components/layout/Layout';
import Home from './components/pages/Home';
import Bookings from './components/pages/Bookings';
import ConfirmedBooking from './components/pages/Bookings/ConfirmedBooking';
import NotFound from './components/pages/NotFound';
import UnderConstruction from './components/pages/UnderConstruction';

/**
 * Main App component - Handles routing and page layout
 * Wraps all pages with Layout component (Header, Footer)
 */
const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          {/* Home page - Hero, Specials, Testimonials, About */}
          <Route path={pages.get('home').path} element={<Home />} />

          {/* About page - Coming soon */}
          <Route
            path={pages.get('about').path}
            element={<UnderConstruction />}
          />

          {/* Menu page - Coming soon */}
          <Route
            path={pages.get('menu').path}
            element={<UnderConstruction />}
          />

          {/* Bookings page - Table reservation form */}
          <Route path={pages.get('bookings').path} element={<Bookings />} />

          {/* Booking confirmation page */}
          <Route
            path={pages.get('confirmedBooking').path}
            element={<ConfirmedBooking />}
          />

          {/* Order online page - Coming soon */}
          <Route
            path={pages.get('orderOnline').path}
            element={<UnderConstruction />}
          />

          {/* Login page - Coming soon */}
          <Route
            path={pages.get('login').path}
            element={<UnderConstruction />}
          />

          {/* 404 page - Catch all unmatched routes */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
