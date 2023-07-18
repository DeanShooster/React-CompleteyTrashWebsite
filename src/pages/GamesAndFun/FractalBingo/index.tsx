import { useOutletContext } from 'react-router';
import { IGame } from '../../../data/games';

import { Instructions } from './Instructions';
import { BingoGame } from './BingoGame';

import './index.scss';

export const FractalBingo = () => {

    const game: IGame = useOutletContext();

    return (
        <section className='fractal-bingo-page'>
            {game.instructions && <Instructions instructions={game.instructions}/>}
            <BingoGame />
        </section>
    );
}