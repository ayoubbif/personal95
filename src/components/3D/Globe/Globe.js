import React, { useContext } from 'react';
import { WindowContent, Window, WindowHeader, Cutout, Button } from 'react95';

import Draggable from 'react-draggable';
import './Globe.css';

import { StoreContext } from '../../../store';
import World from './World';

const Globe = () => {
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({type: 'SET_GLOBE_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_GLOBE_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'globe' });
      };

    return(
        <Draggable>
            <Window style={{
              width: "50%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "5%",
              top: "10%",
              overflowY: "auto",
              display: state.GlobeModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
       
          
            <WindowHeader className='window-header'>
                <span>globe.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
                <Cutout style={{width: 'fit-content', height: '420px'}}>
                    <World/>
                </Cutout>
            </WindowContent>
            </Window>
        </Draggable>

    );
};

export default Globe;