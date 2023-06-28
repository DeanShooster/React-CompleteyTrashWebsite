import { useState } from 'react';
import useWindowSize from '../../hooks/useWindowSize';

import { Logo } from './Logo';
import { Navigation } from './Navigation';
import { Media } from './Media';

import './index.scss';
import { BurgerMenu } from '../../assets';

export const Header = () => {
    const {windowSize , screenSize } = useWindowSize();
    const [openBurgerMenu, setOpenBurgerMenu] = useState<boolean>(false);

    const isDesktop = windowSize >= screenSize.ipad;

    return (
        <header>
            <Logo />
            {isDesktop && <Navigation />}
            <Media />
            {!isDesktop && <img className='burger-menu' alt='' src={BurgerMenu} onClick={()=> setOpenBurgerMenu(!openBurgerMenu)} />}
            {!isDesktop && openBurgerMenu && <Navigation burgerMenuOpen={setOpenBurgerMenu}/>}
        </header>
    );
}