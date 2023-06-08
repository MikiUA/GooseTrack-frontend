// AuthSection
//Description
//ReviewSlider 

import AuthLanding from '../../components/Landing/AuthLanding/AuthLanding';
import Description from '../../components/Landing/Description/Description';
import Slider from '../../components/Landing/Slider/Slider';
import { Wrapper } from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <AuthLanding />
      <Wrapper>
        <Description />
        <Slider />
      </Wrapper>
    </>
  );
};

export default MainPage;