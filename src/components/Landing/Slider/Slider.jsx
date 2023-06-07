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
//import { ReactComponent as Star } from '../../../imagesMainPage/svg/star.svg';
// import { ReactComponent as LeftArrow } from '../../../imagesMainPage/svg/leftarrow.svg';
// import { ReactComponent as RightArrow } from '../../../imagesMainPage/svg/rightarrow.svg';
import Icon from '../../../utils/Icon/Icon'



const Slider = () => {

  const userRatings = ['icon--', 'icon-Vector', 'icon-Vector', 'icon-Vector', 'icon-Vector'];
  
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
              {userRatings.map((iconName, index) => (
            <Icon key={index} name={iconName} width="14" height="14" />
          ))}
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
                <Icon name='icon--' width='14' height='14'  />
                <Icon name='icon-Vector' width='14' height='14'  />
                <Icon name='icon-Vector' width='14' height='14'  />
                <Icon name='icon-Vector' width='14' height='14'  />
                <Icon name='icon-Vector' width='14' height='14'  />
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
        <Icon name='icon-Vector-1' width='47' height='46'  />
        <Icon name='icon-Vector-2' width='47' height='46'  />
      </SliderArWrap>
    </StyledSlider>
  );
};

export default Slider;
