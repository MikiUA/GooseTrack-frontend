import { useUpdateTaskPropertiesByIdMutation } from 'API/taskUtils';
import {
  BtnWrap,
  BtnStyled,
  Button,
  Wrapper,
  IconStyled,
  LabelStyled,
  BtnStyledText,
  BtnMoveWrap,
} from './MoveCardBtn.styled';
import { useState, useRef, useEffect } from 'react';

const MoveCardBtn = ({ id, category }) => {
  const [updateTaskPropertiesById] = useUpdateTaskPropertiesByIdMutation();

  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const categoryTask = ['to-do', 'in-progress', 'done'];

  const handleClick = () => {
    setIsClicked(prevIsClicked => !prevIsClicked);
    setIsVisible(false);
  };

  const handleUpdate = async (taskId, categories) => {
    try {
      const updatedData = {
        category: categories,
      };
      await updateTaskPropertiesById({
        id: taskId,
        body: updatedData,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const wrapperRef = useRef(null);
  const btnWrapRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = e => {
      if (btnWrapRef.current && !btnWrapRef.current.contains(e.target)) {
        setIsClicked(false);
        setIsVisible(true);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <BtnWrap ref={btnWrapRef}>
        {isVisible && (
          <BtnStyled
            type="button"
            onClick={() => {
              handleClick();
            }}
          >
            <IconStyled
              name="icon-arrow-circle-broken-right"
              width="16"
              height="16"
            />
          </BtnStyled>
        )}

        <Wrapper
          ref={wrapperRef}
          style={isClicked ? { display: 'flex' } : { display: 'none' }}
        >
          {categoryTask.map(categories => {
            return (
              categories !== category && (
                <BtnMoveWrap key={Math.random()}>
                  <LabelStyled>
                    <Button onClick={() => handleUpdate(id, categories)}>
                      <BtnStyledText> {categories}</BtnStyledText>
                      <IconStyled
                        name="icon-arrow-circle-broken-right"
                        width="16"
                        height="16"
                      />
                    </Button>
                  </LabelStyled>
                </BtnMoveWrap>
              )
            );
          })}
        </Wrapper>
      </BtnWrap>
    </>
  );
};

export default MoveCardBtn;
