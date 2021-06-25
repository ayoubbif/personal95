import React, { useContext } from 'react';
import { Button } from 'react95';

import { StoreContext } from '../../store';

const AboutModalButton = () => {
  const [state, dispatch] = useContext(StoreContext);

  const handleClick = () => {
    dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
    dispatch({ type: 'SET_ABOUT_MODAL', payload: !state.AboutModal });
  };

  return (
    <>
      {!state.hideAboutModalButton && (
        <Button
          onClick={handleClick}
          active={state.AboutModal}
          className="bold"
          style={{ marginRight: 3 }}
        >
          <img
            src={require('../../assets/icons/about.png')}
            alt="about"
            style={{ marginLeft: -2, marginRight: 5, width: 20 }}
          />
          About
        </Button>
      )}
    </>
  );
};

export default AboutModalButton;