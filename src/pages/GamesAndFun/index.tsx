import { BackgroundImage } from '../../components/BackgroundImage';
import { IGame, gamesAndFun } from '../../data/games';

import { GameCard } from './GameCard';
import { ThemeBG } from '../../assets';

import './index.scss';

export const GamesAndFun = () => {
    return (
        <section className='games-and-fun-page'>
            <BackgroundImage image={ThemeBG} style={{filter: 'brightness(50%)'}}/>
            {gamesAndFun.map((game: IGame, index: number)=>{
                return <GameCard key={index} data={game}/>;
            })}
        </section>
    );
}