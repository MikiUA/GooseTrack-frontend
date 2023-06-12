import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import Icon from 'utils/Icon/Icon';
import { EditModalValue } from './EditModalValue/EditModalValue';

import {
  StyledFeedbacksBox,
  StyledFeedbacksList,
  StyledFeedbacksItem,
  StyledFeedbacksAvatar,
  StyledFeedbacksUsername,
  StyledFeedbacksRating,
  StyledFeedbacksHeader,
  StyledFeedbacksText,
  StyledFeedbacksButtons,
  StyledButtonIcon,
  StyledFeedbackButton,
} from './FeedbackList.styled';

export const FeedbackList = ({ data, req }) => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);
  return (
    <>
      <StyledFeedbacksBox>
        <StyledFeedbacksList>
          {data.data.result.map(item => (
            <StyledFeedbacksItem key={item._id}>
              <StyledFeedbacksAvatar
                src={item.avatarUrl}
                alt={item.avatarUrl}
              />
              <div>
                <StyledFeedbacksHeader>
                  <div>
                    <StyledFeedbacksUsername>
                      {item.name}
                    </StyledFeedbacksUsername>
                    {Array.from({ length: 5 }, (_, index) => (
                      <StyledFeedbacksRating
                        key={index}
                        name={index < item.rating ? 'icon-Vector' : 'icon--'}
                      />
                    ))}
                  </div>
                  <StyledFeedbacksButtons>
                    <StyledFeedbackButton
                      type="button"
                      onClick={() => {
                        setSelectedFeedback(item);
                        handleToggle();
                      }}
                    >
                      <StyledButtonIcon
                        name="icon-pencil-01"
                        width="16"
                        height="16"
                      />
                    </StyledFeedbackButton>

                    <StyledFeedbackButton
                      type="button"
                      onClick={() => req(item._id)}
                    >
                      <StyledButtonIcon
                        name="icon-trash-04"
                        width="16"
                        height="16"
                      />
                    </StyledFeedbackButton>
                  </StyledFeedbacksButtons>
                </StyledFeedbacksHeader>
                <StyledFeedbacksText>{item.message}</StyledFeedbacksText>
              </div>
            </StyledFeedbacksItem>
          ))}
        </StyledFeedbacksList>
      </StyledFeedbacksBox>
      <Modal onClose={handleToggle} isOpen={isModalOpen}>
        {selectedFeedback && (
          <EditModalValue
            selectedFeedback={selectedFeedback}
            itemId={selectedFeedback._id}
          />
        )}
      </Modal>
    </>
  );
};
