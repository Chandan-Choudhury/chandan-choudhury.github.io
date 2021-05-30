import React from 'react';
import Icon1 from '../../images/Photography.jpg';
import Icon2 from '../../images/AerialShots.jpg';
import Icon3 from '../../images/Currency.jpg';
import { Link } from 'react-router-dom';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='hobbies'>
      <ServicesH1>Hobbies</ServicesH1>
      <ServicesWrapper>
      <Link to="/photography" style={{textDecoration: 'none', color: 'black' }}>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Photography</ServicesH2>
          <ServicesP>
            All the photos are taken and edited by me. I use OnePlus & iPhone to shoot and Adobe Lightroom to edit the photos.
          </ServicesP>
        </ServicesCard>
        </Link>
        <Link to="/comingsoon" style={{textDecoration: 'none', color: 'black' }}>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Aerial Shots</ServicesH2>
          <ServicesP>
            Amazing aerial shots taken with my DJI Mavic Air drone in Pro/Manual mode and then edited in Adobe Lightroom by me.
          </ServicesP>
        </ServicesCard>
        </Link>
        <Link to="/currencycollection" style={{textDecoration: 'none', color: 'black' }}>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>World Currency Collection</ServicesH2>
          <ServicesP>
            Collected over 150 countries' paper, polymer banknotes & coins. Most of the notes are in UNC(Uncirculated) condition.
          </ServicesP>
        </ServicesCard>
        </Link>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
{/* Chandan Choudhury (/aerialshots) UI 1.0*/}