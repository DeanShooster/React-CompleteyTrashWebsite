import { IBingoCard } from "../../../../../data/bingoCards";
import { BingoCard } from "./BingoCard";

import './index.scss';

interface IBingoBoard{
    cards: IBingoCard[];
    rolling: boolean | null;
    bingoBoardRef: any;
}

export const BingoBoard = ({cards,rolling,bingoBoardRef} : IBingoBoard) => {
    return (
        <div className='bingo-board-container' ref={bingoBoardRef}>
            {cards.map((card: IBingoCard, index: number)=>{
                return <BingoCard key={index} card={card} rolling={rolling}/>;
            })}
        </div>
    )
}