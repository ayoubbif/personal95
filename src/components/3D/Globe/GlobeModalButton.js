import React, { useContext } from 'react';
import { Button } from 'react95';

import { StoreContext } from '../../../store';

const GlobeModalButton = () => {
  const [state, dispatch] = useContext(StoreContext);

  const handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'globe' });
    dispatch({ type: 'SET_GLOBE_MODAL', payload: !state.GlobeModal });
  };

  return (
    <>
      {!state.hideSkillsModalButton && (
        <Button
          onClick={handleClick}
          active={state.GlobeModal}
          className="bold"
          style={{ marginRight: 3 }}
        >
          <img
            src={require('../../../assets/icons/about.png')}
            alt="globe"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          Globe
        </Button>
      )}
    </>
  );
};

export default GlobeModalButton;