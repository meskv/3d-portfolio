import React from "react";
import "../css/DarkModes.css";

import { BsSun, BsFillMoonFill } from 'react-icons/bs'


const DarkMode = () => {
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <BsSun />
                <BsFillMoonFill />
            </label>
        </div>
    );
};

export default DarkMode;
