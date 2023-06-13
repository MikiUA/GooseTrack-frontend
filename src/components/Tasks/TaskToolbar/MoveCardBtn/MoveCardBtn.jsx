import { useUpdateTaskPropertiesByIdMutation } from 'API/taskUtils';
import {
  BtnWrap,
  BtnStyled,
  Button,
  ChouseCat,
  IconStyled,
  InputStyled,
  LabelStyled,
  BtnStyledText,
} from './MoveCardBtn.styled';
import { useState, useRef, useEffect } from 'react';

const MoveCardBtn = ({ id, category }) => {
  const [updateTaskPropertiesById] = useUpdateTaskPropertiesByIdMutation();
  const [selectedOption, setSelectedOption] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const categoryTask = ['to-do', 'in-progress', 'done'];

  const handleClick = () => {
    setIsClicked(prevIsClicked => !prevIsClicked);
    setIsVisible(false);
  };

  const handleOptionChange = e => {
    setSelectedOption(e.target.value);
  };

  const handleUpdate = async (taskId, categories) => {
    const updatedData = {
      category: categories,
    };
    await updateTaskPropertiesById({
      id: taskId,
      body: updatedData,
    });
  };

  const chouseCatRef = useRef(null);
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

        <ChouseCat
          ref={chouseCatRef}
          style={isClicked ? { display: 'flex' } : { display: 'none' }}
        >
          {categoryTask.map(categories => {
            return (
              categories !== category && (
                <div key={Math.random()}>
                  <LabelStyled>
                    <Button onClick={() => handleUpdate(id, categories)}>
                      <IconStyled
                        name="icon-arrow-circle-broken-right"
                        width="16"
                        height="16"
                      />
                      <BtnStyledText> {categories}</BtnStyledText>
                    </Button>
                  </LabelStyled>
                </div>
              )
            );
          })}
        </ChouseCat>
      </BtnWrap>
    </>
  );
};

export default MoveCardBtn;
