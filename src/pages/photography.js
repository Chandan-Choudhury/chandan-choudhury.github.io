import React from 'react';
import '../components/Photography/Slider.css';
import ImageSlider from '../components/Photography/ImageSlider';
import { SliderData } from '../components/Photography/SliderData'
import ScrollToTop from '../components/ScrollToTop';
import NavbarLogo from '../components/NavbarLogo';
import Footer from '../components/Footer';

function PhotographyPage() {
  return (
    <>
      <ScrollToTop />
      <NavbarLogo />
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  );
}

export default PhotographyPage;
{/* Chandan Choudhury */}