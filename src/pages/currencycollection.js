import React from 'react';
import '../components/Photography/Slider.css';
import ImageSlider from '../components/CurrencyCollection/ImageSlider';
import { SliderData } from '../components/CurrencyCollection/SliderData'
import ScrollToTop from '../components/ScrollToTop';
import NavbarLogo from '../components/NavbarLogo';
import Footer from '../components/Footer';

function CurrencyCollectionPage() {
  return (
    <>
      <ScrollToTop />
      <NavbarLogo />
      <ImageSlider slides={SliderData} />
      <Footer />
    </>
  );
}

export default CurrencyCollectionPage;
{/* Chandan Choudhury */}