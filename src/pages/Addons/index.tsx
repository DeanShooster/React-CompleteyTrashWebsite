import { useState , useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { IMedia } from '../../constants/media';
import { addonsPage } from '../../constants/routing';

import { AddonHeaderNav } from './AddonHeaderNav';
import { AddonIntro } from './AddonIntro';
import { TitleAndVideo } from '../../components/TitleAndVideo';

import './index.scss';
import { BackgroundImage } from '../../components/BackgroundImage';
import { ThemeBG } from '../../assets';

export const Addons = () => {
    
    const [addon,setAddon] = useState<IMedia | null>(null);
    const { pathname } = useLocation();

    useEffect(()=>{
        if(pathname === addonsPage) setAddon(null);
    },[pathname])

    return (
        <section className='addons-page'>
            <BackgroundImage image={ThemeBG} style={{filter: 'brightness(50%)'}}/>
            <AddonHeaderNav setAddon={setAddon}/>
            {addon ? <Outlet context={addon}/> : 
                <>    
                    <AddonIntro />
                    <TitleAndVideo title='Addon Basic Video Guide' source='https://www.youtube-nocookie.com/embed/eIf1CBb365M' />
                </>
            }
        </section>
    );
}