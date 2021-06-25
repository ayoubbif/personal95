import React, { useContext } from 'react';
import {Select, Button, Fieldset, Window, WindowContent, WindowHeader, Tabs, Tab, TabBody} from 'react95';
import Draggable from 'react-draggable';
import './Skills.css';

import { StoreContext } from '../../store';

const Skills = () => {

      const [tabstate, settabState] = React.useState({
        activeTab: 0,
      });
      const handleChange = (e, value) => settabState({ activeTab: value });
      const { activeTab } = tabstate;
      //WEBDEV
      const optionsWebLanguages = [
        { value: 1, label:'JavaScript'},
        { value: 2, label:'Python'},
        { value: 3, label:'HTML'},
        { value: 4, label:'CSS'}
      ];
      const optionsFrontend = [
        { value: 1, label: '⚛️ React.js' },
        { value: 2, label: '🅰️ Angular.js' }
      ];
      const optionsBackend = [
        { value: 1, label: '🌶️ Flask.py' },
        { value: 1, label: '🥬 Node.js' },
      ];
      const optionsDB = [
        { value: 1, label: 'MySQL' },
        { value: 2, label: 'MongoDB' },
      ];
      const optionsDataScience = [
        { value: 1, label: '🐼 Pandas.py' },
        { value: 2, label: '🔢 NumPy.py' },
      ];
      //3D
      const options3DLanguages = [
        { value: 1, label: 'C#' },
        { value: 2, label: 'C++' },
        { value: 3, label: 'Python' },
        { value: 4, label: 'JavaScript' }
      ];
      const optionsGameEngines = [
        { value: 1, label: 'Unity' },
        { value: 2, label: 'Unreal Engine' },
      ];
      const optionsWebEngines = [
        { value: 1, label: 'Three.js' },
      ];
      const optionsAR = [
        { value: 1, label: 'Hololens' },
        { value: 2, label: 'Vuforia' },
        { value: 3, label: 'ARCore' },
        { value: 3, label: 'MRTK' }, 
      ];
      const optionsVR = [
        { value: 1, label: 'HTC Vive' }
      ];
      const optionsModeling = [
        { value: 1, label: 'Autodesk 3ds Max' }
      ];
      const optionsVisualisation = [
        { value: 1, label: 'Autodesk VRED' }
      ];
      //AI + Blockchain
      const optionsAI = [
        { value: 1, label: 'Tensorflow' },
        { value: 2, label: 'OpenCV' },
      ];
      const optionsBlockchain = [
        { value: 1, label: 'Solidity' },
        { value: 2, label: 'truffle.js' },
        { value: 3, label: 'web3.js' },
      ];
      //PRODUCTION
      const optionsScripting = [
        { value: 1, label: 'Bash' },
        { value: 2, label: 'Powershell' }
      ];
      const optionsGit = [
        { value: 1, label: 'Git' }
        
      ];
      const optionsDevOps = [
        { value: 1, label: 'Docker' },
        
      ];
  
    const onChange = (evt, nextSelection) => console.log(evt, nextSelection);
    
    //STORE
    const [state, dispatch] = useContext(StoreContext);

    const _handleClose = () => {
        dispatch({type: 'SET_SKILLS_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_SKILLS_MODAL_BUTTON', payload: true});
    };
    const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'skills' });
      };
    
    return(
      <Draggable>
        <Window resizable style={{
              width: "40%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "33%",
              top: "15%",
              overflowY: "auto",
              display: state.SkillsModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
        <WindowHeader className='window-header'>
                <span>skills.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                 </div>  
        </WindowHeader>
            <WindowContent>
            <Tabs value={activeTab} onChange={handleChange}>
                <Tab value={0}>Web Dev</Tab>
                <Tab value={1}>3D</Tab>
                <Tab value={2}>AI + Blockchain</Tab>
                <Tab value={3}>Production</Tab>
            </Tabs>
                <TabBody style={{ height: 'fit-content', width: 'fit-content' }}>
                    {activeTab === 0 && (
                    <div>
                        <Fieldset label='Languages'>
                          <Select 
                          defaultValue={1}
                          options={optionsWebLanguages}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
            
                          <Fieldset label='Frameworks'>
                          <Fieldset label='Front-End'>
                            <Select 
                            defaultValue={1}
                            options={optionsFrontend}
                            menuMaxHeight={160}
                            width='100%'
                            onChange={onChange}
                            onOpen={e => console.log('open', e)}
                            onClose={e => console.log('close', e)}
                            onBlur={e => console.log('blur', e)}
                            onFocus={e => console.log('focus', e)}
                            />
                          </Fieldset>
                          <Fieldset label='Back-End'>
                            <Select 
                            defaultValue={1}
                            options={optionsBackend}
                            menuMaxHeight={160}
                            width='100%'
                            onChange={onChange}
                            onOpen={e => console.log('open', e)}
                            onClose={e => console.log('close', e)}
                            onBlur={e => console.log('blur', e)}
                            onFocus={e => console.log('focus', e)}
                            />
                          </Fieldset>
                        </Fieldset>
                        <Fieldset label='Data'>
                          <Fieldset label='Databases'>
                            <Select 
                            defaultValue={1}
                            options={optionsDB}
                            menuMaxHeight={160}
                            width='100%'
                            onChange={onChange}
                            onOpen={e => console.log('open', e)}
                            onClose={e => console.log('close', e)}
                            onBlur={e => console.log('blur', e)}
                            onFocus={e => console.log('focus', e)}
                            />
                          </Fieldset>
                          <Fieldset label='Data Science'>
                            <Select 
                            defaultValue={1}
                            options={optionsDataScience}
                            menuMaxHeight={160}
                            width='100%'
                            onChange={onChange}
                            onOpen={e => console.log('open', e)}
                            onClose={e => console.log('close', e)}
                            onBlur={e => console.log('blur', e)}
                            onFocus={e => console.log('focus', e)}
                            />
                          </Fieldset>
                        </Fieldset>
                    </div>

                    )}
                    {activeTab === 1 && (
                    <div>
                        <Fieldset label='Languages'>
                          <Select 
                          defaultValue={1}
                          options={options3DLanguages}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='Game Engines'>
                          <Select 
                          defaultValue={1}
                          options={optionsGameEngines}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='Web Engines'>
                          <Select 
                          defaultValue={1}
                          options={optionsWebEngines}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='Augmented Reality'>
                          <Select 
                          defaultValue={1}
                          options={optionsAR}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='Virtual Reality'>
                          <Select 
                          defaultValue={1}
                          options={optionsVR}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='Modeling'>
                          <Select 
                          defaultValue={1}
                          options={optionsModeling}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='Visualization'>
                          <Select 
                          defaultValue={1}
                          options={optionsVisualisation}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                    </div>
                    )}
                    {activeTab === 2 && (
                    <div>
                        <Fieldset label='Articifial Intelligence'>
                            <Select 
                            defaultValue={1}
                            options={optionsAI}
                            menuMaxHeight={160}
                            width='100%'
                            onChange={onChange}
                            onOpen={e => console.log('open', e)}
                            onClose={e => console.log('close', e)}
                            onBlur={e => console.log('blur', e)}
                            onFocus={e => console.log('focus', e)}
                            />
                        </Fieldset>
                        <Fieldset label='Blockchain'>
                            <Select 
                            defaultValue={1}
                            options={optionsBlockchain}
                            menuMaxHeight={160}
                            width='100%'
                            onChange={onChange}
                            onOpen={e => console.log('open', e)}
                            onClose={e => console.log('close', e)}
                            onBlur={e => console.log('blur', e)}
                            onFocus={e => console.log('focus', e)}
                            />
                        </Fieldset>
                    </div>
                    )}
                    {activeTab === 3 && (
                    <div>
                        <Fieldset label='Scripting'>
                          <Select 
                          defaultValue={1}
                          options={optionsScripting}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='Version Control'>
                          <Select 
                          defaultValue={1}
                          options={optionsGit}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                        <Fieldset label='DevOps'>
                          <Select 
                          defaultValue={1}
                          options={optionsDevOps}
                          menuMaxHeight={160}
                          width='100%'
                          onChange={onChange}
                          onOpen={e => console.log('open', e)}
                          onClose={e => console.log('close', e)}
                          onBlur={e => console.log('blur', e)}
                          onFocus={e => console.log('focus', e)}
                          />
                        </Fieldset>
                    </div>
                    )}
                </TabBody>
            </WindowContent>
        </Window>
    
      </Draggable>

    );
};

export default Skills;