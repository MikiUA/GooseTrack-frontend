import goose1x from '../../../imagesMainPage/img/mobile/goose1x.png';
import goose2x from '../../../imagesMainPage/img/mobile/goose2x.png';
import goosetablet1x from '../../../imagesMainPage/img/tablet/goosetablet1x.png';
import goosetablet2x from '../../../imagesMainPage/img/tablet/goosetablet2x.png';
import goosedesk1x from '../../../imagesMainPage/img/desktop/goosedesk1x.png';
import goosedesk2x from '../../../imagesMainPage/img/desktop/goosedesk2x.png';

import {
  StyledLink,
  StyledHeader,
  StyledTitle,
  StyledAuthButton,
  StyledAuthSpan,
  StyledPicture,
  StyledImgAuthNav,
  AuthBtnWrapper,
  Span,
} from './AuthLanding.styled';

import login from '../../../imagesMainPage/svg/login.svg';

const AuthLanding = () => {
  return (
    <StyledHeader>
      <StyledPicture>
        <source
          media="(min-width: 375px)"
          srcSet={`${goose1x} 1x, ${goose2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${goosetablet1x} 1x, ${goosetablet2x} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${goosedesk1x} 1x, ${goosedesk2x} 2x`}
        />
        <StyledImgAuthNav>
          <img src={goose1x} alt="Logo goose" />
        </StyledImgAuthNav>
      </StyledPicture>
      <StyledTitle>G<Span>oo</Span>seTrack</StyledTitle>
      <AuthBtnWrapper>
        <StyledAuthButton to="login">
          Log in
          <StyledAuthSpan src={login} alt="Login" />
        </StyledAuthButton>
        <StyledLink to="register">Sign up</StyledLink>
      </AuthBtnWrapper>
    </StyledHeader>
  );
};

export default AuthLanding;
