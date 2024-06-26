import React from 'react';
import styled from '@emotion/styled';
import Slide from './Slide';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const NavigationButtons = styled.div`
  position: absolute;
  display: flex;
  width: 20%;
  min-width: 100px;
  /* margin-top: 1rem; */
  justify-content: space-between;
  z-index: 1000;
  bottom: 8%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
`;

const NavBtn = styled.div`
  background: #ffffff;
  color: black;
  /* padding-left: 10px;
  padding-right: 10px; */
  width: 40px;
  height: 40px;
  font-size: 30px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function mod(a, b) {
  return ((a % b) + b) % b;
}

class VerticalCarousel extends React.Component {
  state = {
    index: 0,
    goToSlide: null,
    prevPropsGoToSlide: 0,
    newSlide: false,
  };

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('wheel', this.handleWheel);
  };

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('wheel', this.handleWheel);
  };

  handleKeyDown = (event) => {
    if (event.isComposing || event.key === 'Unidentified') {
      return;
    }
    if (event.key === 'ArrowUp') {
      this.moveSlide(-1);
    }
    if (event.key === 'ArrowDown') {
      this.moveSlide(1);
    }
  };

  handleWheel = (event) => {
    const delta = Math.sign(event.deltaY);
    clearTimeout(this.wheelTimeout);
    this.wheelTimeout = setTimeout(() => {
      this.moveSlide(delta);
    }, 50);
  };

  // componentDidMount = () => {
  //   document.addEventListener('keydown', (event) => {
  //     if (event.isComposing || event.key === 'Unidentified') {
  //       return;
  //     }
  //     if (event.key === 'ArrowUp') {
  //       this.moveSlide(-1);
  //     }
  //     if (event.key === 'ArrowDown') {
  //       this.moveSlide(1);
  //     }
  //   });
  // };

  static propTypes = {
    slides: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.any,
        content: PropTypes.object,
      })
    ).isRequired,
    goToSlide: PropTypes.number,
    showNavigation: PropTypes.bool,
    offsetRadius: PropTypes.number,
    animationConfig: PropTypes.object,
  };

  static defaultProps = {
    offsetRadius: 2,
    animationConfig: {
      tension: 120,
      friction: 14,
    },
  };

  modBySlidesLength = (index) => {
    return mod(index, this.props.slides.length);
  };

  moveSlide = (direction) => {
    this.setState({
      index: this.modBySlidesLength(this.state.index + direction),
      goToSlide: null,
    });
  };

  clampOffsetRadius(offsetRadius) {
    const { slides } = this.props;
    const upperBound = Math.floor((slides.length - 1) / 2);

    if (offsetRadius < 0) {
      return 0;
    }
    if (offsetRadius > upperBound) {
      return upperBound;
    }

    return offsetRadius;
  }

  getPresentableSlides() {
    const { slides } = this.props;
    const { index } = this.state;
    let { offsetRadius } = this.props;
    offsetRadius = this.clampOffsetRadius(offsetRadius);
    const presentableSlides = [];

    for (let i = -offsetRadius; i < 1 + offsetRadius; i++) {
      presentableSlides.push(slides[this.modBySlidesLength(index + i)]);
    }

    return presentableSlides;
  }

  render() {
    const { animationConfig, offsetRadius, showNavigation } = this.props;

    let navigationButtons = null;
    if (showNavigation) {
      navigationButtons = (
        <NavigationButtons>
          <NavBtn onClick={() => this.moveSlide(1)}>&#8593;</NavBtn>
          <NavBtn onClick={() => this.moveSlide(-1)}>&#8595;</NavBtn>
        </NavigationButtons>
      );
    }
    return (
      <React.Fragment>
        <Wrapper>
          {this.getPresentableSlides().map((slide, presentableIndex) => (
            <Slide
              key={slide.key}
              content={slide}
              moveSlide={this.moveSlide}
              offsetRadius={this.clampOffsetRadius(offsetRadius)}
              index={presentableIndex}
              animationConfig={animationConfig}
            />
          ))}
        </Wrapper>
        {/* {navigationButtons} */}
      </React.Fragment>
    );
  }
}

export default VerticalCarousel;
