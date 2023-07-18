
import './index.scss';
import { BackgroundWall } from '../BackgroundWall';

interface IModal{
    title: string;
    text: string;
    closeModal: Function;
}

export const Modal = ({title,text,closeModal}: IModal) =>{
    return (
        <>
            <BackgroundWall />
            <div className='modal'>
                <span onClick={()=>closeModal()}>X</span>
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </>
    )
}