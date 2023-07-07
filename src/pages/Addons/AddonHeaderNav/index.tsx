import { Link } from 'react-router-dom';
import { addonsPage } from '../../../constants/routing';
import { IMedia, addonLinks } from '../../../constants/media';

import './index.scss';

interface IAddonHeaderNav{
    setAddon: Function;
}

export const AddonHeaderNav = ({setAddon}:IAddonHeaderNav) => {
    return (
        <nav className='addon-nav'>
            {addonLinks.map((addon: IMedia, index: number)=>{
                return <Link key={index} to={`${addonsPage}/${addon.name}`} onClick={()=>setAddon(addon)}>{addon.name}</Link>
            })}
        </nav>
    );
}