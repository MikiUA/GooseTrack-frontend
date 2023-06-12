import Modal from 'components/Modal/Modal';
import { useState } from 'react';
import Icon from 'utils/Icon/Icon';
import { EditModalValue } from './EditModalValue/EditModalValue';

export const FeedbackList = ({ data, req }) => {
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  const [isModalOpen, setIsOpenModal] = useState(false);
  const handleToggle = () => setIsOpenModal(pS => !pS);
  return (
    <>
      <div style={{ overflowY: 'auto', maxHeight: '200px' }}>
        <ul style={{ display: 'flex', flexDirection: 'column' }}>
          {data.data.result.map(item => (
            <li key={item._id}>
              <div>
                <div>
                  <img
                    src={item.avatarUrl}
                    alt={item.avatarUrl}
                    width="20px"
                    height="20px"
                  />
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedFeedback(item);
                        handleToggle();
                      }}
                    >
                      Edit
                    </button>
                    <button type="button" onClick={() => req(item._id)}>
                      Delete
                    </button>
                  </div>
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <div>
                    {Array.from({ length: 5 }, (_, index) => (
                      <Icon
                        key={index}
                        width={14}
                        height={14}
                        name={index < item.rating ? 'icon-Vector' : 'icon--'}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p>{item.message}</p>
            </li>
          ))}
        </ul>
      </div>
      <Modal onClose={handleToggle} isOpen={isModalOpen}>
        {selectedFeedback && (
          <EditModalValue selectedFeedback={selectedFeedback} />
        )}
      </Modal>
    </>
  );
};
