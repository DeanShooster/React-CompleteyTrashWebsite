import { useState , useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router';
import { IMedia, addonLinks, addonVideoGuide } from '../../constants/media';
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
    const navigate = useNavigate();

    useEffect(()=>{
        if(pathname === addonsPage) setAddon(null);
        else{
            const addonName: string = pathname.split('/')[2].replace('%20',' '); // URL: URL/AA/BB -> BB , URL/AA/B%20BBB -> B BBB
            const addon = addonLinks.find((addon: IMedia)=> addonName === addon.name);
            if(addon) setAddon(addon);
            else navigate(`${addonsPage}s/${addonName}`); // Dynamic URL fixup (Throws 404)
        }
    },[pathname])

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