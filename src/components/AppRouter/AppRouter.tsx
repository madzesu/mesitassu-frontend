import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from 'components/pages/AboutPage';
import ContactPage from 'components/pages/ContactPage';
import HomePage from 'components/pages/HomePage';
import NavigationBar from 'components/NavigationBar';
import { ROUTES } from 'utils/constants';

const AppRouter = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path={ROUTES.ABOUT} element={<AboutPage />} />
        <Route path={ROUTES.CONTACT} element={<ContactPage />} />
        <Route path={ROUTES.HOME} element={<HomePage />} />
      </Routes>
    </Router>
  )
};

export default AppRouter;
