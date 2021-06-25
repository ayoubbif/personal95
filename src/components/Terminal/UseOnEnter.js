import { useState } from 'react';

const commands = {
    help: 'quit: exit the terminal, clear: clean up the terminal, open: open the directory, close: close the directory, hire: gives you detailed coordinates to contact me',
    quit: 'Quitting the terminal ... Adios!',
    ls: 'About  Profile  Skills  Crypto  Globe',
    'open about': 'About is now open',
    'close about': 'About is now closed',
    'open profile': 'Profile is now open',
    'close profile': 'Profile is now closed',
    'open skills': 'Skills is now open',
    'close skills': 'Skills is now closed',
    'open crypto': 'Crypto is now open',
    'close crypto': 'Crypto is now closed',
    'open jenny': 'Jenny is now open',
    'close jenny': 'Jenny is now closed',
    'open globe': 'Globe is now open',
    'close globe': 'Globe is now closed',
    hire: 'Please contact me at "ayoub.biferdou@gmail.com"',
    clear: 'clear',
}


function UseOnEnter() {
    const [consoleOutput, updateConsoleOutput] = useState([]);
    const [commandValues, setCommandValues] = useState([]);

    const onEnter = (value, key) => {
        if(key === 'Enter'){
            if (value.toLowerCase() === 'clear') {
                updateConsoleOutput([]);
            }
            setCommandValues(value.toLowerCase());
            const newConsoleLine = commands[value.toLowerCase()] || `invalid command: ${value}`;
            return updateConsoleOutput((consoleOutput) => consoleOutput.concat(newConsoleLine));
        }
    };


    return [consoleOutput, commandValues, onEnter];
};

export default UseOnEnter
