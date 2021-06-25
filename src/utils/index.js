import { Howl } from 'howler';

export const startupSound = () => {
    return new Howl({
        src: [require('../assets/audio/windows95_startup_theme.mp3')],
    });
};