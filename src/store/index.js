import React, { createContext, useReducer } from 'react';

export const StoreContext = createContext({});

const initialState = {
    menu: false,
    hideAboutModalButton: true,
    hideSkillsModalButton: true,
    hideProfileModalButton: true,
    hideGlobeModalButton: true,
    hideCryptoModalButton: true,
    hideTerminalModalButton: true,
    hideJennyModalButton: true,
    hideContactModalButton: true,
};

function reducer(state, action) {
    switch (action.type){
        case 'SET_MENU':
            return{
                ...state,
                menu: action.payload,
            };
        
        case 'SET_ABOUT_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                AboutModal: action.payload,
            };
        case 'SET_HIDE_ABOUT_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideAboutModalButton: action.payload,
            };
        
        case 'SET_SKILLS_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                SkillsModal: action.payload,
            };
        case 'SET_HIDE_SKILLS_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideSkillsModalButton: action.payload,
            };

        case 'SET_PROFILE_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                ProfileModal: action.payload,
            };
        case 'SET_HIDE_PROFILE_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideProfileModalButton: action.payload,
            };
        case 'SET_GLOBE_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                GlobeModal: action.payload,
            };
        case 'SET_HIDE_GLOBE_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideGlobeModalButton: action.payload,
            };
        case 'SET_CRYPTO_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                CryptoModal: action.payload,
            };
        case 'SET_HIDE_CRYPTO_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideCryptoModalButton: action.payload,
            };
        case 'SET_JENNY_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                JennyModal: action.payload,
            };
        case 'SET_HIDE_JENNY_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideJennyModalButton: action.payload,
            };
        case 'SET_CONTACT_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                ContactModal: action.payload,
            };
        case 'SET_HIDE_CONTACT_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideContactModalButton: action.payload,
            };
        case 'SET_TERMINAL_MODAL':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                TerminalModal: action.payload,
            };
        case 'SET_HIDE_TERMINAL_MODAL_BUTTON':
            action.payload && setBodyOverflow('hidden');
            return{
                ...state,
                hideTerminalModalButton: action.payload,
            };
        //default
        default:
            return state;

    }
}

function setBodyOverflow(proprety){
    document.body.style.overflow = proprety;
}

const Store = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <StoreContext.Provider value={[state, dispatch]}>
            {children}
        </StoreContext.Provider>
    );
};

export default Store;