import { useGetAllFeedbacksQuery } from 'API/feedbackApi';
import AuthLanding from '../../components/Landing/AuthLanding/AuthLanding';
import Description from '../../components/Landing/Description/Description';
import Slider from '../../components/Landing/Slider/Slider';
import { Wrapper } from './MainPage.styled';

const MainPage = () => {
  const { data } = useGetAllFeedbacksQuery();

  if (!data) {
    return <h2>Loading</h2>;
  }

  console.log(data);
  return (
    <>
      <AuthLanding />
      <Wrapper>
        <Description />
        <Slider data={data} />
      </Wrapper>
    </>
  );
};

export default MainPage;