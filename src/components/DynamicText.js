import { getRoles } from '@testing-library/react';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

const DynamicText = () => {
    const {text} = useTypewriter({
        words: ['Web', 'Web mobile', 'Front-end', 'Back-end','optimiste','motivé','curieux'],
        loop: false
      })

    return (
        <h2>
            Développeur <span style={{color:'green'}}>{text}</span>
            <Cursor />
        </h2>
    );
};

export default DynamicText;