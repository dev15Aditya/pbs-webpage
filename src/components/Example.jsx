import React, { Component } from 'react';
import VerticalCarousel from './VerticalCarousel';
import { config } from 'react-spring';

const crudeOil = [
  {
    key: 1,
    title: 'Crude Oil',
    image: 'Crude Oil.jpg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'EFS',
      'DFL',
      'WTI/Brent',
      'Brent/Dub ai',
      'Murban/Dubai',
      'Oman/Dubai',
    ],
    text: [
      'Brent Swap',
      'Dubai Swap',
      'WTI Swap',
      'Dated Brent Swap',
      'Murban Swap',
      'Oman Swap',
    ],
  },
  {
    key: 2,
    title: 'Naphtha',
    image: 'Naphtha.jpg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'East-West Spreads',
      'Gas/Nap',
    ],
    text: ['MOPJ', 'NWE Naphtha'],
  },
  {
    key: 3,
    title: 'Gasoline',
    image: 'Gasoline.jpg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'Inter-Ron',
      'East-West Spreads',
      'Gas/Nap',
    ],
    text: ['Sing 92Ron', 'Sing 95Ron', 'Sing 97Ron', 'EBOB Swap', 'RBOB Swap'],
  },
  {
    key: 4,
    title: 'Middle Distillates',
    image: 'Middle Distillates.jpg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'Regrade',
      'East-West Spreads',
      'Diff',
      'EFS',
    ],
    text: ['Sing Gasoil (10ppm)', 'Sing Jet Kero', '0.5% Sulphur Gasoil'],
  },
  {
    key: 5,
    title: 'Fuel Oil',
    image: 'Fuel Oil.jpg',
    hoveredText: [
      'Outright',
      'Inter-month Spreads',
      'Crack Spreads',
      'Visco',
      'East-West Spreads',
      'HI5',
    ],
    text: [
      'Sing LSFO Marine 0.5%',
      'Sing HSFO 380cst',
      'Sing HSFO 180cst',
      'Rdam LSFO Marine 0.5%',
      'Rdam Barges',
    ],
  },
  {
    key: 6,
    title: 'Iron Ore',
    image: 'Iron Ore.jpg',
    hoveredText: ['Outright', 'Inter-month Spreads'],
    text: ['SGX TSI Iron Ore CFR China', '(62% Fe Fines)'],
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  render() {
    return (
      <div
        style={{
          position: 'fixed',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100vw',
          height: '100vh',
          margin: '0 auto',
          background: '#000000',
        }}
      >
        <VerticalCarousel
          slides={crudeOil}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
