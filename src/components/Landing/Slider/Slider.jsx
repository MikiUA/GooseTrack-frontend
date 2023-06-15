import React, { useState, useEffect } from 'react';

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
  TextDiv
} from './Slider.styled';
import { useGetAllFeedbacksQuery } from 'API/feedbackApi';
import Icon from '../../../utils/Icon/Icon';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isArrowClicked, setArrowClicked] = useState(false);

  const { data, isLoading } = useGetAllFeedbacksQuery();

  const handlePrevSlide = () => {
    const totalSlides = data.data.result.length;
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? totalSlides - 2 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    const totalSlides = data.data.result.length;
    setCurrentSlide(prevSlide =>
      prevSlide === totalSlides - 2 ? 0 : prevSlide + 1
    );
  };

  const handleArrowClick = () => {
    setArrowClicked(true);

    setTimeout(() => {
      setArrowClicked(false);
    }, 500);
  };

  useEffect(() => {
    if (!isArrowClicked && !isLoading) {
      const totalSlides = data.data.result.length;
      const timer = setInterval(() => {
        setCurrentSlide(prevSlide =>
          prevSlide === totalSlides - 2 ? 0 : prevSlide + 1
        );
      }, 5000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [currentSlide, isArrowClicked, isLoading, data]);

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
                  <TextDiv className='text'>                               
                  <SliderUserDescr>{item.message}</SliderUserDescr>   
                  </TextDiv>                                  
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
