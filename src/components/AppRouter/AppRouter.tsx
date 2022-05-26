import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';
import { ROUTES } from '../../utils/constants';
import NavigationBar from '../NavigationBar';

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
