
import { aboutPage } from '../../constants/routing';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useTitle } from '../../hooks/useTitle';

import { GeneralInfo } from './GeneralInfo';
import { GuildMembers } from './GuildMembers';

import './index.scss';

export const About = () => {
    useTitle(aboutPage);
    useScrollTop();
    return (
        <section className='about-page'>
            <GeneralInfo />
            <GuildMembers />
        </section>
    );
}