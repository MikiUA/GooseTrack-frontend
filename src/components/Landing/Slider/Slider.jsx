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
} from './Slider.styled';

import Olena from '../../../imagesMainPage/img/mobile/Olena2x.png';
import Olex from '../../../imagesMainPage/img/desktop/Olexdesk2x.png';
import { ReactComponent as Star } from '../../../imagesMainPage/svg/star.svg';
import { ReactComponent as LeftArrow } from '../../../imagesMainPage/svg/leftarrow.svg';
import { ReactComponent as RightArrow } from '../../../imagesMainPage/svg/rightarrow.svg';

const Slider = () => {
  return (
    <StyledSlider>
      <SliderTitle>Reviews</SliderTitle>
      <SliderList>
        <SliderItem>
          <SliderHeaderUser>
            <SliderUserPhoto src={Olena} alt="Olena Doe"></SliderUserPhoto>
            <HeaderUserWrapper>
              <SliderUserTitle>Olena Doe</SliderUserTitle>
              <SliderUserRating>
                <Star width={14} height={14} fill="#CEC9C1" />
                <Star width={14} height={14} fill="#FFAC33" />
                <Star width={14} height={14} fill="#FFAC33" />
                <Star width={14} height={14} fill="#FFAC33" />
                <Star width={14} height={14} fill="#FFAC33" />
              </SliderUserRating>
            </HeaderUserWrapper>
          </SliderHeaderUser>
          <SliderUserDescr>
            GooseTrack is impressive, the calendar view and filter options make
            it easy to stay organized and focused. Highly recommended.
          </SliderUserDescr>
        </SliderItem>

        <SliderItem additionalClass={true}>
          <SliderHeaderUser>
            <SliderUserPhoto
              src={Olex}
              alt="Alexander Hubbard "
            ></SliderUserPhoto>
            <HeaderUserWrapper>
              <SliderUserTitle>Alexander Hubbard</SliderUserTitle>
              <SliderUserRating>
                <Star width={14} height={14} fill="#CEC9C1" />
                <Star width={14} height={14} fill="#FFAC33" />
                <Star width={14} height={14} fill="#FFAC33" />
                <Star width={14} height={14} fill="#FFAC33" />
                <Star width={14} height={14} fill="#FFAC33" />
              </SliderUserRating>
            </HeaderUserWrapper>
          </SliderHeaderUser>
          <SliderUserDescr>
            GooseTrack is impressive, the calendar view and filter options make
            it easy to stay organized and focused. Highly recommended.
          </SliderUserDescr>
        </SliderItem>
      </SliderList>

      <SliderArWrap>
        <LeftArrow width={47} height={6} style={{ cursor: 'pointer' }} />
        <RightArrow width={47} height={6} style={{ cursor: 'pointer' }} />
      </SliderArWrap>
    </StyledSlider>
  );
};

export default Slider;
