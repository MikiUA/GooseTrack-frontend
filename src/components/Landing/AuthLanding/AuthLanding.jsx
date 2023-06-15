import { CustomIcon, 
  StyledLink, 
  StyledHeader, 
  StyledTitle, 
  StyledAuthButton, 
  StyledPicture, 
  StyledImgAuthNav, 
  AuthBtnWrapper, 
  Span,
  ImgLogo
} from './AuthLanding.styled';

const basePath = '../../../images/logoGoose/';

const AuthLanding = () => {   

    return (
    <StyledHeader>
      <StyledPicture>
        <source
          media="(min-width: 375px)"
          srcSet={`${basePath}goose1x.png 1x, ${basePath}goose2x.png 2x`}
          
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${basePath}goosetablet1x.png 1x, ${basePath}goosetablet2x.png 2x`}
          
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${basePath}goosedesk1x.png 1x, ${basePath}goosedesk2x.png 2x`}
          
        />
        <StyledImgAuthNav>
           <ImgLogo src={require('../../../images/logoGoose/goosedesk2x.png')} alt="Logo goose" /> 
         
        </StyledImgAuthNav>
      </StyledPicture>
      <StyledTitle>G<Span>oo</Span>seTrack</StyledTitle>
      <AuthBtnWrapper >
        <StyledAuthButton to="login">
          Log in        
          <CustomIcon className='login-span' name='icon-log-in-01' width='16' height='16' />
        </StyledAuthButton>
        <StyledLink to="register">Sign up</StyledLink>
      </AuthBtnWrapper>
    </StyledHeader>
  );
};

export default AuthLanding;
