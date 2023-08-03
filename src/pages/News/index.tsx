import { newsPage } from '../../constants/routing';
import { useTitle } from '../../hooks/useTitle';

import './index.scss';

export const News = () => {

    useTitle(newsPage);

    return (
        <section className="news-page">
            News
        </section>
    );
}