import { useLocation } from 'react-router';
import { useTitle } from '../../hooks/useTitle';

import useWindowSize from '../../hooks/useWindowSize';

import './index.scss';
import { Poop } from '../../assets';

export const Page404 = () => {

    useTitle('/404 Error');

    const { windowSize , screenSize } = useWindowSize();
    const {pathname} = useLocation();

    const pathnameHandler = (path: string) => {
        const mobileUrlLimit = windowSize <= screenSize.mobile ? 10 : 20;
        if(path.length > mobileUrlLimit) return path.substring(0,mobileUrlLimit) + '...';
        return path;
    }

    return (
        <div className='page-404'>
            <h1>
                <span>Oops</span>
                <img alt='' src={Poop}/>
                <span>404 Error!</span>
            </h1>
            <p>It looks like you've lost your way!</p>
            <span className='url-404'>Https://completely-trash.gg{pathnameHandler(pathname)}</span>
            <p>doesn't exist.</p>
        </div>
    );
}