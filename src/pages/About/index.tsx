
import { GeneralInfo } from './GeneralInfo';
import { GuildMembers } from './GuildMembers';

import './index.scss';

export const About = () => {
    return (
        <section className='about-page'>
            <GeneralInfo />
            <GuildMembers />
        </section>
    );
}