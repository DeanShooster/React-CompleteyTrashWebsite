
import { Policies } from './Policies';
import { TitleAndIntro } from './TitleAndIntro';

import './index.scss';

export const Policy = () => {
    return (
        <section className='policy-page'>
            <TitleAndIntro />
            <Policies />
        </section>
    );
}