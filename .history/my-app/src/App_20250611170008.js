import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Header from './components/Header';
import OnlineRegistrationForm from './pages/OnlineRegistrationForm';
import Certificate from './pages/Certification';
import CorporateTraining from './pages/CorporateTraining';
import PlacementSection from './pages/PlacementSection';
import AboutUs from './pages/AboutUs';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';

import Settings from './pages/Settings';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import HeroesCardPlacedCandidate from './pages/HeroesCardPlacedCandidate';
import CourseDetails from './pages/CourseDetails';
import OurLearners1 from './pages/OurLearners1';
import UpcomingBatch from './pages/UpcomingBatch';
import Testimonials from './pages/Testimonials';
import OurPlacement from './pages/OurPlacement';
import Privacy from './pages/Privacy';
import Policies from './pages/Policies';
import FollowUs from './pages/FollowUs';
import ContactUs from './pages/ContactUs';
import Address from './pages/Address';
import PlacementCards from './pages/PlacementCards';
import About from './pages/About';
import AdminDashboard from './components/AdminDashboard';



import './App.css';







function App() {
  return (
    <Router>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/OnlineRegistrationForm" element={<OnlineRegistrationForm />} />
        <Route path="/CorporateTraining" element={<CorporateTraining />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/PlacementSection" element={<PlacementSection />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Users" element={<Users />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Sidebar" element={<Sidebar />} />
        <Route path="/Navbar" element={<Navbar />} />
      <Route path="/heroes-card" element={<HeroesCardPlacedCandidate />} />
      <Route path="/course-details" element={<CourseDetails />} />
      <Route path="/course-details" element={<CourseDetails />} />
<Route path="/our-learners1" element={<OurLearners1 />} />
              <Route path="/upcoming-batch" element={<UpcomingBatch />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/our-placement" element={<OurPlacement />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/policies" element={<Policies />} />
              <Route path="/follow-us" element={<FollowUs />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/address" element={<Address />} />
              <Route path="/placement-cards" element={<PlacementCards />} />
              <Route path="/about" element={<About />} />





      </Routes>


      // <div>
      //   <h1>NTI Training School</h1>
      //   <Footer />
      // </div>
    </Router>
  );
}

export default App;
