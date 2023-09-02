import { useEffect, useState } from 'react';

import { FlameTitle } from './FlameTitle';
import { Screen } from './Screen';
import { OtherWebsites } from './OtherWebsites';
import { useTitle } from '../../hooks/useTitle';

import './index.scss';
import { BackgroundImage } from '../../components/BackgroundImage';
import { HomePageBG } from '../../assets';

export const Home = () => {
    useTitle('');
    const [flameTitle,setFlameTitle] = useState<null | React.ReactNode>(null);

    useEffect(()=>{ setTimeout(()=> setFlameTitle(<FlameTitle />) ,750)},[]);

    return (
        <section className="home-page">
            <BackgroundImage image={HomePageBG} style={{ filter:'brightness(80%)' }}/>
            {flameTitle}
            <Screen />
            <OtherWebsites />
        </section>
    );
}