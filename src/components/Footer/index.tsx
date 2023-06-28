import { NavLink } from 'react-router-dom';

import { policyPage } from '../../constants/routing';

import './index.scss';

export const Footer = () => {
    return (
        <footer>
            <div className='privacy-policy-container'>
                <div>Copyright © 2023 - {(new Date()).getFullYear()} is <span>Completely Trash</span></div>
                <NavLink to={policyPage}>Privacy Policy</NavLink>
            </div>
        </footer>
    );
}