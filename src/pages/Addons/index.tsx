import { useState } from 'react';
import { Outlet } from 'react-router';
import { IMedia, addonLinks, addonVideoGuide } from '../../constants/media';
import { addonsPage } from '../../constants/routing';

import { AddonHeaderNav } from './AddonHeaderNav';
import { AddonIntro } from './AddonIntro';
import { TitleAndVideo } from '../../components/TitleAndVideo';

import './index.scss';
import { BackgroundImage } from '../../components/BackgroundImage';
import { ThemeBG } from '../../assets';
import useNestedPathname from '../../hooks/useNestedPathname';

export const Addons = () => {
    
    const [addon,setAddon] = useState<IMedia | null>(null);
    useNestedPathname(addonsPage,setAddon,addonLinks)

    return (
        <section className='addons-page'>
            <BackgroundImage image={ThemeBG} style={{filter: 'brightness(50%)'}}/>
            <AddonHeaderNav setAddon={setAddon}/>
            {addon ? <Outlet context={addon}/> : 
                <>    
                    <AddonIntro />
                    <TitleAndVideo title='Addon Basic Video Guide' source={addonVideoGuide} />
                </>
            }
        </section>
    );
}