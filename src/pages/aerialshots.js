import React from 'react';
import '../components/Photography/Slider.css';
import ImageSlider from '../components/AerialShots/ImageSlider';
import { SliderData } from '../components/AerialShots/SliderData'
import ScrollToTop from '../components/ScrollToTop';
import NavbarLogo from '../components/NavbarLogo';
import Footer from '../components/Footer';

function AerialShotsPage() {
  return (
    <>
      <ScrollToTop />
      <NavbarLogo />
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  );
}

export default AerialShotsPage;
{/* Chandan Choudhury */}