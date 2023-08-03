
import { aboutPage } from '../../constants/routing';
import { useTitle } from '../../hooks/useTitle';

import { GeneralInfo } from './GeneralInfo';
import { GuildMembers } from './GuildMembers';

import './index.scss';

export const About = () => {
    useTitle(aboutPage);
    return (
        <section className='about-page'>
            <GeneralInfo />
            <GuildMembers />
        </section>
    );
}