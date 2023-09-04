import { useState } from 'react';
import { Outlet } from 'react-router';

import { newsPage } from '../../constants/routing';
import { useTitle } from '../../hooks/useTitle';
import { INews , newsData } from '../../data/news';
import { paginationNumber } from '../../constants/general';

import { Title } from './Title';
import { NewsItem } from './NewsItem';

import './index.scss';
import { BackgroundImage } from '../../components/BackgroundImage';
import { ThemeBG } from '../../assets';

export const News = () => {
    
    useTitle(newsPage);

    const [newsItem,setNewsItem] = useState<INews | null>(null);
    const [pagination,setPagination] = useState<boolean>(false);

    return (
        <section className="news-page">
            <BackgroundImage image={ThemeBG} style={{filter: 'brightness(50%)'}}/>
            {newsItem ? <Outlet context={newsItem}/> :
                <>
                    <Title />
                    <div className='news-container'>
                        {newsData.map((news: INews,index: number)=>{
                            if(!pagination && index > paginationNumber) return null;
                            return <NewsItem key={index} news={news} setNewsItem={setNewsItem}/>
                        })}
                    </div>
                    {!pagination && newsData.length > paginationNumber &&
                        <div className='pagination-button-wrapper'>
                            <button onClick={()=>setPagination(true)}>Load All News</button>
                        </div>
                    }    
                </>
            }
        </section>
    );
}