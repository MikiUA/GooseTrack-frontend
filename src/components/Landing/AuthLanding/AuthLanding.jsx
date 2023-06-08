import { StyledLink, StyledHeader, StyledTitle, StyledAuthButton, StyledPicture, StyledImgAuthNav, AuthBtnWrapper, Span } from './AuthLanding.styled';

import Icon from '../../../utils/Icon/Icon'

const basePath = '../../../images/logoGoose/';

const AuthLanding = () => {   

    return (
    <StyledHeader>
      <StyledPicture>
        <source
          media="(min-width: 375px)"
          srcSet={`${basePath}logoGOOSE-mob.png 1x, ${basePath}logoGOOSEmob@2x.png 2x`}
          
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${basePath}logo-GOOSE-tab.png 1x, ${basePath}logo-GOOSE-tab@2x.png 2x`}
          
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${basePath}logo-GOOSE-desk.png 1x, ${basePath}logo-GOOSE-desk@2x.png 2x`}
          
        />
        <StyledImgAuthNav>
           <img src={require('../../../images/logoGoose/logo-GOOSE-desk.png')} alt="Logo goose" /> 
         
        </StyledImgAuthNav>
      </StyledPicture>
      <StyledTitle>G<Span>oo</Span>seTrack</StyledTitle>
      <AuthBtnWrapper>
        <StyledAuthButton to="login">
          Log in        
          <Icon name='icon-log-in-01' width='16' height='16' />
        </StyledAuthButton>
        <StyledLink to="register">Sign up</StyledLink>
      </AuthBtnWrapper>
    </StyledHeader>
  );
};

export default AuthLanding;
