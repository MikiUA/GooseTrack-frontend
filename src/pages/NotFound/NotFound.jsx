import {
  //CustomIcon,
  StyledHeader,
  StyledTitle,
  StyledAuthButton,
  StyledPicture,
  StyledImgNotfound,
  AuthBtnWrapper,
  TitleWrapper,
  Span,
  StyledTitleSec,
  ImgLogo
} from './NotFound.styled';

const basePath = '../../images/logoGoose/';

const NotFound = () => {
  return (
    <StyledHeader>
      <StyledPicture>
        <source
          media="(min-width: 375px)"
          srcSet={`${basePath}goose1x.png 1x, ${basePath}goose2x.png 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${basePath}goosetablet1x.png 1x, ${basePath}goosetablet1x.png 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${basePath}goosedesk1x.png 1x, ${basePath}goosetablet2x 2x`}
        />

        <StyledImgNotfound>
          <ImgLogo
            src={require('../../images/logoGoose/goosetablet2x.png')}
            alt="Logo goose, page not found"
          />
        </StyledImgNotfound>
      </StyledPicture>
      <TitleWrapper>
        <StyledTitle>
          <Span>Oo</Span>ps...
        </StyledTitle>
        <StyledTitleSec>page not found</StyledTitleSec>
      </TitleWrapper>
      <AuthBtnWrapper> 
        <StyledAuthButton to="/">
          Go back
          {/* <CustomIcon name="icon-log-in-01" width="16" height="16" /> */}
        </StyledAuthButton>
       </AuthBtnWrapper> 
    </StyledHeader>
  );
};


export default NotFound;
