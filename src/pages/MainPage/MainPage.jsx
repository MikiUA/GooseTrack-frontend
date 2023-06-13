import AuthLanding from '../../components/Landing/AuthLanding/AuthLanding';
import Description from '../../components/Landing/Description/Description';
import MySlider from '../../components/Landing/Slider/Slider';
import { Wrapper } from './MainPage.styled';

const MainPage = () => {
  return (
    <>
      <AuthLanding />
      <Wrapper>
        <Description />
        <MySlider />
      </Wrapper>
    </>
  );
};

export default MainPage;
