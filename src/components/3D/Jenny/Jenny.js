import React, { Suspense, useRef, useContext } from "react"
import { Canvas } from "@react-three/fiber"
import Model from "./Character"

import { WindowContent, Window, WindowHeader, Cutout, Button } from 'react95';

import Draggable from 'react-draggable';
import './Jenny.css';

import { StoreContext } from '../../../store';
import { OrbitControls } from "@react-three/drei";


function Plane({ ...props }) {
  return (
    <mesh {...props} receiveShadow>
      <planeBufferGeometry args={[500, 500, 1, 1]} />
      <shadowMaterial transparent opacity={0.2} />
    </mesh>
  )
}

const Jenny = () => {
  const [state, dispatch] = useContext(StoreContext);

  const _handleClose = () => {
        dispatch({type: 'SET_JENNY_MODAL', payload: false});
        dispatch({type: 'SET_HIDE_JENNY_MODAL_BUTTON', payload: true});
    };
  const _handleClick = () => {
        dispatch({ type: 'SET_ACTIVE_MODAL', payload: 'jenny' });
      };

  const d = 8.25
  const mouse = useRef({ x: 0, y: 0 })

  return (
    <Draggable>
            <Window style={{
              width: "40%",
              minWidth: "fit-content",
              height: "fit-content",
              position: "absolute",
              left: "5%",
              top: "10%",
              overflowY: "auto",
              display: state.JennyModal ? 'block' : 'none',
            }}
            onClick={_handleClick}>
       
          
            <WindowHeader className='window-header'>
                <span>trash.exe</span>
                <div className='window-state'>
                    <Button onClick={_handleClose}>
                        X
                    </Button>
                </div>  
            </WindowHeader>
            <WindowContent>
              <Cutout style={{width: 'fit-content', height: '600px'}}>
                <Canvas shadows dpr={[1, 1.5]} camera={{ position: [0, -3, 18] }}>
                  <hemisphereLight skyColor={"black"} groundColor={0xffffff} intensity={0.5} position={[0, 50, 0]} />
                  <directionalLight
                    position={[-10, 20, 5]}
                    shadow-camera-left={d * -1}
                    shadow-camera-bottom={d * -1}
                    shadow-camera-right={d}
                    shadow-camera-top={d}
                    shadow-camera-near={0.1}
                    shadow-camera-far={1000}
                    castShadow
                  />
                  <Plane rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -10, 0]} />
                    <Suspense fallback={null}>
                      <Model mouse={mouse} position={[0, -10, 0]} scale={[0.1, 0.1, 0.1]} />
                    </Suspense>
                    <OrbitControls/>
                </Canvas>
              </Cutout>
            </WindowContent>
            </Window>
        </Draggable>

  )
}

export default Jenny;