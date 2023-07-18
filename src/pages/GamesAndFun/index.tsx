import { useState } from 'react';
import { Outlet } from 'react-router';
import { gameAndFunPage } from '../../constants/routing';

import { BackgroundImage } from '../../components/BackgroundImage';
import { IGame, gamesAndFun } from '../../data/games';

import { GameCard } from './GameCard';
import { ThemeBG } from '../../assets';

import './index.scss';
import useNestedPathname from '../../hooks/useNestedPathname';

export const GamesAndFun = () => {

    const [game, setGame] = useState<IGame | null>();
    useNestedPathname(gameAndFunPage,setGame,gamesAndFun);

    return (
        <section className='games-and-fun-page'>
            <BackgroundImage image={ThemeBG} style={{filter: 'brightness(50%)'}}/>
            {game ? <Outlet context={game}/> :
                <>
                    {gamesAndFun.map((game: IGame, index: number)=>{ return <GameCard key={index} data={game}/>; })}
                </>
            }
        </section>
    );
}