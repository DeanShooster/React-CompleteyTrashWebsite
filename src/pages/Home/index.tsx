import { FlameTitle } from './FlameTitle';
import { Screen } from './Screen';
import { OtherWebsites } from './OtherWebsites';

import './index.scss';
import { BackgroundImage } from '../../components/BackgroundImage';
import { HomePageBG } from '../../assets';

export const Home = () => {
    return (
        <section className="home-page">
            <BackgroundImage image={HomePageBG} style={{ filter:'brightness(80%)' }}/>
            <FlameTitle />
            <Screen />
            <OtherWebsites />
        </section>
    );
}