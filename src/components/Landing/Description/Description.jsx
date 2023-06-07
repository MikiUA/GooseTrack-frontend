import { StyledText, StyledSubtitle, StyledItem, StyledBtnDescr, StyledNumberTitle, StyledList, StyledImg, StyledPictureDescr, WrapItemText } from './Description.styled';

const basePath = '../../../images/MainPage/';

const Description = () => {
  return (
    <StyledList>
      <StyledItem>
        <WrapItemText>
          <StyledNumberTitle>1.</StyledNumberTitle>
          <StyledBtnDescr>Calendar </StyledBtnDescr>
          <StyledSubtitle>view</StyledSubtitle>
          <StyledText>
            GooseTrack's Calendar view provides a comprehensive overview of your
            schedule, displaying all your tasks, events, and appointments in a
            visually appealing and intuitive layout.
          </StyledText>
        </WrapItemText>
        <StyledPictureDescr>
          <source
            media="(min-width: 375px)"            
            srcSet={`${basePath}calendar-mob.png 1x, ${basePath}calendar-mob@2x.png`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${basePath}calendar-tab.png 1x, ${basePath}calendar-tab@2x.png`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${basePath}calendar-desk.png 1x, ${basePath}calendar-desk@2x.png`}
          />
          <StyledImg>
            <img src={require('../../../images/MainPage/calendar-desk.png')} alt="Calendar" />
          </StyledImg>
        </StyledPictureDescr>
      </StyledItem>

      <StyledItem additionalClass={true}>
        <WrapItemText additionalClass={true}>
          <StyledNumberTitle>2.</StyledNumberTitle>
          <StyledSubtitle additionalClass={true}>sidebar</StyledSubtitle>
          <StyledText>
            GooseTrack offers easy access to your account settings, calendar,
            and filters. The "My Account" section allows you to manage your
            profile information and preferences, while the calendar provides a
            quick and convenient way to view your upcoming events and tasks.
          </StyledText>
        </WrapItemText>
        <StyledPictureDescr>
          <source
            media="(min-width: 375px)"
            srcSet={`${basePath}sidebar-mob.png 1x, ${basePath}sidebar-mob@2x.png`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${basePath}sidebar-tab.png, ${basePath}sidebar-tab@2x.png`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${basePath}sidebar-desk.png, ${basePath}sidebar-desk@2x.png`}
          />
          <StyledImg>
            <img src={require('../../../images/MainPage/sidebar-desk.png')} alt="Sidebar" />
          </StyledImg>
        </StyledPictureDescr>
      </StyledItem>
      <StyledItem>
        <WrapItemText>
          <StyledNumberTitle>3.</StyledNumberTitle>
          <StyledBtnDescr>all in</StyledBtnDescr>
          <StyledSubtitle>one</StyledSubtitle>
          <StyledText>
            GooseTrack is an all-in-one productivity tool that helps you stay on
            top of your tasks, events, and deadlines. Say goodbye to scattered
            to-do lists and hello to streamlined productivity with GooseTrack.
          </StyledText>
        </WrapItemText>
        <StyledPictureDescr>
          <source
            media="(min-width: 375px)"
            srcSet={`${basePath}all-in-mob.png, ${basePath}all-in-mob@2x.png`}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${basePath}all-in-tab.png, ${basePath}all-in-tab@2x.png`}
          />
          <source
            media="(min-width: 1440px)"
            srcSet={`${basePath}all-in-desk.png, ${basePath}all-in-desk@2x.png`}
          />
          <StyledImg>
            <img src={require('../../../images/MainPage/calendar-desk.png')} alt="One" />
          </StyledImg>
        </StyledPictureDescr>
      </StyledItem>
    </StyledList>
  );
};

export default Description;
