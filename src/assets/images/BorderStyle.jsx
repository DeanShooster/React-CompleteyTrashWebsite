
import './border-style.scss';
import borderBottom from '../../../assets/border-bottom.png';
import borderLeft from '../../../assets/border-left.png';
import borderRight from '../../../assets/border-right.png';
import borderTop from '../../../assets/border-top.png';

const BorderStyle = ( {innerWidth} ) => {
    return (
        <div className='border-style'>
            <img src={borderBottom} alt="" className='border-bottom' style={{height: innerWidth}}/>
            <img src={borderLeft} alt="" className='border-left' style={{width: innerWidth}}/>
            <img src={borderRight} alt="" className='border-right' style={{width: innerWidth}}/>
            <img src={borderTop} alt="" className='border-top' style={{height: innerWidth}}/>
        </div>
    );
};

export default BorderStyle;