
import './index.scss';
import { borderBottom, borderLeft, borderRight, borderTop } from '../../assets';

interface IImageBorderBlackFence{
    innerWidth?: string;
}

export const ImageBorderBlackFence = ({innerWidth}: IImageBorderBlackFence) => {
    return (
        <div className='border-style'>
            <img src={borderBottom} alt="" className='border-bottom' style={{height: innerWidth}}/>
            <img src={borderLeft} alt="" className='border-left' style={{width: innerWidth}}/>
            <img src={borderRight} alt="" className='border-right' style={{width: innerWidth}}/>
            <img src={borderTop} alt="" className='border-top' style={{height: innerWidth}}/>
        </div>
    );
}