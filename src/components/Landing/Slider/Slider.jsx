import React, { useState } from 'react';

import {
  SliderTitle,
  StyledSlider,
  SliderList,
  SliderItem,
  SliderHeaderUser,
  SliderUserPhoto,
  HeaderUserWrapper,
  SliderUserTitle,
  SliderUserRating,
  SliderUserDescr,
  SliderArWrap,
  BtnArrow,
  IconArrow,
  SliderContainer,
} from './Slider.styled';

import Icon from '../../../utils/Icon/Icon';


const Slider = ({data}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isArrowClicked, setArrowClicked] = useState(false);

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? data.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % data.length);
  };

  const handleArrowClick = () => {
    setArrowClicked(true);

    
    setTimeout(() => {
      setArrowClicked(false);
    }, 500);
  };

  
 
  return (
    <StyledSlider>
      <SliderTitle>Reviews</SliderTitle>
      <SliderContainer>
        <SliderList>
          {data.data.result.map((item, index) => (
            <SliderItem
              key={item._id}
              index={index}
              currentSlide={currentSlide}  
              isArrowClicked={isArrowClicked}            
            >
              <SliderHeaderUser>
                <SliderUserPhoto src={item.avatarUrl} alt={item.name} />
                <HeaderUserWrapper>
                  <SliderUserTitle>{item.name}</SliderUserTitle>
                  <SliderUserRating>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Icon
                        key={index}
                        width={14}
                        height={14}
                        name={index < item.rating ? 'icon-Vector' : 'icon--'}
                      />
                    ))}
                  </SliderUserRating>
                </HeaderUserWrapper>
              </SliderHeaderUser>
              <SliderUserDescr>{item.message}</SliderUserDescr>
            </SliderItem>
          ))}
        </SliderList>
      </SliderContainer>
      <SliderArWrap onClick={handleArrowClick}>
        <BtnArrow className="slide-previous" onClick={handlePrevSlide}>
          <IconArrow
            name="icon-Vector-1"
            width="47"
            height="46"
            className="icon-arrow"
          />
        </BtnArrow>
        <BtnArrow className="slide-next" onClick={handleNextSlide}>
          <IconArrow
            name="icon-Vector-2"
            width="47"
            height="46"
            className="icon-arrow"
          />
        </BtnArrow>
      </SliderArWrap>
    </StyledSlider>
  );
};

export default Slider;
