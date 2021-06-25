import { useContext, useRef, useEffect } from 'react';
import { WindowContent, Window, WindowHeader, Cutout, Button } from 'react95';
import UseOnEnter from './UseOnEnter';
import MapConsoleOutput from './MapConsoleOutput'
import Draggable from 'react-draggable';
import './Terminal.css';
import { StoreContext } from '../../store';



const Terminal = () => {
    const [state, dispatch] = useContext(StoreContext);
    const _handleApp = name => {
        switch (name) {
            case 'skills':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'skills' });
                dispatch ({ type: 'SET_SKILLS_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_SKILLS_MODAL', payload: false });
                break;
            case 'about':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
                dispatch ({ type: 'SET_ABOUT_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_ABOUT_MODAL', payload: false });
                break;
            case 'profile':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'profile' });
                dispatch ({ type: 'SET_PROFILE_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_PROFILE_MODAL', payload: false });
                break;
            case 'globe':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'globe' });
                dispatch ({ type: 'SET_GLOBE_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_GLOBE_MODAL', payload: false });
                break;
            case 'crypto':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'crypto' });
                dispatch ({ type: 'SET_CRYPTO_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_CRYPTO_MODAL', payload: false });
                break;
            case 'jenny':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'jenny' });
                dispatch ({ type: 'SET_JENNY_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_JENNY_MODAL', payload: false });
                break;
            case 'terminal':
                dispatch ({ type: 'SET_ACTIVE_MODAL', payload: 'terminal' });
                dispatch ({ type: 'SET_TERMINAL_MODAL', payload: true });
                dispatch ({ type: 'SET_HIDE_TERMINAL_MODAL', payload: false });
                break;    
            default:
                return null;
        }
    };

    const _handleClose = () => {
        dispatch({type: 'SET_TERMINAL_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_TERMINAL_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'terminal' });
    };
 
    const _closeAbout = () => {
        dispatch({type: 'SET_ABOUT_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: true});
    };
    const _closeProfile = () => {
        dispatch({type: 'SET_PROFILE_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_PROFILE_MODAL_BUTTON', payload: true});
    };
    const _closeSkills = () => {
        dispatch({type: 'SET_SKILLS_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_SKILLS_MODAL_BUTTON', payload: true});
    };
    const _closeCrypto = () => {
        dispatch({type: 'SET_CRYPTO_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_CRYPTO_MODAL_BUTTON', payload: true});
    };
    const _closeJenny = () => {
        dispatch({type: 'SET_JENNY_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_JENNY_MODAL_BUTTON', payload: true});
    };
    const _closeGlobe = () => {
        dispatch({type: 'SET_GLOBE_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_GLOBE_MODAL_BUTTON', payload: true});
    };

    const inputText = useRef();
    const [consoleOutput, commandValues, onEnter] = UseOnEnter();

    useEffect(() => {
        if(_handleClick) {
            inputText.current.value = '';
            inputText.current.focus();
        }
    });
    useEffect(() => {
        console.log(commandValues);

        if(commandValues === 'open about') {
            _handleApp('about');
        }
        if(commandValues === 'close about') {
            _closeAbout();
        }
        if(commandValues === 'open profile') {
            _handleApp('profile');
        }
        if(commandValues === 'close profile') {
            _closeProfile();
        }
        if(commandValues === 'open skills') {
            _handleApp('skills');
        }
        if(commandValues === 'close skills') {
            _closeSkills();
        }
        if(commandValues === 'open crypto') {
            _handleApp('crypto');
        }
        if(commandValues === 'close crypto') {
            _closeCrypto();
        }
        if(commandValues === 'open jenny') {
            _handleApp('jenny');
        }
        if(commandValues === 'close jenny') {
            _closeJenny();
        }
        if(commandValues === 'open globe') {
            _handleApp('globe');
        }
        if(commandValues === 'close globe') {
            _closeGlobe();
        }
        if(commandValues === 'quit') {
            _handleClose();
        }

    }, [commandValues])


    return(
        <Draggable>
            <Window style={{
              width: "40%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "55%",
              top: "10%",
              overflowY: "auto",
              display: state.TerminalModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
       
          
            <WindowHeader className='window-header'>
                <span>MS-DOS</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
                <Cutout style={{width: 'fit-content', height: '400px', backgroundColor:'black'}}>
                <div style={{ color: 'white', fontSize: '16px' }} className="input-prompt">
								<div  style={{ paddingBottom: '20px' }}>
									Retro Personal Website | [Beta Version]
                                    <br/>
                                    (C) Copyright 2021
								</div>
								<MapConsoleOutput consoleOutput={consoleOutput} />
								<span>Retro Personal Website:\{' >'} </span>
								<input
									type="text"
									ref={inputText}
									style={{
										border: 'none',
										backgroundColor: 'black',
										color: 'white',
										outline: 'none',
										fontSize: '16px',
										width: '70%',
									}}
									onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
								/>
				</div>
                </Cutout>
            </WindowContent>
            </Window>
        </Draggable>
    );
};

export default Terminal;