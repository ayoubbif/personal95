import React, { useState, useContext, Fragment, useEffect } from 'react';
import{
    Button,
    List,
    ListItem,
    Cutout,
  } from 'react95'; 
import Moment from 'react-moment';
import 'moment-timezone';
import './NavBar.css';

import windowsIcon from '../../assets/icons/windows.png';
import aboutIcon from '../../assets/icons/about.png';
import userIcon from '../../assets/icons/userIcon.png';
import skillsIcon from '../../assets/icons/skills.png';
import globeIcon from '../../assets/icons/globe.png';
import cryptoIcon from '../../assets/icons/crip.png';
import terminalIcon from '../../assets/icons/terminal.png';
import jennyIcon from '../../assets/icons/trash.png';

import { StoreContext } from '../../store';

const NavBar = () => {
    const [state, dispatch] = useContext(StoreContext);
    const [startupSound, setStartupSound] = useState(null);

    useEffect(() => {
        const ss = localStorage.getItem('startup_sound');
        if (ss === null) {
          localStorage.setItem('startup_sound', true);
          setStartupSound(true);
        } else {
          setStartupSound(ss === 'true');
        }
      }, []);
    
    const _handleClick = () => {
        dispatch({ type: 'SET_MENU', payload: !state.menu });
    };

    const _handleClose = () => {
        dispatch({ type: 'SET_MENU', payload: false });
    };
    const _handleStartupSound = () => {
        const ss = localStorage.getItem('startup_sound');
        if (ss === 'true') {
          localStorage.setItem('startup_sound', false);
          setStartupSound(false);
        } else {
          localStorage.setItem('startup_sound', true);
          setStartupSound(true);
        }
      };

    const _handleListItemClick = name => {
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


        return (
            <Fragment>
                        <div style={{position: 'relative', display: 'inline-block'}}>
                           
                            <Button primary
                                    size='lg'
                                    onClick={_handleClick}
                                    active={state.menu} 
                                    style={{ fontWeight: 'bold' }}>
                                <img src={windowsIcon} alt='windows' style={{ height: '20px', marginRight: 4 }}/>
                                <span>Start</span>
                            </Button>
                            {state.menu && (
                                <List 
                                style={{
                                    position: 'absolute',
                                    left: '0',
                                    bottom: '100%',
                                    width: '250px',
                                  }}
                                onClick={_handleClose}>
                                    <ListItem onClick={() => _handleListItemClick('about')}>
                                        <img src={aboutIcon} alt='about' style={{ height: "24px", width: "24px" }} />
                                        <span style={{ paddingLeft: "5px" }}>
                                            About
                                        </span> 
                                    </ListItem>
                                    <ListItem onClick={() => _handleListItemClick('skills')}>
                                        <img src={skillsIcon} alt='skills' style={{ height: "24px", width: "24px" }} />
                                        <span style={{ paddingLeft: "5px" }}>
                                            Skills
                                        </span> 
                                    </ListItem>
                                    <ListItem onClick={() => _handleListItemClick('profile')}>
                                        <img src={userIcon} alt='profile' style={{ height: "24px", width: "24px" }} />
                                        <span style={{ paddingLeft: "5px" }}>
                                            Profile
                                        </span> 
                                    </ListItem>
                                    <ListItem onClick={() => _handleListItemClick('globe')}>
                                        <img src={globeIcon} alt='globe' style={{ height: "24px", width: "24px" }} />
                                        <span style={{ paddingLeft: "5px" }}>
                                            Globe
                                        </span> 
                                    </ListItem>
                                    <ListItem onClick={() => _handleListItemClick('crypto')}>
                                        <img src={cryptoIcon} alt='crypto' style={{ height: "24px", width: "24px" }} />
                                        <span style={{ paddingLeft: "5px" }}>
                                            Crypto
                                        </span> 
                                    </ListItem>
                                    <ListItem onClick={() => _handleListItemClick('jenny')}>
                                        <img src={jennyIcon} alt='jenny' style={{ height: "24px", width: "24px" }} />
                                        <span style={{ paddingLeft: "5px" }}>
                                            Jenny
                                        </span> 
                                    </ListItem>
                                    <ListItem onClick={() => _handleListItemClick('terminal')}>
                                        <img src={terminalIcon} alt='terminal' style={{ height: "24px", width: "24px" }} />
                                        <span style={{ paddingLeft: "5px" }}>
                                            Terminal
                                        </span> 
                                    </ListItem>

                                </List>
                                )
                            }
                
                        </div>
                        <Cutout style={{ width: '150px', height: '40px' }}>
                            <Moment format="hh:mm:ss" style={{paddingLeft: '25px', display: 'inline-block'}}></Moment>
                        </Cutout>
            </Fragment>
            
        )
    }

export default NavBar;