
import { policyPage } from '../../constants/routing';
import { useTitle } from '../../hooks/useTitle';

import { Policies } from './Policies';
import { TitleAndIntro } from './TitleAndIntro';

import './index.scss';

export const Policy = () => {
    useTitle(policyPage);
    return (
        <section className='policy-page'>
            <TitleAndIntro />
            <Policies />
        </section>
    );
}