import './Aside.css'
import React from "react";
import { Link } from 'react-router-dom';
import FuseLogo from '../../Assets/Fuse_logo.svg'

const Aside = () => {
    return (
        <div className='aside container'>
            <img src={FuseLogo} style={{ width: '150px' }} alt='Fuse Logo' />
            <Link to='/'>Posições</Link>
            <Link to='/dashboard'>Dashboard</Link>
        </div>
    )
}

export default Aside