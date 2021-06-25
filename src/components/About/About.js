import React, { useContext } from 'react';
import { WindowContent, Window, WindowHeader, Button, Tab, Tabs, TabBody, Anchor } from 'react95';

import Draggable from 'react-draggable';
import './About.css';
import { StoreContext } from '../../store';



const About = () => {
    const [tabstate, settabState] = React.useState({
        activeTab: 0,
      });
    const handleChange = (e, value) => settabState({ activeTab: value });
    const { activeTab } = tabstate;
    
    //STORE
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({type: 'SET_ABOUT_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_ABOUT_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'about' });
      };

    return(
        <Draggable>
            <Window resizable style={{
              width: "35%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "60%",
              top: "10%",
              overflowY: "auto",
              display: state.AboutModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
       
          
            <WindowHeader className='window-header'>
                <span>about.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
                <Tabs value={activeTab} onChange={handleChange}>
                    <Tab value={0}>Why?</Tab>
                    <Tab value={1}>How?</Tab>
                </Tabs>
                    <TabBody style={{ height: 'fit-content', width: 'fit-content' }}>
                    {activeTab === 0 && (
                    <div>
                        <p style={{fontSize: '1.5rem'}}>
                            I choose to make my website this way because I wanted to make something special and different.
                        </p>
                        <br/>
                        <p style={{fontWeight: 'bold', color:'#a8240a'}}>
                            The website is still under construction, I promise to add awesome 3D games in the future!
                        </p>
                    </div>
                    )}
                    {activeTab === 1 && (
                    <div>
                        <p style={{fontSize: '1.3rem'}}>
                            This website is made with love, passion and the following technologies:
                        </p>
                        <ul>
                            <li>
                            <Anchor href='https://reactjs.org/'>
                                React
                            </Anchor>
                            </li>
                            <li>
                            <Anchor href='https://github.com/arturbien/React95'>
                                React95
                            </Anchor>
                            </li>
                            <li>      
                            <Anchor href='https://threejs.org/'>
                                Three.js
                            </Anchor>
                            </li>
                        </ul>
                    </div>
                    )}
                    </TabBody>
            </WindowContent>
            </Window>
        </Draggable>
    );
};

export default About;