import {
  CustomIcon,
  StyledHeader,
  StyledTitle,
  StyledAuthButton,
  StyledPicture,
  StyledImgAuthNav,
  AuthBtnWrapper,
  TitleWrapper,
  Span,
  StyledTitleSec,
} from './NotFound.styled';

const basePath = '../../images/logoGoose/';

const NotFound = () => {
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
          <img
            src={require('../../images/logoGoose/logo-GOOSE-desk@2x.png')}
            alt="Logo goose, page not found"
          />
        </StyledImgAuthNav>
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
          <CustomIcon name="icon-log-in-01" width="16" height="16" />
        </StyledAuthButton>
      </AuthBtnWrapper>
    </StyledHeader>
  );
};

export default NotFound;
