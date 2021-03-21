import React from 'react';
import Avatar1 from './icons/A1';
import Avatar2 from './icons/A2';
import Avatar3 from './icons/A3';
import Avatar4 from './icons/A4';
import Avatar5 from './icons/A5';
import Avatar6 from './icons/A6';
import Avatar7 from './icons/A7';
import Avatar8 from './icons/A8';

const random = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const Avatar: React.FC = () => {
    const rand = random(0, 8);
    switch (rand) {
        case 0:
            return <Avatar1 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        case 1:
            return <Avatar2 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        case 2:
            return <Avatar3 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        case 3:
            return <Avatar4 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        case 4:
            return <Avatar5 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        case 5:
            return <Avatar6 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        case 6:
            return <Avatar7 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        case 7:
            return <Avatar8 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
        default:
            return <Avatar1 viewBox="0 0 50 50" width="100%" height="auto" style={{ zIndex: 1 }} />;
    }
};

export default Avatar;
