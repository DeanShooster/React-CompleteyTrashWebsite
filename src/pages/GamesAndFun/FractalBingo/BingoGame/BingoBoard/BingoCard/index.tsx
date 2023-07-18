import { useState} from 'react';
import { IBingoCard } from '../../../../../../data/bingoCards';
import { ImageBorderBlackFence } from '../../../../../../components/ImageBorderBlackFence';

interface IBingoGameCard{
    card: IBingoCard;
    rolling: boolean | null;
}

export const BingoCard = ({card,rolling}: IBingoGameCard) => {

    const [marked,setMarked] = useState(false);

    const markCardHandler = () =>{
        if(rolling === false) setMarked(!marked);
    }

    return (
        <div className={rolling === null ? "bingo-card idle-card" : (rolling ? 'bingo-card idle-card rolling-card' : (marked ? 'bingo-card bingoed-card chosen-card' : 'bingo-card bingoed-card'))} onClick={markCardHandler}
            style={{ border: marked ? '2px solid white' : undefined }}
        >
            <h1 data-html2canvas>{card.fractal}</h1>
            <h4>{card.title}</h4>
            <p>{card.data}</p>
            {card.fractal && <ImageBorderBlackFence />}
            <img alt='' src={card.image} className='bingo-card-image'/>
        </div>
    )
}