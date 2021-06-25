import React, { useContext } from 'react';
import { Button } from 'react95';

import { StoreContext } from '../../store';

const SkillsModalButton = () => {
  const [state, dispatch] = useContext(StoreContext);

  const handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'skills' });
    dispatch({ type: 'SET_SKILLS_MODAL', payload: !state.SkillsModal });
  };

  return (
    <>
      {!state.hideSkillsModalButton && (
        <Button
          onClick={handleClick}
          active={state.SkillsModal}
          className="bold"
          style={{ marginRight: 3 }}
        >
          <img
            src={require('../../assets/icons/about.png')}
            alt="skills"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          Skills
        </Button>
      )}
    </>
  );
};

export default SkillsModalButton;