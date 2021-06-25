import React, { useContext } from 'react';
import {Button, Cutout, Fieldset, Panel, Tooltip, Window, WindowContent, WindowHeader} from 'react95';

import {ImFileMusic} from 'react-icons/im';
import {RiBugLine} from 'react-icons/ri';
import {CgGames} from 'react-icons/cg';

import Draggable from 'react-draggable';
import './Profile.css';


import { StoreContext } from '../../store';


export const Profile = () => {
  
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({type: 'SET_PROFILE_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_PROFILE_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'profile' });
      };


    return (
      <Draggable>
        <Window resizable style={{
              width: "40%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "25%",
              top: "10%",
              overflowY: "auto",
              display: state.ProfileModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
       
          
        <WindowHeader className='window-header'>
          <span>profile.exe</span>
          <div className='window-state' >
               <Button onClick={_handleClose}>
                    X
                </Button>
          </div> 
        </WindowHeader>
          <WindowContent>
          <div className="content">
            
              <p id="name">Ayoub Biferdou</p>
              <p>I am a young graduate in Software Engineering and Management of 3D Interactive Technologies</p>
              <p>I am passionate about computers since I was very young, I am extremely motivated to improve my skills and make the most of any experience in the field of software development.</p>
                    
                <Panel className='panel' variant='outside'>
                    Education
                    <Fieldset className="scol1" label="2019-2020">
                    <p className="me_school">Institut Image - Arts et Métiers ParisTech</p>
                    <p className="me_diploma">Master of Research in Management of 3D Interactive Technologies</p>
                    </Fieldset>
                    <Fieldset className="scol2" label="2015-2020">
                    <p className="me_school">Polytechnique School of Agadir - Universiapolis</p>
                    <p className="me_diploma">Software Engineering</p>
                    </Fieldset>
                </Panel>
                    <Fieldset className="hobbiesFieldSet" label="Hobbies">
                      <div className="hobbies">
                      <Tooltip className="hobby_disc" text='Music Production' enterDelay={100} leaveDelay={100}>  
                        <Cutout className="hobby"> 
                          <ImFileMusic className="hobbyIco"></ImFileMusic>     
                        </Cutout>  
                      </Tooltip>  
                      <Tooltip className="hobby_disc" text='CTF (Catch the Flag)' enterDelay={100} leaveDelay={100}>
                        <Cutout className="hobby">
                         <RiBugLine className="hobbyIco"></RiBugLine>     
                        </Cutout>   
                      </Tooltip>   
                       
                      <Tooltip className="hobby_disc" text='Gaming' enterDelay={100} leaveDelay={100}> 
                        <Cutout  className="hobby">
                          <CgGames className="hobbyIco"></CgGames>
                        </Cutout>
                      </Tooltip>
                      </div>
                    </Fieldset>
          </div>      
          </WindowContent>
        </Window>
    
      </Draggable>
    );
  
  };
  

  
  export default Profile;