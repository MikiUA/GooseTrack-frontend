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
} from './Slider.styled';

import Icon from '../../../utils/Icon/Icon';

const reviews = [
  {
    id: '1',
    name: 'Olena Doe 11',
    photo: 'https://avatars.githubusercontent.com/u/106928450?s=40&v=4',
    rating: '4',
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: '2',
    name: 'Alexander Hubbard 11',
    photo: 'https://avatars.githubusercontent.com/u/106928450?s=40&v=4',
    rating: '4',
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: '3',
    name: 'Olena Doe 22',
    photo: 'https://avatars.githubusercontent.com/u/106928450?s=40&v=4',
    rating: '3',
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
  {
    id: '4',
    name: 'Olena Doe 33',
    photo: 'https://avatars.githubusercontent.com/u/106928450?s=40&v=4',
    rating: '5',
    description:
      'GooseTrack is impressive, the calendar view and filter options make it easy to stay organized and focused. Highly recommended.',
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isArrowClicked, setArrowClicked] = useState(false);

  const handlePrevSlide = () => {
    setCurrentSlide(prevSlide =>
      prevSlide === 0 ? reviews.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide(prevSlide => (prevSlide + 1) % reviews.length);
  };

  const handleArrowClick = () => {
    setArrowClicked(true);

    // Через некоторое время сбросить состояние isArrowClicked обратно
    setTimeout(() => {
      setArrowClicked(false);
    }, 500);
  };
  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // const allReviews = useSelector(selectAllReviews);
  // const reviews = allReviews.slice(0, 10).reverse();

  return (
    <StyledSlider>
      <SliderTitle>Reviews</SliderTitle>
      <SliderContainer>
        <SliderList>
          {reviews.map((review, index) => (
            <SliderItem
              key={index}
              index={index}
              currentSlide={currentSlide}
              isArrowClicked={isArrowClicked}
            >
              <SliderHeaderUser>
                <SliderUserPhoto src={review.photo} alt={review.name} />
                <HeaderUserWrapper>
                  <SliderUserTitle>{review.name}</SliderUserTitle>
                  <SliderUserRating>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Icon
                        key={index}
                        width={14}
                        height={14}
                        name={index < review.rating ? 'icon-Vector' : 'icon--'}
                      />
                    ))}
                  </SliderUserRating>
                </HeaderUserWrapper>
              </SliderHeaderUser>
              <SliderUserDescr>{review.description}</SliderUserDescr>
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
