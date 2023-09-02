
import { policyPage } from '../../constants/routing';
import { useScrollTop } from '../../hooks/useScrollTop';
import { useTitle } from '../../hooks/useTitle';

import { Policies } from './Policies';
import { TitleAndIntro } from './TitleAndIntro';

import './index.scss';

export const Policy = () => {
    useTitle(policyPage);
    useScrollTop();
    return (
        <section className='policy-page'>
            <TitleAndIntro />
            <Policies />
        </section>
    );
}