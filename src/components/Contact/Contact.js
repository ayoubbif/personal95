import React, {useContext } from 'react';
import { WindowContent, Window, WindowHeader, Button, Bar, List, ListItem } from 'react95';

import Draggable from 'react-draggable';
import './Contact.css';
import { StoreContext } from '../../store';

import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';


function Contact() {
    //STORE
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({type: 'SET_CONTACT_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_CONTACT_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'contact' });
      };
    return (
        <Draggable>
            <Window resizable style={{
              width: "fit-content",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "60%",
              top: "10%",
              overflowY: "auto",
              display: state.ContactModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
       
          
            <WindowHeader className='window-header'>
                <span>contact.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
                <List inline>
                    <ListItem>
                        <AiFillGithub 
                        style={{height:"50px", width:"50px"}}
                        onClick={()=> window.open("https://github.com/ayoubbif", "_blank")}
                        />
                    </ListItem>
                    <Bar size={30} />
                    <ListItem>
                        <AiFillLinkedin 
                        style={{height:"50px", width:"50px"}}
                        onClick={()=> window.open("https://www.linkedin.com/in/ayoub-biferdou/", "_blank")}
                        />
                    </ListItem>
                    <Bar size={30} />
                    <ListItem>
                        <AiFillTwitterCircle 
                        style={{height:"50px", width:"50px"}}
                        onClick={()=> window.open("https://twitter.com/Pwn___ed", "_blank")}/>
                    </ListItem>
                    
                </List>
            </WindowContent>
            </Window>
        </Draggable>
    )
}

export default Contact
