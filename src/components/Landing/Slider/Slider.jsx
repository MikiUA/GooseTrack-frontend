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
import { useGetAllFeedbacksQuery } from 'API/feedbackApi';
import Icon from '../../../utils/Icon/Icon';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isArrowClicked, setArrowClicked] = useState(false);

  const { data, isLoading } = useGetAllFeedbacksQuery();

const handlePrevSlide = () => {
    const totalSlides = data.data.result.length;
    if (currentSlide === 0) {
      setCurrentSlide(totalSlides - 2);
    } else if (currentSlide === 1) {
      setCurrentSlide(totalSlides - 1);
    } else {
      setCurrentSlide(prevSlide => prevSlide - 2);
    }
  };

const handleNextSlide = () => {
    const totalSlides = data.data.result.length;
    if (currentSlide === totalSlides - 2) {
      setCurrentSlide(0);
    } else if (currentSlide === totalSlides - 1) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(prevSlide => prevSlide + 2);
    }
  };

  const handleArrowClick = () => {
    setArrowClicked(true);

    setTimeout(() => {
      setArrowClicked(false);
    }, 500);
  };

  return (
    <>
      {!isLoading && (
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
                  dataLength={data.data.result.length}
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
                            name={
                              index < item.rating ? 'icon-Vector' : 'icon--'
                            }
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
      )}
    </>
  );
};

export default Slider;
